function doFirst(){
	var button = document.getElementById("button");
	button.addEventListener("click", Saves, false) ;
}
function Saves(){
	var one = document.getElementById("one").vaule;
	var one = document.getElementById("two").vaule;
	var one = document.getElementById("three").vaule;
	var one = document.getElementById("four").vaule;
	sessionStorage.setItem(one,two);
	display(one);
}
function display(one){
	var rightboc = document.getElementById("rightboc");
	var two = sessionStorage.getItem(one) ; 
	rightboc.innerHTML = "Date: " + one +"<br />Team:"+Two;
}
widow.addEventListener("load", doFirst, false);
