//alert("File is connected");

/*Tatiana Millsap
Today's Date
Math Operators */

//Create a number variable
let num1 =5+2;
console.log("num1 is "+num1);

let num2 =10-6;
console.log("num2 is "+num2);

//Create a total variable using the exisiting variable
//Goes right to left!!
let total = num1+num2;
console.log("The total is "+total);

let num3= 3*4;
let num4= 10/2;
console.log("num3 is"+num3+" and the value of num4 is "+num4);

//Add 5 to the num1 variable
// thisVariablewillchange =variable + num;

num1 =num1+ 5;
console.log("num1 is now "+num1);

total = total/num2;
console.log("total is now "+total);


//Assignment operators
/*
+=
-=
*=
/=
++
--
*/

let num5 =10;
num5 +=3;
//Same as sayinh
//num5 = num5 +3;
console.log("num5 is now"+num5);

num5 -=6;
console.log("num5 is now"+num5);
num5 *=2;
console.log("num5 is now"+num5);
num5 /=7;
console.log("num5 is now"+num5);

//++ adda 1 to the variable
num5++;
console.log("num5 is now"+num5);
/* 
These are all the same they all add 1 to the variable
num5++;
num5 +=1;
num5 =num5 +1;
*/

// --subtracts 1 from the variable
num5--;
console.log("num5 is going to end up being"+num5);
num5--;
num5--;
num5--;
console.log("num5 is going to end up being"+num5);


//Find the average of 3 quizzes
let quiz1 =100;
let quiz2 =90;
let quiz3 =95;

let average = (quiz1+quiz2+quiz3)/3;
console.log("The average of the 3 quizzes is "+average);

//Find the perimete of a rectangle
//2 *length + 2 *width

let length = 7
let width = 6

let peri = 2*length + 2*width;

console.log("The perimeter is "+peri);

