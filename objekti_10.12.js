// 1.	Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:
var products = [{
    product: "Milk",
    quantity: 1,
    price: 1.50
},{ 
    product: "Chocholate",
    quantity: 2,
    price: 1.20
},{ 
    product: "Oranges",
    quantity: 1,
    price: 2
}];

let prices = products.reduce((acumulator, item) => {
return acumulator + item.price;
},0);

console.log("1.ZAD:" + prices);


// 2.	You go to a jewelry shop and try to find the most expensive piece of jewelry. You write down the name of each piece of jewelry and its price. 
// Create a function that gets the name of the piece of jewelry with the highest price and returns "The most expensive one is the {name of jewelry piece}".
// Example:
// mostExpensive([{name:’DiamondEarings’, price: 980}, {name:’Gold watch’, price:250}, …])
// 	- The most expensive one is the diamond Ring.
var jewelrys = [{name:'DiamondEarings', price: 980}, {name:'Gold watch', price:250}, {name:'Diamond Ring', price:1200}]

const   maxPrice = Math.max(...jewelrys.map(item => item.price));
const mostExpensive = jewelrys.find(item => item.price === maxPrice);

console.log("2.ZAD: The most expensive one is the " + mostExpensive.name);


// 3.	Given a word, create an object that stores the indexes of each letter in an array. Make sure the letters are the keys. Make sure the letters are symbols. Make sure the indexes are stored in an array and those arrays are values.
// Examples:
// mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }
// mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
// mapLetters("grapes") ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }
function Person(word) {
    const indexObject = {};
    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        if (!indexObject[letter]) {
            indexObject[letter] = [];
        }
    indexObject[letter].push(i);      
    }
    return indexObject;
}

let person = new Person("dodo");

console.log('3.ZAD:', person);

// 4.	And who cursed the most in the fight between you and your spouse? Given an object with three rounds, with nested objects as your scores per round, return a string of who cursed the most: If you, return "ME!" If your spouse, return "SPOUSE!" If a draw, return "DRAW!"
// Examples:
// determineWhoCursedTheMost([{me: 10,    spouse: 5  },  {    me: 5,    spouse: 10  },   
// {    me: 0, spouse: 10,  }]) ➞ "DRAW!"
// determineWhoCursedTheMost([{me: 40,spouse: 5}, {me: 9, spouse: 10}, { me: 9,  spouse: 10}]) ➞ "ME!"
// determineWhoCursedTheMost([{ me: 10,spouse: 5 }, { me: 9,  spouse: 44 }, { me: 10,    spouse: 55}]) ➞ "SPOUSE!"
const score =([{ me: 10,spouse: 5 }, { me: 100,  spouse: 44 }, { me: 10,    spouse: 55}]);

let meSum = score.reduce((acumulator, item) => {
    return acumulator + item.me;
    },0);
let spouseSum = score.reduce((acumulator, item) => {
    return acumulator + item.spouse;
    },0);

if(meSum > spouseSum){
    console.log('4.ZAD: ME!');
}else{
    console.log('4.ZAD: SPOUSE!');
}


// 5.	Create a function that converts color in RGB format to Hex format.
// Examples:
// rgbToHex({red: 0, green: 128,  blue: 192}) ➞ "#0080c0"
function convertsRGBtoHex (params) {
   var hex = '#';
   var hexRed = Math.round(params.red).toString(16);
   var hexGreen = Math.round(params.green).toString(16);
   var hexBlue = Math.round(params.blue).toString(16);

return hex + hexRed + hexGreen + hexBlue;
}
console.log('5.ZAD:' + convertsRGBtoHex ({red: 0, green: 128.9,  blue: 192}));

// 6.	Create a function that takes an amount of monetary change (e.g. 47 cents) and breaks down the most efficient way that change can be made using USD quarters, dimes, nickels and pennies. Your function should return an object.
// Coin	Value
// Penny	0.01
// Nickel	0.05
// Dime	0.10
// Quarter	0.25

// Examples:
// makeChange(47) ➞ { "q": 1, "d": 2, "n": 0, "p": 2 }

// makeChange(24) ➞ { "q": 0, "d": 2, "n": 0, "p": 4 }

// makeChange(92) ➞ { "q": 3, "d": 1, "n": 1, "p": 2 }
function MakeChange(coin) {
    this.q = parseInt(coin / 25);
    this.d = parseInt((coin % 25) / 10);
    this.n = parseInt(((coin % 25) % 10) / 5);
    this.p = parseInt(((coin % 25) % 10) % 5);
}

let monetaryChange = new MakeChange(92);

console.log('6.ZAD:', monetaryChange);


// 7.	Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4]} and returns an array of objects like { name: "John", avgNote: 4 }. If student has no notes (an empty array) then let's assume avgNote: 0.
// Examples:
// [
//   { name: "John", notes: [3, 5, 4]}
// ] 
// ➞ 
// [
//   { name: "John", avgNote: 4 }
// ]
function StudentAvgNote(params) {
    this.name = params.name;
        var sum = 0;
        var avg = 0;
        for (let i = 0; i < params.notes.length; i++) {
            sum += params.notes[i];
        }
        if(params.notes.length > 0){
            avg = sum/params.notes.length;
        }
    this.avgNote = avg;
}
let studentAvgNote = new StudentAvgNote({ name: "John", notes: [3, 5, 4]});

console.log('7.ZAD:', studentAvgNote);


// 8.	Given an object with students and the grades that they made on the tests that they took, determine which student has the best Test Average. The key will be the student's name and the value will be an array of their grades. You will only have to return the student's name. You do not need to return their Test Average.

// getBestStudent([{  name: ‘John’, grades: [100, 90, 80]}, {name: ‘Bob’, grades: [100, 70, 80]}…]) ➞ "John" // John's avg = 90 // Bob's avg = 83.33
var students = 
[{name: 'John', grades: [100, 90, 80]}, 
{name: 'Bob', grades: [100, 70, 80]},
{name: 'Fred', grades: [100, 100, 80]}]

function getBestStudent() {
    let highestAverage = 0;
    let bestStudent = "";
    
    for (const student of students) {
      const grades = student.grades;
      const average = grades.reduce((a, b) => a + b) / grades.length;
      if (average > highestAverage) {
        highestAverage = average;
        bestStudent = student.name;
      }
    }
return bestStudent;
}
console.log('8.ZAD:'+getBestStudent());