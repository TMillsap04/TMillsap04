/*
Tatiana Millsap
06/26/2021
BMI Calculator
*/
//alert("connected!")

/*
Calculation = [weight (lb) / height (in) / height (in)] x 703
round to one decimal place .tofixed(1)

Range:
BMI Range= X	            Weight Range= Y
BMI is less than 18.5	Under Weight Range
BMI is 18.5 to 24.9	    Normal or Healthy Weight Range
BMI is 25.0 to 29.9	    Over Weight Range
BMI is 30.0 to 35 	    Obese Range
BMI is 35 or over	    Extreme Obese Range

Result To Print Out In H1 Tag:

"Your BMI is X, indicating your weight is in Y for adults of your height."
Where X is the calculated BMI.
Where Y is the Weight Range from the table above.

Show the correct image based on the user's Weight Range.*/

//target and test button
document.querySelector("#bmiCalc").addEventListener("click",function(e)
{
    //alert("clicked");
    //validate
    if(document.querySelector("#heightFeet").reportValidity()&&
       document.querySelector("#heightInches").reportValidity()&&
       document.querySelector("#weight").reportValidity()
       )
        {
            let feetHt = parseInt(document.querySelector("#heightFeet").value);
            let inchHt = parseInt(document.querySelector("#heightInches").value);
            let lbsWt = parseInt(document.querySelector("#weight").value);
            let height = parseInt((feetHt*12)+inchHt);
            

            let calcBMI = parseInt(703*(lbsWt/(height*height))).toFixed(1);
            

            if(calcBMI <18.5)
            {
                document.querySelector("#finalResults").innerHTML = `Your BMI is ${calcBMI}, indicating your weight is in the under weight range for adults of your height.`
                document.querySelector("#weightImg").src = "IMG/underWeight.jpg";
            }
            if(calcBMI >= 18.5 && calcBMI <= 24.9)
            {
                document.querySelector("#finalResults").innerHTML =`Your BMI is ${calcBMI}, indicating your weight is in the Normal or Healthy range for adults of your height.`
                document.querySelector("#weightImg").src = "IMG/healthyWeight.jpg";
            }
            if(calcBMI <= 25.0 && calcBMI >= 29.9)
            {
                document.querySelector("#finalResults").innerHTML =`Your BMI is ${calcBMI}, indicating your weight is in overweight range for adults of your height.`
                document.querySelector("#weightImg").src = "IMG/overWeight.jpg";
            }
            if(calcBMI >= 30.0 && calcBMI <= 35)
            {
                document.querySelector("#finalResults").innerHTML = `Your BMI is ${calcBMI}, indicating your weight is in the obese range for adults of your height.`
                document.querySelector("#weightImg").src = "IMG/obeseWeight.jpg";
            }
            if(calcBMI >35)
            {
                document.querySelector("#finalResults").innerHTML = `Your BMI is ${calcBMI}, indicating your weight is in the extreme obese for adults of your height.`
                document.querySelector("#weightImg").src= "IMG/extremeObeseWeight.jpg";
            }
        }
});
