//get each element that i want to interact on the page
var topimage = document.getElementById('top');
var bottomimage = document.getElementById('bottom');
var container1 = document.getElementById('container1');
var body = document.getElementById('body');
bottomimage.addEventListener("click", RevealAnimation);

//when scrolling, top and bottom halves of the logo will slide up and down, revealing the homepage
function RevealAnimation(){
  topimage.classList.add("logo1animation");
  bottomimage.classList.add("logo2animation");
  container1.classList.add("revealanimation");
  console.log("yes scrolling");
}
//remove logos and container1 when animation is done
