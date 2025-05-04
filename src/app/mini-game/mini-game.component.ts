import { Component } from '@angular/core';
import { Hero } from '../_models/Hero';
import { CLASSES, RACES } from '../_services/hero-data.service';

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

  constructor() {
    this.generateHeroes();
  }

  newGame(): void {
    this.gold = 50;
    this.battleLog = [];
    this.winnerIndex = null;
    this.betOn = null;
    this.hero1 = this.generateHero();
    this.hero2 = this.generateHero();
  }

  generateHero(): Hero {
    const race = RACES[Math.floor(Math.random() * RACES.length)];
    const cls = CLASSES[Math.floor(Math.random() * CLASSES.length)];
    const portrait = race.portraits[Math.floor(Math.random() * race.portraits.length)];

    const stats = { ...race.stats };
    for (const key in cls.modifiers) {
      (stats as any)[key] += (cls.modifiers as any)[key];
    }

    return {
      race: race.name,
      class: cls.name,
      stats,
      portrait,
    };
  }

  generateHeroes(): void {
    if (this.winnerIndex === 0) {
      this.hero2 = this.generateHero(); // Loser is replaced
    } else if (this.winnerIndex === 1) {
      this.hero1 = this.generateHero(); // Loser is replaced
    } else {
      this.hero1 = this.generateHero();
      this.hero2 = this.generateHero();
    }

    this.winnerIndex = null;
    this.battleLog = [];
    this.betOn = null;
  }

  placeBet(index: 0 | 1): void {
    this.betOn = index;
  }

  battle(): void {
    const h1 = this.hero1.stats;
    const h2 = this.hero2.stats;

    const power1 = h1.strength + h1.accuracy + h1.speed + h1.intelligence;
    const power2 = h2.strength + h2.accuracy + h2.speed + h2.intelligence;

    const result = power1 + Math.random() * 10 > power2 + Math.random() * 10 ? 0 : 1;
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

    // 👇 Automatically replace loser with a new hero
    this.generateHeroes();
  }
}
