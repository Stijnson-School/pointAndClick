const mainCharacter = document.getElementById("mainCharacter");
const gameWindow = document.getElementById("clickMap");
const wall1 = document.getElementById("wall-1");


const offsetCharacter = 16;

gameWindow.onclick = function(e){
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left - offsetCharacter;
    var y = e.clientY - rect.top - offsetCharacter;
    mainCharacter.style.left = `${x}px`;
    mainCharacter.style.top = `${y}px`;
}