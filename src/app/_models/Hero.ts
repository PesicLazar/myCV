export interface Stats {
  strength: number;
  agility: number;
  intelligence: number;
}

export interface Hero {
  race: string;
  class: string;
  name: string;
  stats: Stats;
  portrait: string;
}