
  
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

// This works, but doesn't work fluently with click off menu to close
const menuId = document.getElementById("myDropdown");
const menu = document.querySelector('.nav__dropbtn--content');
const menuToggle = document.querySelector('.nav__dropbtn');
const menuItem = document.querySelector('.nav__dropbtn--item');
const hamburger = document.querySelector(".hamburger");


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


function isDescendant(parent, child) {
  var node = child.parentNode;
  while (node != null) {
    if (node == parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

document.addEventListener("click", function(event){
  console.log('event.target', event.target);    
  const nav = document.querySelector(".nav-wrapper");
  var isInNav = isDescendant(nav, event.target);
  console.log('isInNav', isInNav);
  // KD - we need to check if the menu is already open, then if the user clicked inside of the nav
  if (hamburger.classList.contains('is-active') && isInNav) {
    console.log('true')      
  } else {
    console.log('false')
    menuId.classList.remove("show");
    hamburger.classList.remove("is-active");
  }
})    



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




// menu scroll
// (function() {
//   'use strict';

//   var section = document.querySelectorAll(".menu-section");
//   var sections = {};
//   var i = 0;

//   Array.prototype.forEach.call(section, function(e) {
//     sections[e.id] = e.offsetTop;
//   });

//   window.onscroll = function() {
//     var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

//     for (i in sections) {
//       if (sections[i] <= scrollPosition) {
//         document.querySelector('.menu-active').setAttribute('class', 'nav__link--item');
//         document.querySelector('a[href*=' + i + ']').setAttribute('class', 'menu-active');
//       }
//     }
//   };
// })();


// classList.remove('menu-active');

// var section = document.querySelectorAll(".menu-section");
//   var sections = {};
//   var i = 0;

//   Array.prototype.forEach.call(section, function(e) {
//     sections[e.id] = e.offsetTop;
//   });

//   window.onscroll = function() {
//     var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

//     for (i in sections) {
//       if (sections[i] <= scrollPosition) {
//         document.querySelector('.menu-active').classList.remove('menu-active');
//         document.querySelector('a[href*=' + i + ']').classList.add('menu-active');
//       }
//     }
//   };


  const links = document.querySelectorAll('.nav__link--item');
const sections = document.querySelectorAll('.menu-section');
// const dropLink = document.querySelectorAll('.nav__dropbtn--item');

function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
  links.forEach((link) => link.classList.remove('menu-active'));
  links[index].classList.add('menu-active');
  // dropLink.forEach((link) => link.classList.remove('menu-active'));
  // dropLink[index].classList.add('menu-active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);