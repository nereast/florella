let services = document.getElementById('services');
let horizontalScroll = document.getElementById('horizontal_scroll');

const updateCursorPosition = (event) => {
  let cursor = document.getElementById('cursor');
  cursor.style.top = `${event.clientY}px`;
  cursor.style.left = `${event.clientX}px`;

  services.onmouseenter = function() {cursor.setAttribute('class', 'services')}
  services.onmouseleave = function() {cursor.removeAttribute('class')}
  horizontalScroll.onmouseenter = function() {cursor.setAttribute('class', 'services')}
  horizontalScroll.onmouseleave = function() {cursor.removeAttribute('class')}

}

window.addEventListener('mousemove', (event) => {
  updateCursorPosition(event)
})


const scrollers = document.querySelectorAll(".scroller");


// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector("div");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}


let displayMenu = document.getElementById('displayMenu');
let hideMenu = document.getElementById('hideMenu');
let menu = document.getElementById('menu');
let links = document.querySelectorAll('#headerLinks > a > p');

displayMenu?.addEventListener('click', () => {
  if(menu) {menu.style.cssText = 'display: grid';}
  });

hideMenu?.addEventListener('click', () => {
  if(menu) {menu.style.cssText = 'display: none';}
  });

links.forEach((link) => {
  link.addEventListener('click', () => {
    if(menu) {menu.style.cssText = 'display: none';}
  })
})


let background = "bg-white";
let textColor = 'md:!text-green';
let scrollTrigger = 60;
let secondTrigger = 200;
let responsiveHeader = document.getElementById('responsiveHeader');
let header = document.getElementById('header');
let svgIcon = document.querySelector('#displayMenu > svg > path');
let slogan = document.querySelector('#header > div:nth-child(1) > p > i');
let menuLinks = document.querySelectorAll('#header > div.flex.justify-end.gap-10 > a > p');

const changeBackground = (trigger, header, icon, style, text, links) => {
  // Add pageYOffset for compatibility with IE.
  const isScrolledPastTrigger = window.scrollY >= trigger;

  if (header) {
      header.classList.toggle(style, isScrolledPastTrigger);
  }

  if (icon) {
      icon.setAttribute("fill", isScrolledPastTrigger ? "black" : "white");
  }

  if (text) {
      text.classList.toggle(textColor, isScrolledPastTrigger);
  }

  if (links) {
      links.forEach((link) => {
        link.classList.toggle(textColor, isScrolledPastTrigger);
      });
  }
};


window.onscroll = function() {
  changeBackground(scrollTrigger, responsiveHeader, svgIcon, background, slogan, menuLinks);
  changeBackground(secondTrigger, header, '', background);
};


document.getElementById("emailForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente
  let email = document.getElementById("emailInput").value;
  window.open("mailto:" + email);
});


  