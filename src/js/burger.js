export const useBurger = () => {
  const $burger = document.getElementById("burger");
  const $burgerExit = document.getElementById("b-exit");
  const $burgerMenu = document.getElementById("b-menu");
  const $burgerWrapper = document.getElementById("d-wrapper");
  const $burgerStripeFirst = document.getElementById("burger-s-1");
  const $burgerStripeSecond = document.getElementById("burger-s-2");
  const $burgerStripeThird = document.getElementById("burger-s-3");
  const $exitStripeFirst = document.getElementById("exit-s-1");
  const $exitStripeSecond = document.getElementById("exit-s-2");
  const $burgerAbout = document.getElementById("burger-about");
  const $burgerProjects = document.getElementById("burger-projects");
  const $burgerNews = document.getElementById("burger-news");
  const $burgerContact = document.getElementById("burger-contact");
  document.addEventListener("click", (event) => {
    console.log(event.target);
    if (
      event.target == $burger ||
      event.target == $burgerStripeFirst ||
      event.target == $burgerStripeSecond ||
      event.target == $burgerStripeThird
    ) {
      $burgerMenu.classList.add("active-menu");
      $burgerWrapper.classList.add("active-wrapper");
    }
    if (
      event.target == $burgerExit ||
      event.target == $exitStripeFirst ||
      event.target == $exitStripeSecond
    ) {
      $burgerMenu.classList.remove("active-menu");
      $burgerWrapper.classList.remove("active-wrapper");
    }
    if (event.target == $burgerWrapper) {
      $burgerMenu.classList.remove("active-menu");
      $burgerWrapper.classList.remove("active-wrapper");
    }
    if (
      event.target == $burgerAbout ||
      event.target == $burgerContact ||
      event.target == $burgerProjects ||
      event.target == $burgerNews
    ) {
      $burgerMenu.classList.remove("active-menu");
      $burgerWrapper.classList.remove("active-wrapper");
    }
  });
};
