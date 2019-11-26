var topimage = document.getElementById('top');
var bottomimage = document.getElementById('bottom');
topimage.addEventListener("scroll", TopSlide);
bottomimage.addEventListener("scroll", BottomSlide);

function TopSlide{
topimage.classList.add("logo1animation");
}
TopSlide();

function BottomSlide{
bottomimage.classList.add("logo2animation");
}
BottomSlide();
