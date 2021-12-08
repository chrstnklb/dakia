function getRef(){
    return document.getElementById("ref");
}

function appendBreak(appendee) {
    let br = document.createElement("br")
    appendee.appendChild(br)
}


function gameOver() {
    alert("   # # #   G A M E    O V E R   # # #   ");
}