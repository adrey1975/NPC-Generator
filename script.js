var myPix = new Array ("images/easy-pete.jpg", "images/patches.jpg");

function choosePic() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("npcs").src = myPix[randomNum];
}