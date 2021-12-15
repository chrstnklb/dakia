// Contains DOM manipulations but only if there is no functional logic in it

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

function removeAllElementsFromRef(){
    getRef().innerHTML = ""
}

function jumpToHeader(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}