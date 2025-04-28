export interface Stats {
    endurance: number;     // ✅ Health. Clean.
    strength: number;      // ✅ Physical damage + armor piercing.
    accuracy: number;      // ✅ Crit chance(3% per point) + hit chance (3% per point).
    speed: number;         // ✅ Who goes first + dodge (3% per point) + double hit on double speed.
    armor: number;         // ✅ Flat damage reduction.
    intelligence: number;  // ✅ Spell dmg every 3 turns deal triple the int. Ignores armor.
  }

  export interface Hero {
    race: string;
    class: string;
    stats: any;
    portrait: string;
  }