    
  
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

// This works, but doesn't work fluently with click off menu to close
const menuId = document.getElementById("myDropdown");
const menu = document.querySelector('.nav__dropbtn--content');
const menuToggle = document.querySelector('.nav__dropbtn');
const menuItem = document.querySelector('.nav__dropbtn--item');
const hamburger = document.querySelector(".hamburger");
const comboContain = menu.classList.contains('show') && hamburger.classList.contains('is-active');

// menuToggle.addEventListener('click', function() {
//   document.getElementById("myDropdown").classList.toggle("show");
// });










  
// ON CLICK HAMBURGER MENU OPEN/CLOSE    DOESN'T CLOSE WITH OFF CLICK?
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    //  open/close menu
    if (hamburger.classList.contains('is-active')){
      menuId.classList.add("show");
    } else {
      menuId.classList.remove("show");
    } 
    
  });


  //    ------  OFF CLICK CLOSE MENU
document.addEventListener('mouseup', function(event) {
  if (!comboContain) {
    menuId.classList.remove('show');
    hamburger.classList.remove('is-active');
  } 
});



// This doesnt do shit.
hamburger.addEventListener('click', function(event) {
  if (comboContain) {
    menu.classList.remove('show');
    hamburger.classList.remove('is-active');
  } 
});


// -------SHOULD WORK TO CLOSE WITH CLICK WHILE OFF CLICK IS ACTIVE????
// hamburger.addEventListener('click', function(){
//   if (hamburger.classList.contains('is-active')) {
//     menu.classList.remove('show');
//     hamburger.classList.remove('is-active');
//   }
// });


//  -------off click close alternative
// window.addEventListener('mouseup', function(event){
//   if (event.target != menu) {
//     menu.classList.remove('show');
    
//     // hamburger.classList.toggle('is-active')
//   }
// });
  






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


