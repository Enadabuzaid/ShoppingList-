/*
-- Llink : https://developer.mozilla.org/en-US/docs/Web/Events >>>
*/


/*var button = document.getElementsByTagName("button")[0]
button.addEventListener("click" , function test() {
	console.log("Click!!!!!!!")
});*
 function enterMouse(){
 	document.getElementById("enter").style.color = "blue";
 	console.log("Welcome  back")
 }

 function mouseleave(){
 	console.log("Helooooooooo");
 }
var button = document.getElementsByTagName("button")[0]
button.addEventListener("mouseenter" ,	enterMouse() );

var button = document.getElementsByTagName("button")[0]
button.addEventListener("mouseleave" ,	mouseleave());



*/

var button = document.getElementById ("enter");
var input = document.getElementById ("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = ""
}

function addListAfterClick() {

	if ( inputLength() > 0 ) {
		createListElement();
	} else {
		document.getElementById("enter").classList.add("animated", "shake")
	}
}

function addListAfterkey(event) {
	if (inputLength() >0 && event.keyCode === 13) {
		createListElement();
	} 
}



button.addEventListener("click" , addListAfterClick );
input.addEventListener("keypress", addListAfterkey);

