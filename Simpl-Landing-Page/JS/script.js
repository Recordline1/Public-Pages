const swiper = new Swiper('.slider-main-block', {
  // Optional parameters 
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.body-main-block__arrow.swiper-button-next',
    prevEl: '.body-main-block__arrow.swiper-button-prev',
  }, 
});

// tabs
const tabNavItems = document.querySelectorAll('.tabs-deals-best__button');
const tabBody = document.querySelectorAll('.tabs-deals-best__body');
document.addEventListener("click", function (e) {
  const targetElement = e.target;
  let currentActiveIndex = null;
  let newActiveindex = null;
  if (targetElement.closest('.tabs-deals-best__button')) {
    tabNavItems.forEach((tabNavItem, index) => {
      if (tabNavItem.classList.contains('active')) {
        currentActiveIndex = index;
        tabNavItem.classList.remove('active');
      }
      if (tabNavItem === targetElement) {
        newActiveindex = index;
      }
    });
    targetElement.classList.add('active');
    tabBody[currentActiveIndex].classList.remove('active');
    tabBody[newActiveindex].classList.add('active');
}
});