const body = document.querySelector("body")
const container = document.getElementById("container")
let gritsize =16
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
            div.style.backgroundColor = "black";
        });
    }

});
body.appendChild(gritsziebnt)