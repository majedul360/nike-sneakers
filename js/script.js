let slideBtn = document.querySelectorAll('.slide-btn');
let slideWrapper = document.querySelector('.slider-wrapper')


slideBtn.forEach((slide,index) => {
  slide.addEventListener('click', () => {
    slideWrapper.style.transform = `translateX(${-100 * index}vw)`;
  })
})


