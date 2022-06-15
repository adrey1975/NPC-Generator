// Array holding our images.
var myPix = new Array ("images/easy-pete.jpg", "images/patches.jpg");
 
// Function that will select random images from our array.
function choosePic() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("npcs").src = myPix[randomNum];
    
    // This checks which npc was generated in order to output
    // correct text.
    if(myPix[randomNum] === "images/easy-pete.jpg") {
        document.getElementById('npc').value='Easy Pete!';
    } else if (myPix[randomNum] === "images/patches.jpg"){
        document.getElementById('npc').value='Patches!';
    }

}
