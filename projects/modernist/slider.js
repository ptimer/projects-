var slideIndex = 1;
showSlides(slideIndex);
showSlides2(slideIndex);
showSlides3(slideIndex);
 
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var el1 = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");

  if (n > el1.length){slideIndex = 1}
  if (n < 1){slideIndex = el1.length}

  for(i = 0; i < el1.length; i++){
  	el1[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }  
 

  el1[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
}
