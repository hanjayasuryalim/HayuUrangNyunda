var searchBox=document.getElementById("searchBox");
var sLink=document.getElementById("searchLink");

const changeValue=()=>{
	let val=searchBox.value;
	sLink.setAttribute("href",`${val}.html`);
	console.log(val);
}

searchBox.addEventListener("focusout",changeValue);
