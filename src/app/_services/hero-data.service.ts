export const STAT_KEYS = ['strength', 'agility', 'intelligence'] as const;

export const RACES = [
    {
      name: 'Human',
      stats: { strength: 1, agility: 0, intelligence: 2 },
      portraits: ['/assets/RPG/Humans/human1.jpeg', '/assets/RPG/Humans/human2.jpeg'],
    },
    {
      name: 'High Elf',
      stats: { strength: 0, agility: 1, intelligence: 2 },
      portraits: ['/assets/RPG/Elfs/elf1.jpeg', '/assets/RPG/Elfs/elf2.jpeg'],
    },
    {
      name: 'Night Elf',
      stats: { strength: 0, agility: 2, intelligence: 1 },
      portraits: ['/assets/RPG/Elfs/elf1.jpeg', '/assets/RPG/Elfs/elf2.jpeg'],
    },
    {
      name: 'Orc',
      stats: { strength: 2, agility: 1, intelligence: 0 },
      portraits: ['/assets/RPG/Orcs/orc1.jpeg', '/assets/RPG/Orcs/orc2.jpeg', '/assets/RPG/Orcs/orc3.jpeg'],
    },
    {
      name: 'Khajit',
      stats: { strength: 1, agility: 2, intelligence: 0 },
      portraits: ['/assets/RPG/Khajit/cat1.jpeg', '/assets/RPG/Khajit/cat2.jpeg', '/assets/RPG/Khajit/cat3.jpeg', '/assets/RPG/Khajit/cat4.png'],
    },
    {
      name: 'Dwarf',
      stats: { strength: 2, agility: 0, intelligence: 1 },
      portraits: ['/assets/RPG/Humans/human1.jpeg', '/assets/RPG/Humans/human2.jpeg'],
    },
    {
      name: 'Shape Shifter',
      stats: { strength: 1, agility: 1, intelligence: 1 },
      portraits: ['/assets/RPG/Khajit/cat1.jpeg', '/assets/RPG/Khajit/cat2.jpeg', '/assets/RPG/Khajit/cat3.jpeg', '/assets/RPG/Khajit/cat4.png','/assets/RPG/Humans/human1.jpeg', '/assets/RPG/Humans/human2.jpeg','/assets/RPG/Orcs/orc1.jpeg', '/assets/RPG/Orcs/orc2.jpeg', '/assets/RPG/Orcs/orc3.jpeg','/assets/RPG/Elfs/elf1.jpeg', '/assets/RPG/Elfs/elf2.jpeg'],
    },  ];

    export const CLASSES = [
    {
      name: 'Warlock',
      stats: { strength: 2, agility: 0, intelligence: 1 },
    },
    {
      name: 'Thief',
      stats: { strength: 1, agility: 2, intelligence: 0 },
    },
    {
      name: 'Mage',
      stats: { strength: 0, agility: 1, intelligence: 2},
    },
      {
      name: 'Cleric',
      stats: { strength: 1, agility: 0, intelligence: 2},
    },
      {
      name: 'Adventurer',
      stats: { strength: 1, agility: 1, intelligence: 1},
    },  {
      name: 'Warrior',
      stats: { strength: 2, agility: 1, intelligence: 0},
    },
      {
      name: 'Hunter',
      stats: { strength: 0, agility: 2, intelligence: 1},
    }
  ];

  export const NAMES = [
    { name: 'Jeff', stats: { strength: 1, agility: 0, intelligence: 0 } },   
    { name: 'Pogi', stats: { strength: 1, agility: 0, intelligence: 0 } }, 
    { name: 'Yaniv', stats: { strength: 1, agility: 0, intelligence: 0 } }, 
    { name: 'Joko', stats: { strength: 0, agility: 1, intelligence: 0 } }, 
    { name: 'Gunter', stats: { strength: 0, agility: 1, intelligence: 0 } }, 
    { name: 'Speedy', stats: { strength: 0, agility: 1, intelligence: 0 } }, 
    { name: 'Nusbbel', stats: { strength: 0, agility: 0, intelligence: 1 } }, 
    { name: 'Kiara', stats: { strength: 0, agility: 0, intelligence: 1 } }, 
    { name: 'Jakiro', stats: { strength: 0, agility: 0, intelligence: 1 } }, 
  ];