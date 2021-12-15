
function serveHeader(){
    
    let header = document.createElement("h1");
    header.textContent = actualStep.text.header;
    getRef().appendChild(header);

}

function serveText() {

    let label = document.createElement("label");

    actualStep.text.rows.forEach(row => {
        label.innerHTML += row
        label.innerHTML += "<br>"
    });

    getRef().appendChild(label);
    appendBreak(getRef());
}