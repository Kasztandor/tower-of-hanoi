var body = document.querySelector("body")
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
            document.querySelector(".div").childNodes[document.querySelector(".div").childNodes.length-1].draggable=true
            console.log(document.querySelector(".div").childNodes[document.querySelector(".div").childNodes.length-1])
        }
    })
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
                    width: calc(50% + 50% * (${j} / ${numbers.length}));">${checkbox?j+1:""}</div>`
                })
            })
        }
    })
}
window.onload = ()=>{startscreen()}