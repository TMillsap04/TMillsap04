/*Tatiana Millsap
06/17/21
CE05 Query Selector
*/

/*

//Details for exercise
//Use alerts to explain each problem to the user.
alert("Today we are going to be using our Discount Double check and seeing if we have enough gas to make it to our destinaton!");

//User proper data type for money = parseFloat()
//Round to 2 decimal places = .toFixed(2) ex

/* Problem 1: prompt user for the price of 2 items bought at a store and give 
them a discount based on their total.*/
alert("Let's do some shopping!");

let itemFirst = parseFloat(prompt("How much did you pay for your first item?","ex. 7.99"));
let itemSecond = parseFloat(prompt("How much did you pay for your second item?","ex. 7.99"));
let totalCost = itemFirst+=itemSecond;
let discountOne = parseFloat(totalCost-=(totalCost*=0.10));
let discountTwo = parseFloat(totalCost-=(totalCost*=0.05));
//Create h1 header for section can use <br> to help overall look.
/*Guidelines:
    Spend $100+ get 10% discount on total purchase.
    Spend $50-$100 get 5% discount on total purchase.
    Spend >$50 get 0% discount.
    -Final results must be in an HTML element.
If user DOES get discount background of results = GREEN
If user DOES NOT get discount background of results = Yellow
*/
document.querySelector("#itemFirst").innerHTML=`The cost of your first item is $ ${itemFirst.toFixed(2)}.`;
document.querySelector("#itemSecond").innerHTML=`The cost of your second item is $ ${itemSecond.toFixed(2)}.`;

if (totalCost >= 101)
{
    document.querySelector("#totalCost").innerHTML = `Your total purchase is $ ${discountOne.toFixed(2)}, which includes your 10% discount.`;
        if (totalCost >= 101)
        {document.querySelector("#totalCost").style.backgroundColor="Green"}
}
else if (totalCost >=50 && totalCost<=100)
{
    document.querySelector("#totalCost").innerHTML = `Your total purchase is $ ${discountTwo.toFixed(2)}, which includes your 5% discount.`;
        if(totalCost >=50 && totalCost<=100)
        {document.querySelector("#totalCost").style.backgroundColor="Green"}
}
else if (totalCost <50)
{
    document.querySelector("#totalCost").innerHTML = `Your total purchase is $ ${totalCost.toFixed(2)}.`;

        if(totalCost <50)
            {
            document.querySelector("#totalCost").style.backgroundColor="yellow";
            }
}
else
{
   alert("Please enter your details again");
}
//Print out
//No discount = "Your total purchase is $X." X= total of 2 items, round the cost to 2 decimal places!
//Discount = "Your total purchase is $X, which includes your Y% discount". X= total of 2 items round to 2 decimal place and Y= discount they receive.


alert("Now let's figure out the Gas situation.");
/*Problem 2: Determine if drive can make it across the desert w/current fuel or should they stop.*/

//Create h1 header <br> can be used.
//Prompt user for # of gallon car can hold, the % of gas they have left and mpg their car can get.
let amountGas = parseFloat(prompt("How much gas can your car hold?"));
let amountLeft = parseFloat(prompt("How much gas do you have left?","ex 50%"));
let amountMpg = parseFloat(prompt("How many mpg can your car get?"));


//Calculate # of miles car can go w/current amount of gas in tank.
/* Guidelines:
    200+ miles do not have to stop
    >200 miles stop and get gas.
    */

let currentMiles = parseFloat((amountGas*amountLeft)*amountMpg);
//Final results not shown immeadiately in HTML> create 2 buttons users should be ale to click either button or show both versions

document.querySelector("#buttonWritten").addEventListener("click",function(e)
{ if (currentMiles == 201)
    {
        document.querySelector("#buttonWritten").innerHTML=`Yes you can drive ${currentMiles}, miles and you can make it without stopping for gas.`;
    }
    else if(currentMiles <200)
    {
        document.querySelector("#buttonWritten").innerHTML=`You can only drive ${currentMiles}, miles more, better get gas now while you can!`;
    }
});

document.querySelector("#buttonGraphic").addEventListener("click",function(e)
{if(currentMiles == 201)
    {
        document.querySelector("#enoughGas").src="IMG/enoughGas.jpg";
    }
    else if(currentMiles<=200)
    {
        document.querySelector("#enoughGas").src="IMG/notEnoughGas.jpg";
    }
});
/*
-Show text answer: when clicked fill in text of HTML document and set visability to show on HTML.
-Show graphic answer: When clicked this will change image source to file and set its visibilty to show on the HTML.*/


/*Print out:
//Enough gas= "Yes, you can drive X miles and you can make it without stopping for gas." X=Number of miles car can go on the current amount of gas.
//Not enough gas= "You can only drive X miles more, better get gas now whle you can". X= number of miles the car can go on the current amount of gas.*/ 

/* Results for Graphic Answer:
  Enough gas: Set image to the "Enough Gas" picture and make it visible on page 
  Not Enough gas: Set image source to "Not Enough Gas" picture and make it visible on page.*/