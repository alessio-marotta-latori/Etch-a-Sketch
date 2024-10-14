const body = document.querySelector("body")
const container = document.getElementById("container")
const btncontainer = document.getElementById("btncontainer")
const colorbtn = document.createElement("div")
let gritsize =16
let color = "black"
let rainbow = false

function getrandomcolor(){
    const letters = '0123456789ABCDEF';
    color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
}
const blackbtn = document.createElement("button")
blackbtn.appendChild(document.createTextNode("Black"))
blackbtn.addEventListener("click",function(){
    color = "black"
    rainbow = false
});
colorbtn.appendChild(blackbtn)

const redbtn = document.createElement("button")
redbtn.appendChild(document.createTextNode("Red"))
redbtn.addEventListener("click",function(){
    color = "red"
    rainbow = false
});
colorbtn.appendChild(redbtn)

const greenbtn = document.createElement("button")
greenbtn.appendChild(document.createTextNode("Green"))
greenbtn.addEventListener("click",function(){
    color = "green"
    rainbow = false
});
colorbtn.appendChild(greenbtn)

const bluebtn = document.createElement("button")
bluebtn.appendChild(document.createTextNode("Blue"))
bluebtn.addEventListener("click",function(){
    color = "blue"
    rainbow = false
});
colorbtn.appendChild(bluebtn)

const randombtn = document.createElement("button")
randombtn.appendChild(document.createTextNode("Random color"))
randombtn.addEventListener("click",function(){
    const letters = '0123456789ABCDEF';
    color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    rainbow = false
});
colorbtn.appendChild(randombtn)

const rainbowbtn = document.createElement("button")
rainbowbtn.appendChild(document.createTextNode("RAINBOW"))
rainbowbtn.addEventListener("click",function(){
    rainbow = true
});
colorbtn.appendChild(rainbowbtn)

const gritsziebnt = document.createElement("button")
gritsziebnt.appendChild(document.createTextNode("Change Grit size"))
gritsziebnt.addEventListener("click",function() {
    container.innerHTML = "";
        gritsize=prompt("Put in the size of the git (1 to 100)");
    if(gritsize>100||gritsize<1){
        alert("Please only put in a number betwean 1 and 100");
        return;
    }
    let divwith = 960  / gritsize;
    
    
        gritsize = gritsize * gritsize
        for(let i=0;i<gritsize;i++){
            const newdiv = document.createElement("div")
            newdiv.classList.add("box")
            newdiv.id = (i)
            newdiv.style.width = divwith+"px";
            newdiv.style.height = divwith+"px";
            container.appendChild(newdiv)
        }
    
    
    for(let i=0;i<gritsize;i++){
        const div =document.getElementById(i);
        div.addEventListener("mouseenter", function() {
            if (rainbow){
                getrandomcolor()
            }
            div.style.backgroundColor = color;
        });
    }

});
btncontainer.appendChild(gritsziebnt)
btncontainer.appendChild(colorbtn)