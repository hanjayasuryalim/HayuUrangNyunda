//variables
let myWindow;
let btn=document.getElementById("newWindow");

const openWindow=()=>{
	myWindow=window.open("../HTML/AngklungInteractiveGame.html","myWindow");
}

btn.addEventListener("click",openWindow);