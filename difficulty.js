function start(){
    let easy = document.getElementById('easy')
    let medium = document.getElementById('medium')
    let hard = document.getElementById('Hard')
    
    if (easy && easy.checked){
        startGame(easy.value)
    }
    if (medium && medium.checked){
        startGame(medium.value)
    }
    if (hard && hard.checked){
        startGame(hard.value)
    }
    
}

function startGame(level){
    window.location = "./game/index.html?level=" + level
}