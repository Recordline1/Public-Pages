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

const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: false,
   effect: "coverflow",
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: "auto",
   coverflowEffect: {
     rotate: 50,
     stretch: 0,
     depth: 100,
     modifier: 1,
     slideShadows: true,
   },
   initialSlide:2,
   // If we need pagination
   pagination: {
      dynamicBullets:true,
      clickable:true,
      el: '.swiper-pagination',
   },

   // Navigation arrows
   navigation: {
      enabled: false,
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   // And if we need scrollbar
   // scrollbar: {
   //    el: '.swiper-scrollbar',
   //    clickable: true,
   // },
});
// ================================Animation==============================

const animItems = document.querySelectorAll('.anim-items');

if(animItems.length > 0){
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight){
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }
         if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
            animItem.classList.add('active');            
         } else{
            if(!animItem.classList.contains('no-anim')){

               animItem.classList.remove('active');           
            }
         }
      }
   }
   function offset(el){
      const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,      
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {top: rect.top + scrollTop, left: rect.left + scrollLeft}      
   }
   setTimeout(() => {
      animOnScroll();
   }, 500);
}

