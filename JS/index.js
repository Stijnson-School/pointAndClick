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
            showSpeech("This is a beautiful TV!");
            break;

        case "radio":
            showSpeech("Lets dance on the radio music!");
            audioTrack.play();
            break;

        default:
            audioTrack.pause();
            audioTrack.currentTime = 0
            hideSpeech()
            break;
    }
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