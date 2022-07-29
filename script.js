"use strict";
//  MENU OPEN AND CLOSE
const menu = document.querySelector(".menu");
const slide = document.querySelector("#navbar ul");
const cancel = document.querySelector(".close");

function open() {
    slide.style.left = "0";
}

function close() {
    slide.style.left = "-300px";
}

menu.addEventListener("click", open);
cancel.addEventListener("click", close);

// PICTURE DISPLAY
let bigImg = document.querySelector(".shoe-img");
const nextRight = document.querySelector(".right");
const previousLeft = document.querySelector(".left");
let countback = 3;
let countfront = 1;

function forward() {
    countfront += 1;
    if (countfront > 3) {
        countfront = 1;
    }

    bigImg.src = `/image/image-product-${countfront}.jpg`;
}

function backward() {
    countback -= 1;
    if (countback < 1) {
        countback = 3;
    }
    bigImg.src = `/image/image-product-${countback}.jpg`;
}
nextRight.addEventListener("click", forward);
previousLeft.addEventListener("click", backward);

// DESKTOP IMAGE CHANGE
const images = document.querySelectorAll(".img-select");
const border = document.querySelector(".active");
images.forEach((image) => {
    image.addEventListener("click", show);
    image.classList.add(border);

    function show() {
        bigImg.src = image.src;
    }
});

// CART INCREMENT AND CART TO WORK
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
let number = document.querySelector(".num");
const cartNum = document.querySelector(".cart-number");
const cartNumCont = document.querySelector(".cart-num-cont");
let addCount = 0;

// adding the shop cart
function add() {
    addCount++;
    number.textContent = addCount;
    cartNum.textContent = number.textContent;
    if (number.textContent > 0) {
        quantity.textContent = cartNum.textContent;
    }
    if (number.textContent == 0) {
        cartNumCont.style.display = `none`;
    }
}
plus.addEventListener("click", add);

// subtracting the shop cart
function subtract() {
    cartNum.textContent = addCount;
    number.textContent = addCount--;
    quantity.textContent = cartNum.textContent;
    if (number.textContent < 0) {
        number.textContent = 0;
        addCount = 0;

        cartNum.textContent = 0;
        quantity.textContent = 0;
    }
    if (number.textContent == 0) {
        cartNumCont.style.display = `none`;
    }
}
minus.addEventListener("click", subtract);

// CART DISPLAY
const cartDrop = document.querySelector("#cart");
const cartIcon = document.querySelector(".cart-bask");

function drop() {
    cartDrop.style.display = cartDrop.style.display == "none" ? "block" : "none";
}

cartIcon.addEventListener("click", drop);

// CALCULATION
const price = document.querySelector(".price").textContent;
let quantity = document.querySelector(".quantity");
let total = document.querySelector(".total");
const check = document.querySelector(".check");
const cartItem = document.querySelector(".cart-item");

let result;

function checkout() {
    result = quantity.textContent * price;
    total.textContent = result;
    if (number.textContent == 0) {
        cartNumCont.style.display = `none`;
        cartItem.style.display = `flex`;
        cartItem.style.justifyContent = `center`;
        cartItem.style.alignItems = `center`;

        cartItem.innerHTML = `empty cart`;
    }
}
check.addEventListener("click", checkout);

const cartBtn = document.querySelector(".cart-btn");

function cartBtnClick() {
    cartNumCont.style.display === `none` ? `flex` : `none`;
    if (number.textContent == 0 && cartNum.textContent == 0) {
        cartNumCont.style.display = `none`;
    } else {
        cartNumCont.style.display = `flex`;
    }
}
cartNumCont.style.display = `none`;
cartBtn.addEventListener("click", cartBtnClick);

const del = document.querySelector(".del-img");

function remove() {
    cartItem.style.display = `none`;
    cartNumCont.style.display = `none`;
}
del.addEventListener("click", remove);