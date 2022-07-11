let random = Math.floor((Math.random()*10)/4)
let cpuSelect = document.querySelectorAll(".img-cpu-choosed")
let userSelect = document.querySelectorAll(".img-items")
let refresh = function() {
    document.querySelector(".button").addEventListener("click" , () => {
    for(let i = 0 ; i <= userSelect.length - 1 ; i++){
        userSelect[i].classList.remove("d-none")
        cpuSelect[i].classList.add("d-none")
        }
    })
}   
refresh()
document.querySelector(".button").addEventListener("keydown" , (r) => {
    for(let i = 0 ; i <= userSelect.length - 1 ; i++){
        userSelect[i].classList.remove("d-none")
        cpuSelect[i].classList.add("d-none")
        }
})
for (let i = 0 ; i <= userSelect.length - 1 ; i++){
    userSelect[i].addEventListener("click" , () => {
        hiddenSelect(i)
        cpuSelect[random].classList.remove("d-none")
        gameLogic(i , random)
    })
}
function hiddenSelect (i){
    for(let j = 0 ; j <= userSelect.length - 1 ; j++){
        if (i !== j){
            userSelect[j].classList.add("d-none")
        }
    }
}
function gameLogic(user,cpu){
    const userPoint = document.querySelector("#user-point")
    const cpuPoint = document.querySelector("#cpu-point")
    if (cpu !== user){
        if(user == 0){
            if(cpu == 1){
                cpuPoint.innerHTML = Number(cpuPoint.innerHTML) +1
            }else{
                userPoint.innerHTML = Number(userPoint.innerHTML) +1
            }
        }
        if(user == 1){
            if(cpu == 2){
                cpuPoint.innerHTML = Number(cpuPoint.innerHTML) +1
            }else{
                userPoint.innerHTML = Number(userPoint.innerHTML) +1
            }
        }
        if(user == 2){
            if(cpu == 0){
                cpuPoint.innerHTML = Number(cpuPoint.innerHTML) +1
            }else{
                userPoint.innerHTML = Number(userPoint.innerHTML) +1
            }
        }
    }
    function winTheGame(){
        document.querySelector("#result").classList.remove("bg-dark")
        document.querySelector("#result").classList.add("bg-success")

    }
    if(cpuPoint.innerHTML == "3"){
        winTheGame()
        document.querySelector("#winner").innerHTML = "cpu win the game" 
    }
    if(userPoint.innerHTML == "3"){
        winTheGame()
        document.querySelector("#winner").innerHTML = "user win the game" 
    }

}




