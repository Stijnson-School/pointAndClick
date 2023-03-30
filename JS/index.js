const mainCharacter = document.getElementById("mainCharacter");
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");
const gameWindow = document.getElementById("clickMap");

const audioTrack = new Audio('./AUDIO/radio.mp3');


const offsetCharacter = 16;

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

                    setTimeout(function() {
                        hideSpeech() 
                    },2000);
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

                    setTimeout(function() {
                        hideSpeech() 
                    },2000);
                },500);
            },1500);
              break;


        case "item-appleClick":
            showSpeech("OMG AN APPLE!");
            mainCharacter.style.left = "150px";
            mainCharacter.style.top = "190px";
            setTimeout(function() {
                hideSpeech()
            },3000)
            break;

        case "item-appleClick2":
            showSpeech("OMG AN APPLE!");
            mainCharacter.style.left = "435px";
            mainCharacter.style.top = "220px";
            setTimeout(function() {
                hideSpeech()
            },3000)
            break;

         case "item-strawberryClick":
            showSpeech("HMMM A STRAWBERRY!");
            mainCharacter.style.left = "76px";
            mainCharacter.style.top = "142px";
            setTimeout(function() {
                hideSpeech()
            },3000)
            break;


        default:
            audioTrack.pause();
            audioTrack.currentTime = 0
            hideSpeech()
            break;
    }
}


var inventory = {
    consumables: {
        apple: [0],
        strawberry: [0],
    },
}

function checkInventory(item)
{
    document.getElementById(item + "-count").innerText=parseInt(inventory.consumables[item]);

    if (inventory.consumables[item] > 0){
        document.getElementById(item).style.display = "block"
    } else {document.getElementById(item).style.display = "none"}
}

function addInvItem(item, itemId)
{
    setTimeout(function() {
        inventory.consumables[item] ++;
        checkInventory(item)
        document.getElementById(itemId).style.display = "none";
    },1 * 1000)
    setTimeout(function() {
        document.getElementById(itemId).style.display = "block";
    },120 * 1000)
}

function removeInvItem()
{
    
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