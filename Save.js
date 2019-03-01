function doFirst(){
	var button = document.getElementById("button");
	button.addEventListener("click", Saves, false) ;
}
function Saves(){
	var one = document.getElementById("One").vaule;
	var one = document.getElementById("Two").vaule;
	var one = document.getElementById("At").vaule;
	var one = document.getElementById("Score").vaule;
	sessionStorage.setItem(one,two);
	display(Date);
}
function display(One){
	var rightboc = document.getElementById("rightboc");
	var Two = sessionStorage.getItem(One) ; 
	rightboc.innerHTML = "Date: " + One +"<br />Team:"+Two;
}
widow.addEventListener("load", doFirst, false);
