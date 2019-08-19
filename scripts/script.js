 
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



// TEST
// const throttle = (func, limit) => {
//   let lastFunc
//   let lastRan
//   return function() {
//     const context = this
//     const args = arguments
//     if (!lastRan) {
//       func.apply(context, args)
//       lastRan = Date.now()
//     } else {
//       clearTimeout(lastFunc)
//       lastFunc = setTimeout(function() {
//         if (Date.now() - lastRan >= limit) {
//           func.apply(context, args)
//           lastRan = Date.now()
//         }
//       }, limit - (Date.now() - lastRan))
//     }
//   }
// }

// window.addEventListener('scroll', throttle(function() {
//   changeLinkState())
// }, 1000));

// const throttle = (func, limit) => {
//   let lastFunc
//   let lastRan
//   return function() {
//     const context = this
//     const args = arguments
//     if (!lastRan) {
//       func.apply(context, args)
//       lastRan = Date.now()
//     } else {
//       clearTimeout(lastFunc)
//       lastFunc = setTimeout(function() {
//         if ((Date.now() - lastRan) >= limit) {
//           func.apply(context, args)
//           lastRan = Date.now()
//         }
//       }, limit - (Date.now() - lastRan))
//     }
//   }
// }



// const throttle = (func, limit) => {
//   let lastFunc
//   let lastRan
//   return function() {
//     const context = this
//     const args = arguments
//     if (!lastRan) {
//       func.apply(context, args)
//       lastRan = Date.now()
//       console.log('test1')
//     } else {
//       clearTimeout(lastFunc)
//       console.log('test2')
//       lastFunc = setTimeout(function() {
//         if ((Date.now() - lastRan) >= limit) {
//           func.apply(context, args)
//           lastRan = Date.now()
//           console.log('test 3')
//         }
//       }, limit - (Date.now() - lastRan))
//     }
//   }
// }