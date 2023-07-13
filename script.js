        function toggleText(id) {
            var textElement = document.getElementById(id);
            if (textElement.style.display === "none") {
                textElement.style.display = "block";
            } else {
                textElement.style.display = "none";
            }
        }
window.addEventListener('scroll', function() {
  var scrollToTopBtn = document.getElementById('scrollToTopBtn');
  
  if (window.pageYOffset > 100) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

document.getElementById('scrollToTopBtn').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("change", function() {
    if (this.checked) {
        menu.classList.add("open");
    } else {
        menu.classList.remove("open");
    }
});

var currentIndex = 0;
var slides = document.querySelectorAll('.slideshow-container img');

function showSlide(index) {
  slides.forEach(function(slide) {
    slide.style.opacity = 0;
  });
  slides[index].style.opacity = 1;
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

setInterval(nextSlide,2500);
var video = document.getElementById('myVideo');
var videoContainer = document.getElementById('myVideoContainer');
var threshold = 300; 

function playVideo() {
  video.src += "?autoplay=1";
}

function pauseVideo() {
  var src = video.src;
  video.src = src.replace("?autoplay=1", "");
}

window.addEventListener('scroll', function() {
  var videoPosition = videoContainer.getBoundingClientRect().top;
  if (videoPosition < threshold) {
    playVideo();
  } else {
    pauseVideo();
  }
});


