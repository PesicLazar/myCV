export const RACES = [
    {
      name: 'Human',
      stats: { endurance: 20, strength: 10, accuracy: 5, speed: 5, armor: 5, intelligence: 6 },
      portraits: ['/assets/RPG/Humans/human1.jpeg', '/assets/RPG/Humans/human2.jpeg'],
    },
    {
      name: 'Elf',
      stats: { endurance: 15, strength: 7, accuracy: 5, speed: 5, armor: 4, intelligence: 9 },
      portraits: ['/assets/RPG/Elfs/elf1.jpeg', '/assets/RPG/Elfs/elf2.jpeg'],
    },
    {
      name: 'Orc',
      stats: { endurance: 25, strength: 12, accuracy: 2, speed: 7, armor: 2, intelligence: 2 },
      portraits: ['/assets/RPG/Orcs/orc1.jpeg', '/assets/RPG/Orcs/orc2.jpeg', '/assets/RPG/Orcs/orc3.jpeg'],
    },
    {
      name: 'Khajit',
      stats: { endurance: 15, strength: 8, accuracy: 9, speed: 9, armor: 0, intelligence: 2 },
      portraits: ['/assets/RPG/Khajit/cat1.jpeg', '/assets/RPG/Khajit/cat2.jpeg', '/assets/RPG/Khajit/cat3.jpeg', '/assets/RPG/Khajit/cat4.png'],
    }
  ];
  
  export const CLASSES = [
    {
      name: 'Warrior',
      modifiers: { endurance: +5, strength: +2, armor: +3 },
    },
    {
      name: 'Thief',
      modifiers: { speed: +4, accuracy: +5, armor: +1 },
    },
    {
      name: 'Mage',
      modifiers: { intelligence: +5, speed: +3, accuracy: +2 },
    }
  ];