//grab elements on page to work with
var body = document.getElementById("body");
var container = document.getElementById("container");
var texts = document.getElementsByClassName("text");
// because i want to hover over a div but change the background color of the body behind it,
//we need to assign the annimation through javascript
for (let i=0; i<texts.length; i++) {
  texts[i].addEventListener("mouseover", () => FlashOn(texts[i]));
  texts[i].addEventListener("mouseout", () => RemoveFlash(texts[i]));
}
//mouse on, flash on
function FlashOn(elem){
  body.classList.add("flash");
  elem.classList.add("flash");
}
//when mouse leaves container with the text, remove the animation
function RemoveFlash(elem){
  body.classList.remove("flash");
  elem.classList.remove("flash");
}
