/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

function Hero(heroInfo) {
    Humanoid.call(this, heroInfo);
    this.losePoints = () => {
      if (this.healthPoints <= 0) { // destroy character if health goes 0 or below
        console.log("Health gone. Villain loses");
      } else {
        this.healthPoints--;
        console.log(`Hero took damage. Health is now ${this.healthPoints}`);
      }
    }
    this.gainPoints = () => {
      this.healthPoints++;
      console.log(`Hero gained health. Health is now ${this.healthPoints}`);
    }
  }
  
  
  function Villain(villainInfo) {
    Humanoid.call(this, villainInfo);
    this.losePoints = () => {
      if (this.healthPoints <= 0) {  // destroy character if health goes 0 or below
        console.log("Health gone. Villain loses");
      } else {
        this.healthPoints--;
        console.log(`Villain took damage. Health is now ${this.healthPoints}`);
  
      }
    }
    this.gainPoints = () => {
      this.healthPoints++;
      console.log(`Villain gained health. Health is now ${this.healthPoints}`);
  
    }
  };
  
  
  
  //call constructors with values
  const goodGuy = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 4,
      width: 3,
      height: 2,
    },
    healthPoints: 5,
    name: 'Chippy',
    team: 'Awesome Dudes',
    weapons: [
      'Hammer',
      'Stick',
    ],
    language: 'Elvish',
  });
  
  
  const badGuy = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 1,
      height: 2,
    },
    healthPoints: 7,
    name: 'Captain',
    team: 'Not So Cool Dudes',
    weapons: [
      'Small Sword',
      'Thorned Twig',
    ],
    language: 'Common Tongue',
  });
  
  goodGuy.gainPoints();
  goodGuy.losePoints();
  badGuy.gainPoints();
  badGuy.losePoints();
  goodGuy.gainPoints();
  badGuy.losePoints();
  badGuy.losePoints();
  badGuy.losePoints();
  badGuy.losePoints();
  badGuy.losePoints();
  badGuy.losePoints();
  badGuy.losePoints();
  badGuy.losePoints();
  