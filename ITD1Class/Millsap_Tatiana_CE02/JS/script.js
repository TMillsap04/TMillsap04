/*Tatiana Millsap
June 2, 2021
Story Time exercise*/

//This is hard coding
//Always the same value
//let num1 =7;

//Let's tell a story
alert("Let's tell a story!");

//Prompt will return the value when the user presses the ok button on the pop up box
//If user presses Cancel - returns a null!

//Ask for a color
let color = prompt("What is your favorite color?");

//Ask for a name
let title = prompt("Give me a name, any name!");

//Ask for a number
let number = prompt("What's your lucky number?");

//Ask for favorite movie
let movie = prompt("What movie can you watch on repeat?");

//Ask for a type if animal
let animal = prompt("What's your spirit animal?");

//Ask for an adjective
let adj = prompt("How would you describe yourself?");

//Prompt user to check the console
alert("Look at the console to see your story!");

//Use concatenation in multiple console statements to write the story
console.log("Hello" + title + ", it is I your "+adj+" spirit guide!"); 

console.log("I know I am just a "+animal+" and I am "+color+" in color");

console.log("But I have been supporting you for "+number+" years, and I always will! That was all you can go back to watching "+movie+" now");