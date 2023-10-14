//Question 2. store a person name in variable and print massage to that person your massage should be simple 

let Friend = "ALi";
console.log(`Hello ${Friend} how's your Exam bin?`);

//Question 3. store a person name in a variable, and print that person name in lower case, uper case.

let yourname = "MUHAMMAD AIZAZ NAEEM"// THIS SHULD BE PRINT IN LOWERCASE

console.log(yourname.toLowerCase());

let Friendname = "muhammad ali and aizaz";

console.log(Friendname.toUpperCase());//this will show the upercase

const titlecase = Friendname //this hole is the syntax for titalecase
.split("")
.map((word) => word[0].toUpperCase()+ 
word.slice(1).toLowerCase())
.join("")
 console.log(`Hellow ${titlecase},would you like to join me`);
 
// Question 4 & 5. find a famous quote and then print it with its authername.

let famouse_person = "Imran khan";

let massage :string = " Absolutly not.";

console.log(`'the famous ${famouse_person} said.${massage}'`)

//Question 6. white spaces

const  firstname= "\t \t my \n name \t \n aizaz\n";
console.log(firstname)

//Question 7.write addition,sub ,multi, and division opratiobn that resuls in the number 8 
console.log(5+3);
console.log(100-92);
console.log(2*4);
console.log(8/1);

// Question 8.store your fav number and reveal it in a massage

let my_fav_number = 9;

console.log(`IF you wana know my fav number then its ${my_fav_number}`);

/*Question 9.store the names of a few of your firends in a array called names .print each person name by 
accessing each ekement in the list one at a time*/

const friendsname = ["Ali", "Hadi", "Badar"];

console.log("my first friend is ",friendsname[0]);
console.log("my second friend is ",friendsname[1]);
console.log("my third friend is ",friendsname[2]);

/*Question 10.use resent code and insted of printing each person print a massage to them 
the text should be same but the each text personalize with name */
const friendnames = ["Ali", "Hadi", "Badar"];

console.log("my first friend is ",friendnames[0]);
console.log("my second friend is ",friendnames[1]);
console.log("my third friend is ",friendnames[2]);

//Question  think of your fav transpotation mode such as a motorcycle or car and make a list to print a series of statment 
//for example i would like to have a bike

const cars = ["Rolls", "Toyota supra Mk4", "Maclarurin"]

    console.log(`for comfort i would  buy ${cars[0]}`);
for(let i = 0 ; i < cars.length; i++){      //in this scope we use cars.length the . length gives us the total length of array
    console.log(`i would like to ride.${cars[i]}`);

};

//if you would invite anyone ,living or deceased, to dinner , who would you invite ?
//use  atleat 3 person  

const guestlist = ["Kashif", "Hammad", "Yasir"];

guestlist.forEach((guest) => {
        console.log (`Dear ${guest}. i would like if you join me on dinner.your friend ,Aizaz`)
});
//console.log(`Dear ${guestlist[i]}, i would like if you  join me on dinner .please let me know if you can attend.Aizaz`);
const guestList = ["Kashif", "Hammad", "Yasir"];
const guestToReplace = "Hammad"; // The guest who can't make it
const newGuest = "Sara"; // The new person you're inviting

// Find and replace the guest
const indexToReplace = guestList.indexOf(guestToReplace);
if (indexToReplace !== -1) {
  guestList[indexToReplace] = newGuest;
}

// Print a second set of invitation messages
console.log(`${guestToReplace} can't make it.`);
guestList.forEach((guest) => {
  console.log(`Dear ${guest}, I would like if you join me for dinner. Your friend, Aizaz`);
});
console.log("Sorry, the new dinner table won't arrive in time, and we can only invite two people for dinner.");

