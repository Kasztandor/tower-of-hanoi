var body = document.querySelector("body")
var el
function randomColor(){
    var color = "";
    for (var i=0; i<6; i++){
        color+=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"][Math.floor(Math.random()*16)]
    }
    return color
}
function reloadDragging(){
    document.querySelectorAll("div").forEach(i=>{
        i.draggable=false
    })
    document.querySelectorAll(".div").forEach(i=>{
        if (i.childNodes.length>0){
            i.childNodes[i.childNodes.length-1].draggable=true
        }
    })
}
function drag(e){
    ev.dataTransfer.setData("text", ev.target.id);
}
function startscreen(){
    body.innerHTML=`
    <div id="start">
    Start hanoi tower game.<br><br>
    <input id="number" type="number" placeholder="count of blocks"> <label><input type="checkbox" id="checkbox"> numbers on blocks</label><br><br>
    <button>Rozpocznij</button>
    </div>`
    document.querySelector("button").addEventListener("click", ()=>{
        var number = document.querySelector("#number").value
        var checkbox = document.querySelector("#checkbox").checked
        if (!isNaN(number) && number>=3){
            body.innerHTML = '<div id="div1" class="div"></div><div id="div2" class="div"></div><div id="div3" class="div"></div>'
            document.querySelectorAll(".div").forEach(i => {
                i.addEventListener("drop", e=>{
                    reloadDragging()
                })
                i.addEventListener("dragover", e=>{
                    e.preventDefault()
                    if (i.childNodes.length == 0 || el.id.slice(1) < i.childNodes[i.childNodes.length-1].id.slice(1)){
                        i.appendChild(el)
                    }
                })
            })
            var towers = [[],[],[]]
            var numbers = []
            for (var i = number-1; i>=0; i--){
                numbers.push(i)
            }
            numbers.forEach(i => {
                towers[Math.floor(Math.random()*3)].push(i)
            })
            towers.forEach((i, index) => {
                i.forEach(j => {
                    document.querySelector("#div"+(index+1)).innerHTML+=`<div id="d${j}" style="background-color: #${randomColor()}; 
                    width: calc(50% + 50% * (${j} / ${numbers.length}));" class="block">${checkbox?j+1:""}</div>`
                })
            })
            document.querySelectorAll(".block").forEach(i => {
                i.addEventListener("dragstart", e=>{
                    el = e.target
                })
                i.addEventListener("drag", e=>{
                    console.log("dragging")
                })
            })
        }
        reloadDragging()
    })
}
window.onload = ()=>{startscreen()}