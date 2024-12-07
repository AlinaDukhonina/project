// if(number == 666){
//     let win = alert("Вы выиграли ничего, поздравляем!")
// }
let lot = document.getElementsByClassName("winbut")


let number = Math.floor(Math.random()*1000);
let lotery = alert("Ваш номер: " + number);


function check(){
    if(number == 666){
        let win = alert("Вы выиграли ничего, поздравляем!")
    }
    else{
        let lose = alert("Вы проиграли!")
    }
}


lot.addEventListener("click", check())
