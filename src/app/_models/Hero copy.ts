export interface StatsNew {
    strength: number;      
    agility: number;    
    intelligence: number;  // ✅ Spell dmg every 3 turns deal triple the int. Ignores armor.
  }

  export interface Hero {
    race: string;
    class: string;
    stats: any;
    portrait: string;
  }