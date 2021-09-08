"use strict";

//Nav bar
const toggler = document.querySelector(".nav_toggler");
const content = document.querySelector(".nav_options");

toggler.addEventListener("click", function () {
  content.classList.toggle("active");
  toggler.classList.toggle("active");
});

//Testimonials
const dot1 = document.querySelector(".dot_one");
const dot2 = document.querySelector(".dot_two");
const dot3 = document.querySelector(".dot_three");
const dot4 = document.querySelector(".dot_four");
const aniaha = document.querySelector(".aniaha");
const ali = document.querySelector(".ali");
const richard = document.querySelector(".richard");
const shanai = document.querySelector(".shanai");

function showTestimonial(tShow, t2, t3, t4, dotShow, dotOne, dotTwo, dotThree) {
  tShow.classList.remove("hidden");
  t2.classList.add("hidden");
  t3.classList.add("hidden");
  t4.classList.add("hidden");
  dotShow.classList.add("active");
  dotOne.classList.remove("active");
  dotTwo.classList.remove("active");
  dotThree.classList.remove("active");
}

dot1.addEventListener("click", function () {
  showTestimonial(aniaha, ali, richard, shanai, dot1, dot2, dot3, dot4);
});

dot2.addEventListener("click", function () {
  showTestimonial(ali, aniaha, richard, shanai, dot2, dot1, dot3, dot4);
});

dot3.addEventListener("click", function () {
  showTestimonial(richard, ali, aniaha, shanai, dot3, dot1, dot2, dot4);
});

dot4.addEventListener("click", function () {
  showTestimonial(shanai, ali, richard, aniaha, dot4, dot3, dot2, dot1);
});

//Sliders(Desktop testimonials)
const slider = document.querySelector(".testimonaial_block");
let isDown = false,
  startX,
  scrollLeft;

function handleDown(e) {
  isDown = true;
  slider.classList.add("active-grab");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}

function handleLeave() {
  isDown = false;
  slider.classList.remove("active-grab");
}

function handleUp() {
  isDown = false;
  slider.classList.remove("active-grab");
}
slider.addEventListener("mousedown", handleDown);
slider.addEventListener("mouseleave", handleLeave);
slider.addEventListener("mouseup", handleUp);

//Email validation
const footerBtn = document.querySelector(".footer_btn");
const mail = document.getElementById("mail");
let text = document.querySelector(".text");

function clearText() {
  if (mail.value === "") {
    text.classList.add("hidden");
    mail.classList.remove("invalid");
  }
}

footerBtn.addEventListener("click", function () {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!mail.value.match(pattern)) {
    text.classList.remove("hidden");
    mail.classList.add("invalid");
  }
  //else
  else {
    text.classList.add("hidden");
    mail.classList.remove("invalid");
  }

  if (mail.value === "") {
    text.classList.remove("hidden");
    text.innerHTML = "Enter your email address";
    mail.classList.add("invalid");
  }
});
