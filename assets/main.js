const switchBtn_1 = document.getElementById("btn-1");
const switchBtn_2 = document.getElementById("btn-2");
const slider_1 = document.querySelector(".slider-1");
const slider_2 = document.querySelector(".slider-2");

function toggleSliders(event) {
  const isRightArrow = event.keyCode === 39;
  const isLeftArrow = event.keyCode === 37;
  const isBtn1Clicked = event.target.matches("#btn-1");
  const isBtn2Clicked = event.target.matches("#btn-2");
  
  if (event.target.matches("img") || isBtn2Clicked || isRightArrow) {
    slider_1.classList.add("d-none");
    slider_2.classList.remove("d-none");
  } else if (isBtn1Clicked || isLeftArrow) {
    slider_2.classList.add("d-none");
    slider_1.classList.remove("d-none");
  }
}

function goBackToSlider1() {
  slider_2.classList.add("d-none");
  slider_1.classList.remove("d-none");
}

switchBtn_1.addEventListener("click", toggleSliders);
switchBtn_2.addEventListener("click", toggleSliders);
window.addEventListener("keydown", toggleSliders);

slider_2.addEventListener("click", goBackToSlider1); 