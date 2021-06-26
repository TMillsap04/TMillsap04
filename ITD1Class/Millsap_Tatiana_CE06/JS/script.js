//Tatiana Millsap
//06/23/2021
//CE06 Fill'er Up Exercise

//alert("File connected1");


//target gallon input multiply by radio input and display corresponding field.
document.querySelector("#convertGal").addEventListener("click",function(e)
{ console.log("random");
    if(document.querySelector("#numOgallons").reportValidity());

    if(document.querySelector("#quarts").checked)
        {
            let quartsAmt = parseFloat(document.querySelector("#numOgallons").value);
            quartsAmt *=4;
            let totalQuarts = document.querySelector("#quartsAmt")
            totalQuarts.value = quartsAmt
        }
    else if(document.querySelector("#pints").checked)
        {
            let pintsAmt = parseFloat(document.querySelector("#numOgallons").value);
            pintsAmt *=8; 
            let totalPints = document.querySelector("#pintsAmt")
            totalPints.value = pintsAmt
        }
    else if(document.querySelector("#cups").checked)
        {
            let cupsAmt = parseFloat(document.querySelector("#numOgallons").value);
            cupsAmt *=16;
            let totalCups = document.querySelector("#cupsAmt")
            totalCups.value = cupsAmt 
        } 
});

/* 
-Input for # of DVD positive whole numbers only
-Input for # of Blu-Rays pos whole numbers
-Input for # of UV pos whole nums only

Button that starts process

Empty H1 tag that hold final results Total # of movies owned
     (document.querySelector("#finalResults").innerHTML = `Ranking system answer ${totalDVDs}.`)

Image that changes based on # of movies the user owns (set image size)
    (document.querySelector("#bronzeStar").src = "IMG/bronzeStar.jpg or /silverStar.jpg or /goldStar.jpg")

Validation for number inputs and cannot be left blank only accept pos values.

Ranking system:
->50 movies "Your collection contains only X movies which makes you a bronze star member." X= total # of all movies
-50-100 movies "Your collection contains only X movies, which makes you a silver star member." X= total # of all movies
-100+ movies "Wow! your collection contains X movies, which makes you a gold star member." X= total # of all movies.*/

//Target the Button

document.querySelector("#seeRanking").addEventListener("click",function(e)
{
    if(document.querySelector("#numOfdvds").reportValidity()&&
        document.querySelector("#numOfblurays").reportValidity()&&
        document.querySelector("#numOfuvs").reportValidity()
       )
       
        { //target value set as  variable  
         let numDvds = parseInt(document.querySelector("#numOfdvds").value);
         let numBlurays = parseInt(document.querySelector("#numOfblurays").value);
         let numUvs = parseInt(document.querySelector("#numOfuvs").value);

         let totalMovies = numDvds + numBlurays + numUvs;

         if(totalMovies < 50)
            {
            document.querySelector("#finalResults").innerHTML = `Your collection contains only ${totalMovies} movies which makes you a bronze star member!` 
            document.querySelector("#bronzeStar").src = "IMG/bronzeStar.jpg";
            }
         else if(totalMovies>=50 && totalMovies<=100)
            {
            document.querySelector("#finalResults").innerHTML = `Your collection contains only ${totalMovies} movies which makes you a silver star member!`
            document.querySelector("#bronzeStar").src = "IMG/silverStar.jpg";
            }
        else if (totalMovies>100)
        {
            document.querySelector("#finalResults").innerHTML = `Wow! Your collection contains ${totalMovies} movies which makes you a gold star member!`
            document.querySelector("#bronzeStar").src = "IMG/goldStar.jpg";
        }
        }
});