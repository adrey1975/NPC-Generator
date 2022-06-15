// Array holding our images.
var myPix = new Array ("images/easy-pete.jpg", "images/patches.jpg", "images/tingle.jpg",
                    "images/slippytoad.jpg", "images/vivec.jpg", "images/melania.jpg", 
                    "images/cortana.jpg", "images/revolver-ocelot.jpg", "images/quiet.jpg",
                    "images/bloody-baron.jpg", "images/dogmeat.jpg", "images/maria.jpg");
 
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
    } else if (myPix[randomNum] === "images/tingle.jpg"){
        document.getElementById('npc').value='Tingle!';
    } else if (myPix[randomNum] === "images/slippytoad.jpg"){
        document.getElementById('npc').value='Slippy Toad!';
    } else if (myPix[randomNum] === "images/vivec.jpg"){
        document.getElementById('npc').value='Lord Vivec!';
    } else if (myPix[randomNum] === "images/melania.jpg"){
        document.getElementById('npc').value='Malenia Blade of Miquella!';
    } else if (myPix[randomNum] === "images/cortana.jpg"){
        document.getElementById('npc').value='Cortana!';
    } else if (myPix[randomNum] === "images/quiet.jpg"){
        document.getElementById('npc').value='Quiet!';
    } else if (myPix[randomNum] === "images/revolver-ocelot.jpg"){
        document.getElementById('npc').value='Revolver Ocelot!';
    } else if (myPix[randomNum] === "images/bloody-baron.jpg"){
        document.getElementById('npc').value='The Bloody Baron Phillip Strenger!';
    } else if (myPix[randomNum] === "images/dogmeat.jpg"){
        document.getElementById('npc').value='Dogmeat!';
    } else if (myPix[randomNum] === "images/maria.jpg"){
        document.getElementById('npc').value='Maria!';
    } 

}
