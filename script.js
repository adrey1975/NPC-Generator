// Array holding our images.
var myPix = new Array ("images/easy-pete.jpg", "images/patches.jpg");

// Function that will select random images from our array.
function choosePic() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("npcs").src = myPix[randomNum];
}

// Function to change/append h3 text depending on images generated
function addText() {
    if (myPix = new Array[0]) {
        $("#text").append("Easy Pete from Fallout New Vegas");
    } else {
        $("#text").append("Patches");
    }

}