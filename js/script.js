let products = [
  {
    id: 1,
    title: "air force",
    price: "119",
    colors: [
      {
        code: "black",
        img: "../img/air.png"
      },
      {
      code: "darkblue",
      img: "../img/air2.png"
      }
    ]
  },
  {
    id: 2,
    title: "air jordan",
    price: "149",
    colors: [
      {
        code: "lightgray",
        img: "../img/jordan.png"
      },
      {
      code: "green",
      img: "../img/jordan2.png"
      }
    ]
  },
  {
    id: 3,
    title: "air blazer",
    price: "112",
    colors: [
      {
        code: "lightgray",
        img: "../img/blazer.png"
      },
      {
      code: "green",
      img: "../img/blazer2.png"
      }
    ]
  },
  {
    id: 4,
    title: "air crater",
    price: "110",
    colors: [
      {
        code: "black",
        img: "../img/crater.png"
      },
      {
      code: "lightgray",
      img: "../img/crater2.png"
      }
    ]
  },
  {
    id: 5,
    title: "air hippie",
    price: "99",
    colors: [
      {
        code: "gray",
        img: "../img/hippie.png"
      },
      {
      code: "black",
      img: "../img/hippie2.png"
      }
    ]
  },
];

let slideWrapper = document.querySelector(".home .slider-wrapper");
let slideBtn = document.querySelectorAll('.slide-btn');

let choosenProduct = products[0];
let currentProductTitle = document.querySelector('.product .product-title');
let currentProductPrice = document.querySelector('.product .product-price');
let currentProductImg = document.querySelector('.product img');
let colors = document.querySelectorAll('.product-colors .product-color');
let sizes = document.querySelectorAll('.product-sizes .product-size');



slideBtn.forEach((slide,index) => {
  slide.addEventListener('click', () => {
    // change the slide 
    slideWrapper.style.transform = `translateX(${-100 * index}vw)`;
    
    choosenProduct = products[index];
    // changer currrent product text
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = choosenProduct.price + " " + "$";
    // change the current product img 
    currentProductImg.src = choosenProduct.colors[0].img;
    
    
    // assing new color 
    colors.forEach((color,index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  
  });
});

// change product img color 
colors.forEach((color,index) => {
  color.addEventListener('click', () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

// change product size 
sizes.forEach((size) => {
  size.addEventListener('click', () => {
    sizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});


// buy now module 

let buyModule = document.querySelector('.buy-container');
let closeBtn = document.querySelector('#close');
let btn = document.querySelector('.product .btn');

btn.addEventListener('click', () => {
  buyModule.classList.add('active');
  buyForm.classList.add('active');
})

closeBtn.addEventListener('click', () => {
  buyModule.classList.remove('active');
})