




//---------- Sticky Navbar ---------------//
    // window.addEventListener('scroll', myFunctionForSticky);
    // var navbar = document.getElementById("navigation");
    // var sticky = navbar.offsetTop;

    // function myFunctionForSticky() {
    //   if (window.pageYOffset >= sticky) {
    //     navbar.classList.add("sticky");
    //   } else {
    //     navbar.classList.remove("sticky");
    //   }
    // }
    

// hamburger toggle

const menu = document.querySelector('.nav__dropbtn--content');
  const menuToggle = document.querySelector('.nav__dropbtn');

  menuToggle.addEventListener('click', (e) => {
    e.preventDefault();

    if (window.getComputedStyle(menu).display == 'block') {
      menu.style.display = 'none';
    } else  {
      menu.style.display = 'block';
    }
  });

// 


    // ----------- slideshow --------- //

var swiper = new Swiper('.swiper-container', {
  spaceBetween: 10,
  centeredSlides: true,
  effect: 'fade',
  speed: 1000,
  autoplay: {
    delay: 4500,
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


// Smooth Scroll -import from smoothie.min

smoothie();

// throttle   -need assistance    below is basic layout


function throttle(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function() {
    var now = Date.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};


// hamburger

var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
  });

