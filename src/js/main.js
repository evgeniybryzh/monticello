"use strict";
import { useMap } from "./map";
import { useBurger } from "./burger";
useMap();
useBurger();
const useSlider = () => {
  const $firstCircle = document.getElementById("circle-1");
  const $secondCircle = document.getElementById("circle-2");
  const $thirdCircle = document.getElementById("circle-3");
  const $fourthCircle = document.getElementById("circle-4");
  const $fifthCircle = document.getElementById("circle-5");
  const $header = document.getElementById("header");
  const $description = document.getElementById("description");
  const $commerce = document.getElementById("commerce");
  const $news = document.getElementById("news");
  const $footer = document.getElementById("footer");

  document.addEventListener("click", (event) => {
    if (event.target == $firstCircle) {
      $firstCircle.classList.add("active");
      $thirdCircle.classList.remove("active");
      $fourthCircle.classList.remove("active");
      $fifthCircle.classList.remove("active");
      $secondCircle.classList.remove("active");
    } else if (event.target == $secondCircle) {
      $firstCircle.classList.remove("active");
      $thirdCircle.classList.remove("active");
      $fourthCircle.classList.remove("active");
      $fifthCircle.classList.remove("active");
      $secondCircle.classList.add("active");
      $description.scrollIntoView({ block: "center", behavior: "smooth" });
    } else if (event.target == $thirdCircle) {
      $firstCircle.classList.remove("active");
      $secondCircle.classList.remove("active");
      $fourthCircle.classList.remove("active");
      $fifthCircle.classList.remove("active");
      $thirdCircle.classList.add("active");
      $commerce.scrollIntoView({ block: "center", behavior: "smooth" });
    } else if (event.target == $fourthCircle) {
      $firstCircle.classList.remove("active");
      $secondCircle.classList.remove("active");
      $thirdCircle.classList.remove("active");
      $fifthCircle.classList.remove("active");
      $fourthCircle.classList.add("active");
      $news.scrollIntoView({ block: "center", behavior: "smooth" });
    } else if (event.target == $fifthCircle) {
      $firstCircle.classList.remove("active");
      $secondCircle.classList.remove("active");
      $thirdCircle.classList.remove("active");
      $fourthCircle.classList.remove("active");
      $fifthCircle.classList.add("active");
      $footer.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  });
};
useSlider();

const useArrow = () => {
  const $arrow = document.getElementById("arrow");
  const $arrowDir = document.getElementById("arrow-dir");
  const $description = document.getElementById("description");
  document.addEventListener("click", (event) => {
    if (event.target == $arrow || event.target == $arrowDir) {
      $description.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  });
};
useArrow();
