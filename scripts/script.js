

//---------- Sticky Navbar ---------------//
    window.addEventListener('scroll', myFunctionForSticky);
    var navbar = document.getElementById("navigation");
    var sticky = navbar.offsetTop;

    function myFunctionForSticky() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
    

// ----------- slideshow --------- //

var swiper = new Swiper('.swiper-container', {
  spaceBetween: 10,
  centeredSlides: true,
  effect: 'fade',
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  fadeEffect: {
    crossFade: true,
  },
});

// collapse form  
document.getElementById('form__submit').addEventListener('click',function hide() {
    var div = document.getElementById('form');
    div.style.display = 'none';
    var thanks = document.getElementById('thanks');
    thanks.style.display = 'block';
}, false);

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function () {
      smoothScroll.scrollTo(this.getAttribute('href'), 300);
  });
});

// Smooth Scroll -import from smoothie.min

// smoothie();

smoothie();

// debounce   -need assistance    below is basic layout


// function debounce(func, wait, immediate) {
// 	var timeout;
// 	return function() {
// 		var context = this, args = arguments;
// 		var later = function() {
// 			timeout = null;
// 			if (!immediate) func.apply(context, args);
// 		};
// 		var callNow = immediate && !timeout;
// 		clearTimeout(timeout);
// 		timeout = setTimeout(later, wait);
// 		if (callNow) func.apply(context, args);
// 	};
// };
   
