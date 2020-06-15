import Glide from "@glidejs/glide";
const config = {
  type: "carousel",
  startAt: 1,
  perView: 3,
  autoplay: 4000,
  focusAt: "center",
  gap: 45,
  animationDuration: 500,
  breakpoints: {
    1090: {
      perView: 2,
    },

    750: {
      perView: 1,
    },
  },
};
new Glide(".glide", config).mount();
