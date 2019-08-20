 
const menuId = document.getElementById("myDropdown");
const menu = document.querySelector('.nav__dropbtn--content');
const menuToggle = document.querySelector('.nav__dropbtn');
const menuItem = document.querySelector('.nav__dropbtn--item');
const hamburger = document.querySelector(".hamburger");


// ON CLICK HAMBURGER MENU OPEN/CLOSE    
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
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



// Debounce

const debounce = (func, delay) => {
  let inDebounce
  return function() {
    const context = this
    const args = arguments
    clearTimeout(inDebounce)
    inDebounce = setTimeout(() => func.apply(context, args), delay)
  }
}




// Scroll to change menu item

  const links = document.querySelectorAll('.nav__link--item');
const sections = document.querySelectorAll('.menu-section');
// const dropLink = document.querySelectorAll('.nav__dropbtn--item');

function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
  links.forEach((link) => link.classList.remove('menu-active'));
  links[index].classList.add('menu-active');
}

changeLinkState();
// window.addEventListener('scroll', changeLinkState);

window.addEventListener('scroll', debounce(function() {
  changeLinkState();
} , 18));



