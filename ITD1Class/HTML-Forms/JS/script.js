/*Tatiana M.
006/21/21
HTML-Forms*/

//target the button
document.querySelector("#button1").addEventListener("click",function(e)
{
    //Get user name from form tell user hello!
    let userName = document.querySelector("#userName").value;
    alert(`Welcome to the page ${userName}!`);
});