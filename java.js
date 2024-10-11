const container = document.getElementById("container")

for(let i=0;i<256;i++){
    const newdiv = document.createElement("div")
    newdiv.classList.add("box")
    newdiv.id = (i)
    container.appendChild(newdiv)
}