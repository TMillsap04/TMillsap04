/*Tatiana Millsap
06/23/2021
HTML Forms*/

//Main Problem: How many pizzas to order for a party
//Each one will have it's own form
//How many people?
//How many slices per person?
//How many slices per pizza?

//Get button working
document.querySelector("#calcPizza").addEventListener("click",function(e)
{
    //test button
    //alert("click");

    //validation= make sure there is a valid number in the field.
    //to add another test use a logial operator && ||
    if(document.querySelector("#numOfPeople").reportValidity()&&
        document.querySelector("#slicesPerperson").reportValidity()&&
        document.querySelector("#slicesPerpizza").reportValidity()
    
    )
    {
        //alert("testing validity");
        //We have valid number inside of this code block!!
        //Get the values of each of the inputs 
        let numPeople = parseInt(document.querySelector("#numOfPeople").value);
        let numslicesPerperson = parseInt(document.querySelector("#slicesPerperson").value);
        let numslicesPerpizza= parseInt(document.querySelector("#slicesPerpizza").value);

        //Do the math stuff (You got this!)
        
        //How many total slices do we need?
        let totalSlicesneeded = numPeople * numslicesPerperson;
        //alert(`Total number of slices needed ${totalSlicesneeded}`);
        //How many pizzas to order?
        //slices needed/ # of slices per pizza
        let numPizza = totalSlicesneeded/numslicesPerpizza;
        //alert(`Pizzas needed ${Math.ceil(numPizza)}`);
        //alert(Math.ceil(2.345));

        //Final Output

        //If i wanted to output to an input field
        document.querySelector("#finalanswer").value = Math.ceil(numPizza);
        //Or put the results in an tag and target
        document.querySelector("#textresults").innerHTML = "You need to buy "+Math.ceil(numPizza)+" pizzas to feed everyone!";
    }
});