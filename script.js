'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order : function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
  }
};
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