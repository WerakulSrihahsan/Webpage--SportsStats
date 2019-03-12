function doFirst(){
	var button = document.getElementById("button");
	button.addEventListener("click", Saves , false) ;
}
function Saves(){
	var one = document.getElementById("one").value;
	var two = document.getElementById("two").value;
	sessionStorage.setItem(one,two);
	
	display(one);
}
function display(one){
	var rightbox = document.getElementById("rightbox");
	var two = sessionStorage.getItem(one) ; 
	rightbox.innerHTML = "Date: " + one +"<br />Team:"+Two;
}
widow.addEventListener("load", doFirst, false);
