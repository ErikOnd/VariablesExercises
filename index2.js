let spaghetti = 400;
let guanciale = 250;
let eggYolks = 6;
let cheese = 50;
let blackPaper = 4;
let waterSpoon2 = 30;

// one eggYolk ~ 18g
let eggsCheese = (eggYolks * 18) + cheese;

//adding just a little paper 
let eggsCheeseLittlePepper = eggsCheese + blackPaper / 4;

//subtracting the taken amount 
blackPaper += -1;
console.log(blackPaper)

//cooked spaghetti weight is 1:1,5 
spaghetti += spaghetti * 1.5;

//adding pinch of salt
spaghetti += 0.36;

//adding water to the guanciale
guanciale += waterSpoon2;

let pastaGuanciale = spaghetti + guanciale;

//added the toFixed function so the right number gets displayed 
let carbonara = (pastaGuanciale + eggsCheeseLittlePepper + blackPaper).toFixed(2);
console.log(carbonara);

