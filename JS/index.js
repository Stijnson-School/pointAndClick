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

    switch (e.target.id) {
        case "tv":
            audioTrack.pause();
            audioTrack.currentTime = 0
            showSpeech("This is a beautiful TV!");
            break;

        case "radio":
            showSpeech("Lets dance on the radio music!");
            audioTrack.play();
            break;

        case "up-stairs":
            showSpeech("Lets go upstairs!");
            audioTrack.pause();
            audioTrack.currentTime = 0
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

                    setTimeout(function() {
                        hideSpeech() 
                    },2000);
                },500);
            },1500);
              break;

        case "down-stairs":
            showSpeech("Lets go downstairs!");
            audioTrack.pause();
            audioTrack.currentTime = 0
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

                    setTimeout(function() {
                        hideSpeech() 
                    },2000);
                },500);
            },1500);
              break;

        default:
            audioTrack.pause();
            audioTrack.currentTime = 0
            hideSpeech()
            break;
    }
}

function switchImage()
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