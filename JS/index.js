const mainCharacter = document.getElementById("mainCharacter");
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");
const gameWindow = document.getElementById("clickMap");
const wall1 = document.getElementById("wall-1");


const offsetCharacter = 16;

gameWindow.onclick = function(e){
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left - offsetCharacter;
    var y = e.clientY - rect.top - offsetCharacter;
    mainCharacter.style.left = `${x}px`;
    mainCharacter.style.top = `${y}px`;

    switch (e.target.id) {
        case "tv-1":
            showSpeech("This is a beautiful TV!");
            break;

        default:
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