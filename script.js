// Array holding our images.
var myPix = new Array ("images/easy-pete.jpg", "images/patches.jpg");
 
// Function that will select random images from our array.
function choosePic() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("npcs").src = myPix[randomNum];
    
    if(myPix[randomNum] === "images/easy-pete.jpg") {
        alert("Easy Pete!")
    } else {
        alert("Patches!")
    }

}
