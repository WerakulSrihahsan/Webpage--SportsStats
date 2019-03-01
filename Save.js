function doFirst(){
	var button = document.getElementById("button");
	button.addEventListener("click", Saves, false) ;
}
function Saves(){
	var one = document.getElementById("one").value;
	var one = document.getElementById("two").value;
	var one = document.getElementById("three").value;
	var one = document.getElementById("four").value;
	sessionStorage.setItem(one,two);
	display(one);
}
function display(one){
	var rightboc = document.getElementById("rightboc");
	var two = sessionStorage.getItem(one) ; 
	rightboc.innerHTML = "Date: " + one +"<br />Team:"+Two;
}
widow.addEventListener("load", doFirst, false);
