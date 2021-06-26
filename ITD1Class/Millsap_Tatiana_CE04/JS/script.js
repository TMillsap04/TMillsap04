/*Tatiana Millsap
June 10, 2021
Conditionals Exercise*/

//Prompt user for the number grade, assume the grade is whold number.
//Determine letter grade for number using conditional statements. 
/* Grading Scale:
    A is 90-100
    B is 80-89
    C is 70-79
    D is 60-69
    F is 0-59
    Error if anything over 100 or less than 0
*/


//alert the user to the problem and tell them the goal
alert=("I will help you calculate your letter grade.");

let numgrade =parseInt(prompt("What is your current grade? Use whole number please."));

//Conditionals
if(numgrade <= 100 && numgrade >= 90)
{
    console.log("You have a(n) " +numgrade+ " % , which means you have earned an A in the class!");
}
else if(numgrade <= 89 && numgrade >= 80)
{ 
    console.log("You have a(n) " +numgrade+ " %, which means you have earned a(n) B in the class!");
}
else if (numgrade <= 79 && numgrade >= 70)
{
    console.log("You have a(n) " +numgrade+  "%, which means you have earned a(n) C in the class!");
}
else if(numgrade <= 69 && numgrade >= 60)
{
    console.log("You have a(n)" +numgrade+ " %, which means you have earned a(n) D in the class!");
}
else if(numgrade <= 59 && numgrade >= 0)
{
    console.log("You have a(n) " +numgrade+ " %, which means you have earned a(n) F in the class!");
}
else 
{
    console.log("Error! Input your grade numbers again");  
}

/*Problem #2 Pumkin Patch Pickers
    Determine the cost of a pumpkin by weight using chart

    0-5.5lbs is $1.00/lbs
    0-10.75lbs is .90/lbs
    0-25lbs is 0.80/lbs
    0-50lbs is 0.70/lbs
    0-100lbs is 0.60/lbs
    101+lbs is 0.50/lbs
*/

alert=("Let's go pick some pumpkins!.");

//prompt the user for weight of the pumpkin, assume weight contains decimal

let pumSize =parseFloat(prompt("Let's go pick some pumpkins! How many lbs do you want it to be? Decimals are allowed."));

//Do math for cost inside the conditional code block
 

//Conditional statemnts//
//Create condtional to test weight of pumpkin, include error output
if (pumSize <= 5.5 && pumSize >= 0)
{
    console.log("Your pumpkin of " +pumSize+ " lbs costs $ " +pumSize * 1.00);
}
else if(pumSize <= 10.75 && pumSize >= 5.6 )
{
    console.log("Your pumpkin of " +pumSize+ " lbs costs $ " +pumSize * 0.90);
}    
else if(pumSize <= 25 && pumSize >= 10.8 )
{
    console.log("Your pumpkin of " +pumSize+ " lbs costs $ " +pumSize * 0.80);
}    
else if(pumSize <= 50 && pumSize >= 5.5 )
{
    console.log("Your pumpkin of " +pumSize+ " lbs costs $ " +pumSize * 0.70);
}    
else if(pumSize <= 100 && pumSize >= 5.5 )
{
    console.log("Your pumpkin of " +pumSize+ " lbs costs $ " +pumSize * 0.60);
}    
else if(pumSize <= 101)
{
    console.log("Your pumpkin of " +pumSize+ " lbs costs $ " +pumSize * 0.50);
} 
else
{
    console.log("Error please input the weight again!");
}   

//Do math for cost inside the conditional code block



//Output "Your pumpkin of Xlbs cost $Y."

/* Problem #3 - Loyalty Card*/

alert=("Let's go shopping! I hope you have your loyalty card!");

//Prompt user for cost of 2 items, parse correct data type.

let product1 =parseFloat(prompt("What does the first item cost?"));
let product2 =parseFloat(prompt("What about the second item, how much does it cost?"));

//Ask if user is preferred customer only "y" or "n" valid,

let loyalty=prompt("Are you a Loyalty Member? Enter Yes/No");

//Create conditional block that tells error if input is different.

if (loyalty == 'yes')
{
    console.log("Feel free to use your 15% discount!");
}
else if (loyalty == 'no')
{
    console.log("Sorry no discount for you today!");
}
else 
{
    console.log("You have typed in something wrong and I can not calculate the total.");
}


//Member = yes 15% discount
//Member = no 0% discount
let bothProds=(product1+product2)
//Create condiional based on answer if they are preferred and do math inside block.
//Cost of First Item ($) & Cost of Second Item ($)
if (loyalty == 'yes')
{
    console.log("Your total purchase today is $ " +(bothProds-(bothProds * 0.15)) +  " which includes your 15% discount.");
}
else if (loyalty == 'no')
{
    console.log("Your total purchase is $ " +bothProds+".");
}
else 
{
    console.log("You have typed in something wrong and I can not calculate the total.");
}


/*Result to print out:
    Non-member  "Your total purchase is $X."
    Member "Your total purchase is $X, which includes your 15% discount."*/