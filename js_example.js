//This is a JavaScript comment
 //Always add semicolons at the end of each line!
var name= "Mya"; //This creates a variable named "name" with a value set to "Mya"
document.write(`<h1> Hello ${name} </h1>`); //This writes an element into your website using html that greets you by name

//This is a function.  Call to it in your HTML
function changeColor(newColor){
    var bttn = document.getElementById("myPar"); //This function assigns myPar to the bttn variable...
    bttn.style.color = newColor;                //...and then changes the color of text in myPar once the button is clicked
}
