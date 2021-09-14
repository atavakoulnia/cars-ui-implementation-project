//----------------------------- Popup  -------------------------------------------------------
function openForm() {
    document.getElementById("subscribeForm").style.display = "block";
}

function closeForm() {
    document.getElementById("subscribeForm").style.display = "none";
}
//----------------------------- Carousel -------------------------------------------------------
var slideIndex = 1;
// Next/previous controls
function plusSlides(n) {
    clearInterval(autoScroll);  //if it is manually changed the autoscroll is going to stop
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


//Auto scroll
var autoScroll = window.setInterval(function(){
    slideIndex+=1;
    showSlides(slideIndex);
}, 2000);

//----------------------------- Ends Carousel -------------------------------------------------------
