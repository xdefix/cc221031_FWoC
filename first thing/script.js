const data = {
    color: 'red',
    name: 'Jane Doe',
    type: 'Superhero',
    animalLongKeyName: 'Shark',
    number: 42,
    heroes: ['Wonder Woman:DC', 'Batman:DC', 'Thor:Marvel', 'Ant Man:Marvel'],
  };
  
  const {name, color} = data;
  const [h1, h2] = data.heroes
  
  // const name = data.name
  // const color = data.color
  
  console.log(h1, h2);
  
  function printStuff({ color, animalLongKeyName: animal, msg }){
      console.log( color, animal, msg );
  }
  
  printStuff(data);
  
  const heroes= ['Wonder Woman:DC', 'Batman:DC', 'Thor:Marvel', 'Ant Man:Marvel'];
  const customHeroes = [...heroes];
  customHeroes.push('Spiderman:Marvel');
  
  console.log(heroes);
  console.log(customHeroes);
  
  
  printHeroes('A', 'B');
  printHeroes(...heroes);
  
  function printHeroes(superhero, ...heroesToPrint) {
    console.log(superhero);
    console.log(heroesToPrint);
  }