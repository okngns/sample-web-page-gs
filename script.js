var previousClickedSection = null;

function toggleText(id) {
    var textElement = document.getElementById(id);
    if (textElement.style.display === "none") {
      textElement.style.display = "block";
      previousClickedSection = id;
    } else {
      textElement.style.display = "none";
      previousClickedSection = null;
    }
  }

function toggleSection(section) {
  var selectedSection = document.getElementById(section);
  if (selectedSection && section !== previousClickedSection) {
    if (previousClickedSection) {
      var previousSection = document.getElementById(previousClickedSection);
      previousSection.style.display = 'none';
    }
    selectedSection.style.display = 'block';
    previousClickedSection = section;

    // Sayfayı ilgili bölüme kaydır
    selectedSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    selectedSection.style.display = 'none';
    previousClickedSection = null;
  }
}


document.addEventListener("DOMContentLoaded", function() {
  

  

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

  setInterval(nextSlide, 2500);

  var video = document.getElementById('myVideo');
  var videoContainer = document.getElementById('myVideoContainer');
  var threshold = 300;

  function playVideo() {
    if (video && video.src) {
      video.src += "?autoplay=1&mute=0";
    }
  }

  function pauseVideo() {
    if (video && video.src) {
      var src = video.src;
      video.src = src.replace("?autoplay=1&mute=0", "");
    }
  }

  function handleScroll() {
    var videoPosition = videoContainer ? videoContainer.getBoundingClientRect().top : 0;
    if (videoPosition < threshold) {
      playVideo();
    } else {
      pauseVideo();
    }
  }

  window.addEventListener('scroll', handleScroll);
});