// Remove guests until only two names remain
while (guestList.length > 2) {
  const removedGuest = guestList.pop();
  console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print a message to the two people who are still invited
guestList.forEach((guest) => {
  console.log(`Dear ${guest}, you're still invited for dinner. Your friend, Aizaz`);
});

// Remove the last two names, leaving an empty list
guestList.length = 0;

console.log("The guest list is now empty:", guestList);
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical orde*/
const placesToVisit = ["Paris", "uk", "Turky", "Lahore","spain"];

console.log("Original order:");
console.log(placesToVisit.join(', '));

console.log("\nAlphabetical order:");
console.log(placesToVisit.slice().sort().join(', '));

console.log("\nOriginal order (still):");
console.log(placesToVisit.join(', '));

console.log("\nReverse alphabetical order:");
console.log(placesToVisit.slice().sort().reverse().join(', '));

console.log("\nOriginal order (still):");
console.log(placesToVisit.join(', '));

console.log("\nReversed order:");
placesToVisit.reverse();
console.log(placesToVisit.join(', '));

console.log("\nOriginal order (again):");
console.log(placesToVisit.join(', '));
/*Think of something you could store in a array. 
For example, you could make a list of mountains, rivers, countries, cities, languages, 
or anything else you’d like. Write a program that creates a list containing these items. */
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// Array of countries
const countries = ["USA", "Canada", "France", "Japan", "Australia"];

// Object with some information about these countries
const countriesInfo = {
  USA: { capital: "Washington, D.C.", population: 331883986 },
  Canada: { capital: "Ottawa", population: 37742154 },
  France: { capital: "Paris", population: 65273511 },
  Japan: { capital: "Tokyo", population: 125960000 },
  Australia: { capital: "Canberra", population: 25687041 }
};

console.log("Array of Countries:", countries);
console.log("Object with Country Information:", countriesInfo);
/*Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')*/
let number = 42;

// Is the number equal to 42?
console.log("Is number == 42? I predict True.");
console.log(number == 42); // Prediction: True

// Is the number not equal to 42?
console.log("Is number != 42? I predict False.");
console.log(number != 42); // Prediction: False

// Is the number greater than 50?
console.log("Is number > 50? I predict False.");
console.log(number > 50); // Prediction: False

// Is the number less than or equal to 42?
console.log("Is number <= 42? I predict True.");
console.log(number <= 42); // Prediction: True

// Is the number greater than or equal to 42?
console.log("Is number >= 42? I predict True.");
console.log(number >= 42); // Prediction: True
//Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let x = 5;
let y = 10;

// True Tests
console.log("Is x equal to 5? I predict True.");
console.log(x === 5); // True

console.log("Is y equal to 10? I predict True.");
console.log(y === 10); // True

console.log("Is x not equal to 10? I predict True.");
console.log(x !== 10); // True

console.log("Is y greater than x? I predict True.");
console.log(y > x); // True

console.log("Is x less than or equal to 5? I predict True.");
console.log(x <= 5); // True

// False Tests
console.log("Is x equal to 10? I predict False.");
console.log(x === 10); // False

console.log("Is y not equal to 5? I predict False.");
console.log(y !== 5); // False

console.log("Is x greater than y? I predict False.");
console.log(x > y); // False

console.log("Is x less than 3? I predict False.");
console.log(x < 3); // False

console.log("Is y greater than or equal to 15? I predict False.");
console.log(y >= 15); // False

/*More Conditional Tests: You don’t have to limit the number of
 tests you create to 10. If you want to try more comparisons, write more tests. 
 Have at least one True and one False result for each of the following:*/
let string1 = "apple";
let string2 = "banana";
let number1 = 15;
let number2 = 20;
let fruits = ["apple", "banana", "cherry"];

// Tests for equality and inequality with strings
console.log("Is string1 equal to 'apple'? I predict True.");
console.log(string1 === 'apple'); // True

console.log("Is string2 not equal to 'apple'? I predict True.");
console.log(string2 !== 'apple'); 

// Tests using the lowercase function
console.log("Is 'apple' equal to 'APPLE' (case-insensitive)? I predict True.");
console.log(string1.toLowerCase() === 'APPLE'.toLowerCase()); 

// Numerical tests
console.log("Is number1 equal to 15? I predict True.");
console.log(number1 === 15); 

console.log("Is number2 greater than 25? I predict False.");
console.log(number2 > 25);

console.log("Is number1 less than or equal to 10? I predict False.");
console.log(number1 <= 10);

// Tests using "and" and "or" operators
console.log("Is number1 greater than 10 and number2 less than 25? I predict True.");
console.log(number1 > 10 && number2 < 25); 

console.log("Is number1 greater than 20 or number2 less than 10? I predict True.");
console.log(number1 > 20 || number2 < 10); 

// Test whether an item is in an array
console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits.includes('apple'));

// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape')); 
/*Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points. */

let alien_color = 'green'; // You can change the color to 'yellow' or 'red'

if (alien_color === 'green') {
  console.log("Player just earned 5 points for shooting the green alien!");
}
//Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
// Version 2: Fails the if test (no output)
let alien_color_fail = 'red';

if (alien_color_fail === 'green') {
  // No output
}
let alien_color2 = 'Red';

if (alien_color2 === 'Red') {
  console.log("Player just earned 5 points for shooting the green alien!");
} else {
  console.log("Player did not earn any points for shooting this alien.");
}
if (alien_color === 'green') {
    console.log("Player just earned 5 points for shooting the green alien!");
  } else if (alien_color === 'yellow') {
    console.log("Player earned 10 points for shooting the yellow alien!");
  } else if (alien_color === 'red') {
    console.log("Player earned 15 points for shooting the red alien!");
  } else {
    console.log("Player did not earn any points for shooting this alien.");
  }
//Write three versions of this program, making sure each message is printed for the appropriate color alien
let alien_color3 = 'red';

if (alien_color3 === 'green') {
  console.log("Player just earned 5 points for shooting the green alien!");
} else if (alien_color === 'yellow') {
  console.log("Player earned 10 points for shooting the yellow alien!");
} else if (alien_color === 'red') {
  console.log("Player earned 15 points for shooting the red alien!");
} else {
  console.log("Player did not earn any points for shooting this alien.");
}

/*• Write three versions of this program, making sure each message is printed for the appropriate color alien.

Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid. 

. If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.*/


let age = 24; // Change the age to test different scenarios
//m comparing my age
if (age < 2) {
  console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
  console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
  console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
  console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
  console.log("The person is an adult.");
} else if (age >= 65) {
  console.log("The person is an elder.");
} else {
  console.log("The person's stage of life is not determined by the provided age.");
}
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array
. If the fruit is in your array, the if block should print a statement, such as You really like bananas! */


let favoriteFruits: string[] = ["apples", "bananas", "strawberries"];

if (favoriteFruits.includes("bananas")) {
  console.log("You really like bananas!");
}

if (favoriteFruits.includes("apples")) {
  console.log("You really like apples!");
}

if (favoriteFruits.includes("strawberries")) {
  console.log("You really like strawberries!");
}

if (favoriteFruits.includes("oranges")) {
  console.log("You also like oranges!");
} else {
  console.log("Oranges are not one of your favorite fruits.");
}

if (favoriteFruits.includes("kiwis")) {
  console.log("You also like kiwis!");
} else {
  console.log("Kiwis are not one of your favorite fruits.");

}

/*Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */


let usernames: string[] = ["admin", "Eric", "John", "Alice", "Bob"];

if (usernames.length > 0) {
  usernames.forEach((username) => {
    if (username === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, i thank you for logging in again.`);
    }
  });
} else {
  console.log("We need to find some users!");
  // Empty the array to test the states
  usernames = []; //this line is used to empty the array
}
/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza! */
const pizzaKiArray = ["Pepperoni", "Margherita", "Supreme"];

for (let i = 0; i < pizzaKiArray.length; i++) {
    console.log(`I like ${pizzaKiArray[i]} pizza.`);
}

console.log("I really love pizza!");
/*Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list
 and then use a for loop to print out the name of each animal. 
 • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the
 end of your program stating what these animals have in common. 
 You could print a sentence such as Any of these animals would make a great pet!*/

 const animals: string[] = ["Dog", "Cat", "Rabbit"];

console.log("Names of animals:");
for (let i: number = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

console.log("\nStatements about these animals:");
for (let i: number = 0; i < animals.length; i++) {
    if (animals[i] === "Dog") {
        console.log(`${animals[i]} would be a great pet.`);
    } else if (animals[i] === "Cat") {
        console.log(`${animals[i]} is an independent and popular pet.`);
    } else if (animals[i] === "Rabbit") {
        console.log(`${animals[i]} is a gentle and quiet pet.`);
    }
}

console.log("\nAny of these animals would be a great pet!");

