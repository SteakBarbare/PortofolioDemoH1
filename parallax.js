const parallax0 = document.querySelector(".parallax0");
const parallax1 = document.querySelector(".parallax1");
const parallax2 = document.querySelector(".parallax2");
const parallax3 = document.querySelector(".parallax3");
const parallax4 = document.querySelector(".parallax4");
const parallax5 = document.querySelector(".parallax5");
const parallax6 = document.querySelector(".parallax6");
const parallax7 = document.querySelector(".parallax7");
const parallax8 = document.querySelector(".parallax8");

document.addEventListener("scroll", (e) => {
  console.log(e);
  console.log(window.scrollY);
  parallax0.style.top = -window.scrollY * 0.2 + "px";
  parallax1.style.top = -window.scrollY * 0.23 + "px";
  parallax2.style.top = -window.scrollY * 0.28 + "px";
  parallax3.style.top = -window.scrollY * 0.32 + "px";
  parallax4.style.top = -window.scrollY * 0.4 + "px";
  parallax5.style.top = -window.scrollY * 0.48 + "px";
  parallax6.style.top = -window.scrollY * 0.55 + "px";
  parallax7.style.top = -window.scrollY * 0.65 + "px";
  parallax8.style.top = -window.scrollY * 0.8 + "px";
});
