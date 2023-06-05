'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const days = ["Mon","Tue","Wed","Thur","Fri","Sat","Sun"];
const openingHours = {
  Thur: {
    open: 12,
    close: 22,
  },
  Fri: {
    open: 11,
    close: 23,
  },
  Sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// console.log(openingHours);
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
  },
  orderPasta : function(ing1,ing2,ing3){
    console.log(`this Pastais with ${ing1},${ing2},${ing3}`);
  }

};



// const {Mon:{open}} = openingHours;
// console.log(open);
// for(const day of days){
//   const open = restaurant.openingHours[day]?.open ??"closed";
//   console.log(`On ${day} oprn at ${open}`);
// }


// const restaurant1 = {
//   resName : "Hello",
//   numGuest : 0,
// }

// const restaurant2 = {
//   resName : "World",
//   owner : "Sai Yan Naing",
// }
// OR
// restaurant1.numGuest ||= 10;
// restaurant2.owner || "Anynomous";
// console.log(restaurant1.numGuest,restaurant2.owner);

// // AND
// restaurant1.numGuest &&= 10;
// restaurant2.owner &&= "Anynomous";
// console.log(restaurant1.numGuest,restaurant2.owner);

// Nullish Assigment Operator

// restaurant1.numGuest ??= 10;
// restaurant2.owner ??= "Anynomous";
// console.log(restaurant1.numGuest,restaurant2.owner);





// restaurant.orderPasta && restaurant.orderPasta("M","B")

// restaurant.guessNum = 0;
// const guest = restaurant.guessNum ?? 10;
// console.log(guest);


// console.log("h" && 23 && null && 0);
// const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guest1);
// const guest1 = restaurant.numGuest || 10;
// console.log(guest1);



// const add = function(...numbers){
//   let sum = 0;
//   for(let i = 0;i < numbers.length;i ++){
//     sum += numbers[i];
//   }
//   console.log(sum);
// }
// add(1,2,3,4,5,6,7,8,9,10)
// const {sat : {open} , ...others} = restaurant.openingHours;
// console.log(open,others);


// const [a,b,...others] = [1,2,3,4,5,6,7,8,9,10]
// console.log(a,b,others);

// const [firstFood,secondFood,...others] = [...restaurant.mainMenu,restaurant.starterMenu]
// console.log(firstFood,secondFood,others);

// const ingredient = [
//   prompt(`let's make pasta with ing1?`),
//   prompt(`let's make pasta with ing2?`),
//   prompt(`let's make pasta with ing3?`),
// ]

// console.log(restaurant.orderPasta(...ingredient));


// const menu = [...restaurant.mainMenu,...restaurant.starterMenu]
// console.log(menu);

// const myName = "Sai Yan Naing";
// const newArr = [...myName];
// console.log(newArr);

// const [starterFood,mainFood] = restaurant.order(2,0);
// console.log(starterFood,mainFood);

// --------------------Object--------------------
// const {name : resName,categories : tags,openingHours:hours} = restaurant;
// console.log(resName,tags,hours);
// const {sat: {open :openingTime,close : closingTime}} = hours;
// console.log(openingTime,closingTime);
// let y = 111;
// let x = 222;

// const num = {x:10,y:10,z:10}
// ({x,y} = num );

// console.log(x,y);



// --------------------Array----------------------
// const arr = [1,2,3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const [a,b,c] = arr;
// console.log(a,b,c);

// const [first, ,second] = restaurant.categories;
// console.log(a,b);
// [second,first] = [first,second];
// console.log(first,second);
// const temp = b;
// a = b;
// a = temp;
// console.log(a,b);

// const arr = [1,2]
// const [a=2,b=3,c=4] = arr;

// console.log(a,b,c);
// const numArr = [1,2,3]
// const newArr = [...numArr,12]

// console.log(newArr);

// const arr = [1,2,3];
// const newarr = [...arr,4,5]
// console.log(newarr);

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// // Q1
// const [player1,player2] = game.players;
// console.log(player1,player2);

// // Q2
// const [gk,...fieldPlayer] = player1;
// console.log(gk,fieldPlayer);

// // Q3
// const allPlayers = [...player1,...player2]
// console.log(allPlayers);

// // Q4
// const player1Final = [...player1,"T","b","c"];
// console.log(player1Final);

// // Q5
// const {odds: {team1,x:draw,team2}} = game;
// console.log(team1,draw,team2);

// // Q6
// const printGoal = function(...printGoal){
//   console.log(`${printGoal.length} goals were scored.`);
// }
// printGoal(...game.scored);

// // Q7
// const closeWinner = (team1<team2 && `team 1 gonna be win`) || (team2<team1 && `team 2 gonna be win`);
// console.log(closeWinner);

// const [player1,player2] = [game.team1,game.team2];
// // console.log(player1,player2);
// const player1Final = [...game.players[0],"Thiago","Coutinho","Perisic"]
// console.log(player1Final);

// const [t1GoalKeeper,t1FieldPlayer,t2GoalPlayer,t2FieldPlayer] = [game.players[0][0],game.players[0][0] &&= game.players[0],game.players[1][0],game.players[1][0] &&= game.players[1]];
// console.log(t1GoalKeeper,t1FieldPlayer,t2GoalPlayer,t2FieldPlayer);

// const allPlayers = [...game.players[0],...game.players[1]]
// console.log(allPlayers);

// const {team1,x:draw,team2} = game.odds;
// console.log(team1,team2,draw);

// const printGoal = ()=>{
//   // return`Player ${game.scored[0]}`
//   for(let i = 0;i <game.scored.length; i++){
//     console.log(`Player ${game.scored[i]} has scored ${i+1}`);
//   }
// }
// console.log(printGoal());

// const closeWinner = (team1<team2 && `team 1 gonna be win`) || (team2<team1 && `team 2 gonna be win`);
// console.log(closeWinner);

// New feature of array ES6
// const menu = [...restaurant.mainMenu,...restaurant.starterMenu];

// for(const [i,val] of menu.entries()){
//   console.log(`${i+1} : ${val}`);
// }

