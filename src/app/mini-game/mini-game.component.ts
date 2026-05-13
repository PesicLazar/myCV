import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Hero, Stats } from '../_models/Hero';
import { STAT_KEYS, CLASSES, RACES, NAMES } from '../_services/hero-data.service';
import { WinDialogComponent } from '../win-dialog/win-dialog.component';
import { LoseDialogComponent } from '../lose-dialog/lose-dialog.component';

@Component({
  selector: 'app-mini-game',
  templateUrl: './mini-game.component.html',
  styleUrl: './mini-game.component.css'
})
export class MiniGameComponent {
  hero1!: Hero;
  hero2!: Hero;
  battleLog: string[] = [];
  winnerIndex: 0 | 1 | null = null;

  gold = 50;
  betOn: 0 | 1 | null = null;

  constructor(private dialog: MatDialog) {
    this.generateHeroes();
  }

  newGame(): void {
    this.gold = 100;
    this.battleLog = [];
    this.winnerIndex = null;
    this.betOn = null;
    this.hero1 = this.generateHero();
    this.hero2 = this.generateHero();
  }

  generateHero(forbiddenName?: string): Hero {
    const race = RACES[Math.floor(Math.random() * RACES.length)];
    const cls = CLASSES[Math.floor(Math.random() * CLASSES.length)];
    let nameEntry = NAMES[Math.floor(Math.random() * NAMES.length)];
    while (nameEntry.name === forbiddenName) {
        nameEntry = NAMES[Math.floor(Math.random() * NAMES.length)];
    }
    const portrait = race.portraits[Math.floor(Math.random() * race.portraits.length)];

    const stat = this.combineStats(race.stats, cls.stats, nameEntry.stats);
    return {
      race: race.name,
      class: cls.name,
      name: nameEntry.name,
      stats: stat ,
      portrait,
    };
  }

  getHeroTitle(hero: Hero): string {
    return `${hero.name} the ${hero.race} ${hero.class}`;
  }

  getHighestStatKey(stats: Stats): keyof Stats { 
    let highestKey: keyof Stats = 'strength';
    let highestValue = stats.strength;

    if (stats.agility > highestValue) {
      highestKey = 'agility';
      highestValue = stats.agility;
    } 

    if (stats.intelligence > highestValue) {
      highestKey = 'intelligence';
      highestValue = stats.intelligence;
    }

    return highestKey;
  }

  combineStats(racestat: Stats, clsstat: Stats, namestat: Stats): Stats {
    return {
      strength: racestat.strength + clsstat.strength + namestat.strength,
      agility: racestat.agility + clsstat.agility + namestat.agility,
      intelligence: racestat.intelligence + clsstat.intelligence + namestat.intelligence,
    };
  }

  generateHeroes(): void {
    if (this.winnerIndex === 0) {
      this.hero2 = this.generateHero(); // Loser is replaced
    } else if (this.winnerIndex === 1) {
      this.hero1 = this.generateHero(); // Loser is replaced
    } else {
     this.hero1 = this.generateHero();
     this.hero2 = this.generateHero(this.hero1.name); // Ensure different names for both heroes
    }

    this.winnerIndex = null;
    this.battleLog = [];
    this.betOn = null;
  }

  placeBet(index: 0 | 1): void {
    this.betOn = index;
  }

  giveRandomBoost(hero1Value: number, hero2Value: number, hero1Key: keyof Stats, hero2Key: keyof Stats): [number, number] {

    if (Math.random() < 0.5) {
      hero1Value++;
    } else {
      hero2Value++;
    }

    return [hero1Value, hero2Value];
}
  battle(): void {
    const hero1Key = this.getHighestStatKey(this.hero1.stats);
    const hero2Key = this.getHighestStatKey(this.hero2.stats);

    let hero1Value = this.hero1.stats[hero1Key];
    let hero2Value = this.hero2.stats[hero2Key];
     // First random boost
  [hero1Value, hero2Value] = this.giveRandomBoost(
    hero1Value,
    hero2Value,
    hero1Key,
    hero2Key
  );
   // If still tied, boost once again
    if (hero1Value === hero2Value) {
        [hero1Value, hero2Value] = this.giveRandomBoost(
          hero1Value,
          hero2Value,
          hero1Key,
          hero2Key
        );  
    }
    let result: 0 | 1;
    if (hero1Value > hero2Value) {
      result = 0;
    } else if (hero2Value > hero1Value) {
      result = 1;
    } else {
      const extraBoostIndex = Math.random() < 0.5 ? 0 : 1;
      if (extraBoostIndex === 0) {
        hero1Value += 1;
        this.battleLog.push(`Tie! Hero 1 gets an extra +1 to ${hero1Key}`);
      } else {
        hero2Value += 1;
        this.battleLog.push(`Tie! Hero 2 gets an extra +1 to ${hero2Key}`);
      }
      result = hero1Value >= hero2Value ? 0 : 1;
    }

    this.winnerIndex = result;
    this.battleLog.push(`Battle ended! Winner is Hero ${result + 1}`);

    if (this.betOn !== null) {
      if (this.betOn === result) {
        this.gold *= 2;
        this.battleLog.push(`You won the bet! Gold is now ${this.gold}`);
      } else {
        this.gold = 0;
        this.battleLog.push(`You lost the bet. Gold is now 0`);
      }
      this.betOn = null;
    }

    if (this.gold > 1000) {
      const dialogRef = this.dialog.open(WinDialogComponent);
      dialogRef.afterClosed().subscribe(() => {
        this.newGame();
      });
    } else if (this.gold === 0) {
      const dialogRef = this.dialog.open(LoseDialogComponent);
      dialogRef.afterClosed().subscribe(() => {
        this.newGame();
      });
    } else {
      // 👇 Automatically replace loser with a new hero
      this.generateHeroes();
    }
  }}