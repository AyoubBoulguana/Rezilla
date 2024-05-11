const burgerIcon = document.getElementById("burgerIcon");
const menu = document.getElementById("menu");
burgerIcon.addEventListener("click", () => {
  if (menu.style.display === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
});

//   slide images
window.addEventListener("DOMContentLoaded", () => {
  initializeSlider();
  initializeComments();
});

var slideImages = Array.from(document.querySelectorAll(".slider-image img"));
var currentSlide = 0;
var nextSlideBtn = document.getElementById("right");
var prevSlideBtn = document.getElementById("left");

nextSlideBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slideImages.length;
  updateSlider();
});

prevSlideBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slideImages.length) % slideImages.length;
  updateSlider();
});

function initializeSlider() {
  slideImages.forEach((slide, index) => {
    if (index === 0) {
      slide.style.opacity = 1;
    } else {
      slide.style.opacity = 0;
    }
  });
}

function updateSlider() {
  slideImages.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.style.opacity = 1;
    } else {
      slide.style.opacity = 0;
    }
  });
}

const choices = document.getElementsByClassName("entry-dropdown")[0];
const choices2 = document.getElementsByClassName("entry-dropdown-2")[0];
const inputCheck = document.getElementById("input");
const checkBtn = document.getElementById("check-btn");

checkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputValue = inputCheck.value;
  let alertMessage = document.getElementById("alert-message");
  if (inputValue === "") {
    alertMessage.innerHTML = "Please enter a city";
    alertMessage.style.display = "block";
  } else {
    alertMessage.style.display = "none";
  }
  const choicesCheck = choices.value;
  const choicesCheck2 = choices2.value;
  let alertMessage2 = document.getElementById("alert-message-2");
  let alertMessage3 = document.getElementById("alert-message-3");

  if (choicesCheck === "") {
    alertMessage2.innerHTML = "Please select an element";
    alertMessage2.style.display = "block";
  } else {
    alertMessage2.style.display = "none";
  }

  if (choicesCheck2 === "") {
    alertMessage3.innerHTML = "Please select an element";
    alertMessage3.style.display = "block";
  } else {
    alertMessage3.style.display = "none";
  }
});

const leftBtn = document.getElementById("left-slide");
const rightBtn = document.getElementById("right-slide");
const commentParas = document.querySelectorAll(".comment-para p");
const commentNames = document.querySelectorAll(".comment-name p");

let currentParaIndex = 0;

// left

leftBtn.addEventListener("click", () => {
  commentParas.forEach((para, index) => {
    if (index === currentParaIndex) {
      para.style.display = "block";
    } else {
      para.style.display = "none";
    }
  });
  commentNames.forEach((para, index) => {
    if (index === currentParaIndex) {
      para.style.display = "block";
    } else {
      para.style.display = "none";
    }
  });

  currentParaIndex = (currentParaIndex + 1) % commentParas.length;
});

// right

rightBtn.addEventListener("click", () => {
  commentParas.forEach((para, index) => {
    if (index === currentParaIndex) {
      para.style.display = "block";
    } else {
      para.style.display = "none";
    }
  });
  commentNames.forEach((para, index) => {
    if (index === currentParaIndex) {
      para.style.display = "block";
    } else {
      para.style.display = "none";
    }
  });

  currentParaIndex =
    (currentParaIndex - 1 + commentParas.length) % commentParas.length;
});

// initializing

function initializeComments() {
  commentParas.forEach((para, index) => {
    if (index === currentParaIndex) {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
  commentNames.forEach((para, index) => {
    if (index === currentParaIndex) {
      para.style.display = "none";
    } else {
      para.style.display = "none";
    }
  });
}
