/*
    Tatiana Millsap
    June 8, 2021
    CE 03 - Let's Go Shopping
*/

//Alert command to inform what is going on
alert("Let's go buy some snacks!");


//Prompt user for the name of the first item
let snack1 = prompt("What is first on the list?");


//Prompt for the cost of the item, include the name of the item in the prompt
//Parse numbers correctly before storing in variable
let cost1 = Number(prompt(snack1+  " is a good choice how much does it cost?"));

//Ask the user for the number of items they want to purchase
let amount1 = Number(prompt("How many of these are you getting?"));

//Repeat process for second item ask for name, cost and quantity
let snack2 = prompt("Great! What's next?");
let cost2 = Number(prompt(snack2+ " another great choice! How much is it?"));
let amount2 = Number(prompt("How many of these are you getting?"));



//Prompt for sales tax. Should be a whole number
//example user types in 5 for 5% sales tax
let taxes1 = Number(prompt("How much is the tax in your area? Please use whole numbers."));



/*Time to do the math with NEW variables: 
    Total cost of each item (will depend on cost and quantity)
    Subtotal of all items purchased before tax
    Cost of the tax for all items purchased.
    Grand total of all items with tax added in.
*/
let totalCost1 = Number(cost1) * Number(amount1);
console.log("The total cost of " +snack1+ " is "  +totalCost1);

let totalCost2 = Number(cost2) * Number(amount2);
console.log("The total cost of " +snack2+ " is " +totalCost2);

let subTotal = Number(totalCost1) + Number(totalCost2);
console.log("The subtotal before tax is " +subTotal);

let costTax1 = Number(cost1) * Number(taxes1 / 100);
let costTax2 = Number(cost2) * Number(taxes1 / 100);
let totalTax = Number(costTax1) + Number(costTax2);
console.log("The added taxes is " +totalTax);

let grandTotal = Number(subTotal) + Number(totalTax);
console.log("Your grand total today is " +grandTotal);



//Console output
/* User inputs (7)
    Name of 2 items
    Cost of 2 items
    Quantity of 2 items
    Sales tax %
    
    Result to print out
    Name,cost quantity and total cost of each item
    subtotal of all itmes brough before tax
    Cost of the sales tax
    Grand total for all items bought and tax.
    */
   console.log("-------------------------------------------");
   console.log("Great, here is your receipt!");
   console.log("The items you purchased today are "  +snack1+ " for the price of $" +cost1+ " you purchased " +amount1+ " which had a subtotal of $" +subTotal);
   console.log("You also purchased " +snack2+ " for the price of $" +cost2+ " you purchased "  +amount2+ " which had a subtotal of $"  +subTotal);
   console.log("The amount of taxes paid today is $"  +totalTax);
   console.log("The Grand total for all the items plus tax  is $ "  +grandTotal);
  
