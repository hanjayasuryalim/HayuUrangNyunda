//variables

var source=document.getElementById("mySource");
var rad=document.getElementById("myRadio");

const petik=(i)=>{
	source.setAttribute("src",`../Multimedia/Sound/Kacapi/${i}.mp3`);
	rad.load();
	rad.play();
}