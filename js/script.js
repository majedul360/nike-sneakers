let products = [
  {
    id: 1,
    title: "air force",
    price: 119,
    colors: [
      {
        code:"black",
        img: "../img/air.png"
      },
      {
        code: "darkblue",
        img:"../img/air2.png"
      }
    ]
  },
  {
    id: 2,
    title: "air jordan",
    price: 149,
    colors: [
      {
        code:"lightgray",
        img: "../img/jordan.png"
      },
      {
        code: "green",
        img:"../img/jordan2.png"
      }
    ]
  },
  {
    id: 3,
    title: "air blazer",
    price: 109,
    colors: [
      {
        code:"lightgray",
        img: "../img/blazer.png"
      },
      {
        code: "green",
        img:"../img/blazer2.png"
      }
    ]
  },
  {
    id: 4,
    title: "air crater",
    price: 129,
    colors: [
      {
        code:"black",
        img: "../img/crater.png"
      },
      {
        code: "lightgray",
        img:"../img/crater2.png"
      }
    ]
  },
  {
    id: 5,
    title: "air hippie",
    price: 99,
    colors: [
      {
        code:"gray",
        img: "../img/hippie.png"
      },
      {
        code: "black",
        img:"../img/hippie2.png"
      }
    ]
  },
]

let slideBtn = document.querySelectorAll('.slide-btn');
let slideWrapper = document.querySelector('.slider-wrapper')

let choosenProduct = products[0];
let currentProductImg = document.querySelector('.product .image img');
let currentProductTitle = document.querySelector('.product .product-title');
let currentProductPrice = document.querySelector('.product .product-price');
let currentProductColors = document.querySelectorAll('.product .product-color');
let currentProductSizes = document.querySelectorAll('.product .product-size');

slideBtn.forEach((slide,index) => {
  slide.addEventListener('click', () => {
    // change the slide 
    slideWrapper.style.transform = `translateX(${-100 * index}vw)`;
    
    // change the current product 
    choosenProduct = products[index];
    // change texts and images of current product 
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    // assing new colors 
    currentProductColors.forEach((color, index) => {
    color.style.backgroundColor = choosenProduct.colors[index].code;      
    }) 

  })
})


// changing current product img color 

currentProductColors.forEach((color, index) => {
  color.addEventListener('click', () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  })
})


// change current product size btn background 
currentProductSizes.forEach((size) => {
  size.addEventListener('click', () => {
   currentProductSizes.forEach(size => {
     size.style.backgroundColor = "white";
     size.style.color = "black";
   });
   size.style.backgroundColor = "black";
   size.style.color = "white";
  });
});