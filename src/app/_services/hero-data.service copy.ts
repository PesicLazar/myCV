export const RACESNew = [
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
      name: 'Nord',
      stats: { strength: 2, agility: 0, intelligence: 1 },
      portraits: ['/assets/RPG/Humans/human1.jpeg', '/assets/RPG/Humans/human2.jpeg'],
    },
    {
      name: 'Argonian',
      stats: { strength: 1, agility: 1, intelligence: 1 },
      portraits: ['/assets/RPG/Khajit/cat1.jpeg', '/assets/RPG/Khajit/cat2.jpeg', '/assets/RPG/Khajit/cat3.jpeg', '/assets/RPG/Khajit/cat4.png'],
    },
  ];
  
  export const CLASSES = [
    {
      name: 'Shaman',
      modifiers: { strength: 2, agility: 0, intelligence: 1 },
    },
    {
      name: 'Assassin',
      modifiers: { strength: 1, agility: 2, intelligence: 0 },
    },
    {
      name: 'Mage',
      modifiers: { strength: 0, agility: 1, intelligence: 2},
    },
      {
      name: 'Cleric',
      modifiers: { strength: 1, agility: 0, intelligence: 2},
    },
      {
      name: 'Adventurer',
      modifiers: { strength: 1, agility: 1, intelligence: 1},
    },  {
      name: 'Berserker',
      modifiers: { strength: 2, agility: 1, intelligence: 0},
    },
      {
      name: 'Hunter',
      modifiers: { strength: 0, agility: 2, intelligence: 1},
    }
  ];

/* secret tier list 

Best combos : Orc/Nord + Berserker/Shaman, Khajit/night Elf + Assassin/Hunter, High Elf/Human + Mage/Cleric
Worst combos : Argonian + Adventurer , Night Elf + Shaman, Orc + Mage, Nord + Hunter, Khajit + Cleric...



*/
