// variables
const page = document.querySelector(".page");
const slider = page.querySelector(".slider");
const sliderControls = Array.from(slider.querySelectorAll(".slider__control"));
const sliderOptions = Array.from(slider.querySelectorAll(".slider__option"));
// classes
const PageTheme = {
  GREEN: `page--green-theme`,
  GRAY: `page--gray-theme`,
  BROWN: `page--brown-theme`,
};
const pageThemes = Object.values(PageTheme);
const sliderOptionActiveClass = `slider__option--active`;
const sliderControlActiveClass = `slider__control--active`;

sliderControls.forEach((control, index) => {
  control.addEventListener("click", () => {
    pageThemes.forEach((theme) => page.classList.remove(theme));
    page.classList.add(pageThemes[index]);

    sliderOptions.forEach((option) => option.classList.remove(sliderOptionActiveClass));
    sliderOptions[index].classList.add(sliderOptionActiveClass);

    sliderControls.forEach((item) => item.classList.remove(sliderControlActiveClass));
    control.classList.add(sliderControlActiveClass);
  });
});

