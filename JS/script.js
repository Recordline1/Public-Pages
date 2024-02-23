// ========================Burger==============================
const burger = document.getElementById("burg");
const menu = document.getElementById("menuNav");
const bodyLock = document.body;
burger.onclick = function () {
   this.classList.toggle("active");
   menu.classList.toggle("active");
   bodyLock.classList.toggle("active");
}

// ========================Swiper==============================

let swiper = new Swiper('#swiper1', {
   // Optional parameters
   direction: 'horizontal',
   loop: false,
   // watchOverflow:true,
   // effect: "coverflow",
   grabCursor: true,
   // centeredSlides: true,
   slidesPerView: "4",
   spaceBetween: 20,

   pagination: {
      // dynamicBullets:true,
      // enabled:false,
      clickable: true,
      el: '.swiper-pagination',
   },

   // Navigation arrows
   navigation: {
      enabled:false,
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   breakpoints: {
      320: {
         slidesPerView: 1
      },
      425: {
         slidesPerView: 2
      },
      768: {
         slidesPerView: 3
      },
      992: {
         slidesPerView: 4
      },
   }
});

let speakers = new Swiper('#swiper2', {
   // Переназначение свих классов
   // wrapperClass: "speakers-wrapper",
   // slideClass: "speakers-slide",

   direction: 'horizontal',
   loop: false,
   grabCursor: true,
   slidesPerView: "3",
   spaceBetween: 20,
  
   pagination: {
      // dynamicBullets:true,
      clickable: true,
      el: '#swiper2 .swiper-pagination',
   },

   navigation: {

      nextEl: '#swiper2 .swiper-button-next',
      prevEl: '#swiper2 .swiper-button-prev',
   },
   breakpoints: {
      320: {
         slidesPerView: 1
      },
      425: {
         slidesPerView: 2
      },
      768: {
         slidesPerView: 3
      },
      992: {
         slidesPerView: 4
      },
   }
});
// ================================Animation==============================

const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }
         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('active');
         } else {
            if (!animItem.classList.contains('no-anim')) {

               animItem.classList.remove('active');
            }
         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }
   setTimeout(() => {
      animOnScroll();
   }, 500);
}
// =======================================Menu Scroll=================================================

{
   const menuLinks = document.querySelectorAll(".kids-header__link[data-goto]");
   if (menuLinks.length > 0) {
      menuLinks.forEach(menuLink => {
         menuLink.addEventListener("click", onMenuLinkClick);
      });
      function onMenuLinkClick(e) {
         const menuLink = e.target;
         if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector("header").offsetHeight;

            window.scrollTo({
               top: gotoBlockValue,
               behavior: "smooth"
            });
            e.preventDefault();
         }
      }

   }
}