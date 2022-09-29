var body = document.querySelector("body")
function startscreen() {
    body.innerHTML=`
    <div id="start">
    Rozpocznij grę w wierzę hanoi.<br><br>
    <input id="number" type="number" placeholder="ilość klocków"><br><br>
    <button>Rozpocznij</button>
    </div>`
    document.querySelector("button").addEventListener("click", ()=>{
        var number = document.querySelector("#number").value
        if (!isNaN(number) && number>=3){
            body.innerHTML = '<div id="div1"></div><div id="div2"></div><div id="div3"></div>'
            var towers = [[],[],[]]
            var numbers = []
            for (var i = 0; i<number; i++){
                numbers.push(i)
            }
            numbers.forEach(i => {
                towers[Math.floor(Math.random()*3)].push(i)
            })
            towers.forEach((i, index) => {
                i.forEach(j => {
                    document.querySelector("#div"+(index+1)).innerHTML+=j+" "
                })
            })
        }
    })
}
window.onload = ()=>{startscreen()}