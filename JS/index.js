const mainCharacter = document.getElementById("mainCharacter");
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");
const gameWindow = document.getElementById("clickMap");

const audioTrack = new Audio('./AUDIO/radio.mp3');
const eatTrack = new Audio('./AUDIO/eat.mp3');

const offsetCharacter = 16;


var inventory = {
    apple: 0,
    strawberry: 0,
    bowl: 0,
    fruitbowl: 0,
}



gameWindow.onclick = function(e){
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left - offsetCharacter;
    var y = e.clientY - rect.top - offsetCharacter;
    mainCharacter.style.left = `${x}px`;
    mainCharacter.style.top = `${y}px`;
    audioTrack.pause();
    audioTrack.currentTime = 0
    switch (e.target.id) {
        case "tv":
            showSpeech("This is a beautiful TV!");
            break;

        case "radio":
            showSpeech("Lets dance on the radio music!");
            audioTrack.play();
            break;

        case "up-stairs":
            showSpeech("Lets go upstairs!");
            mainCharacter.style.left = "650px";
            mainCharacter.style.top = "390px";
            setTimeout(function() {
                mainCharacter.style.top = "175px";
                var img =  document.getElementById("tileMap")
                setTimeout(function() {
                    img.innerHTML = `<img class="notDragable" ïd="tileMapImg" src="./IMG/pointandclick-tilemap-upstairs.png" alt="tileMap1">`
                    document.getElementById("clickMap-3").style.display = "none";
                    
                    document.getElementById("downstairs").style.display = "none";
                    document.getElementById("upstairs").style.display = "block";

                    document.getElementById("items-downstairs").style.display = "none";
                    document.getElementById("items-upstairs").style.display = "block";
                },500);
            },1500);
              break;

        case "down-stairs":
            showSpeech("Lets go downstairs!");
            mainCharacter.style.left = "650px";
            mainCharacter.style.top = "175px";
            setTimeout(function() {
                mainCharacter.style.top = "390px";
                var img =  document.getElementById("tileMap")
                setTimeout(function() {
                    img.innerHTML = `<img class="notDragable" ïd="tileMapImg" src="./IMG/pointandclick-tilemap.png" alt="tileMap1">`
                    document.getElementById("clickMap-3").style.display = "block";
                    
                    document.getElementById("downstairs").style.display = "block";
                    document.getElementById("upstairs").style.display = "none";

                    document.getElementById("items-downstairs").style.display = "block";
                    document.getElementById("items-upstairs").style.display = "none";
                },500);
            },1500);
              break;


        case "item-appleClick":
            showSpeech("OMG AN APPLE!");
            mainCharacter.style.left = "150px";
            mainCharacter.style.top = "190px";
            break;

        case "item-appleClick2":
            showSpeech("OMG AN APPLE!");
            mainCharacter.style.left = "435px";
            mainCharacter.style.top = "220px";
            break;

         case "item-strawberryClick":
            showSpeech("HMMM A STRAWBERRY!");
            mainCharacter.style.left = "76px";
            mainCharacter.style.top = "142px";
            break;

        case "item-bowlClick":
            showSpeech("Ow nice a bowl.");
            mainCharacter.style.left = "201px";
            mainCharacter.style.top = "144px";
            break;
        case "item-fruitbowlClick":
            showSpeech("OMG WE MADE IT!");
            mainCharacter.style.left = "230px";
            mainCharacter.style.top = "90px";
            break;

        case "item-makeFruitbowlClick":
            console.log(inventory.bowl, inventory.apple, inventory.strawberry)
            if (inventory.bowl > 0 && inventory.apple > 0 && inventory.strawberry > 0)
            {
                removeInvItem("bowl")
                removeInvItem("apple")
                removeInvItem("strawberry")
                showSpeech("Making a fruit bowl...");

                setTimeout(function() {
                    showSpeech("Wohoo we made a fruit bowl!");
                    document.getElementById("item-fruitbowl").style.display="block";
                },5000)

            } else {
                showSpeech("I dont have enough ingredients.");
            }
            mainCharacter.style.left = "230px";
            mainCharacter.style.top = "77px";
            break;

        default:
            audioTrack.pause();
            audioTrack.currentTime = 0
            hideSpeech()
            break;
    }
}

function eatItem(item)
{
    showSpeech("Hmmm");
    eatTrack.play();
    setTimeout(function() {
        hideSpeech()
    },2000)
    removeInvItem(item)
}

function checkInventory(item)
{
    document.getElementById(item + "-count").innerText=parseInt(inventory[item]);

    if (inventory[item] > 0){
        document.getElementById(item).style.display = "block"
    } else {document.getElementById(item).style.display = "none"}
}

function addInvItem(item, itemId)
{
    setTimeout(function() {
        inventory[item] ++;
        checkInventory(item)
        document.getElementById(itemId).style.display = "none";
    },1 * 1000)
    setTimeout(function() {
        document.getElementById(itemId).style.display = "block";
    },120 * 1000)
}

function removeInvItem(item)
{
    inventory[item] --;
    checkInventory(item)
}

function showSpeech(dialog)
{
    mainCharacterSpeech.style.opacity = 1;
    mainCharacterSpeech.innerHTML = dialog;
}

 function hideSpeech() 
 {
    mainCharacterSpeech.style.opacity = 0;
    mainCharacterSpeech.innerHTML = "...";
 }