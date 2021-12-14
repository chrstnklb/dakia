function serveText() {
    let label = document.createElement("label")

    let header = document.createElement("h1")
    header.textContent = actualStep.text.header
    actualStep.text.rows.forEach(row => {
        label.innerHTML += row
        label.innerHTML += "<br>"
    });

    getRef().appendChild(header)
    getRef().appendChild(label)
    
    appendBreak(getRef())
}