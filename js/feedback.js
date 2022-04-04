// variables
const showFeedbackButton = document.querySelector(".contacts__button");
const darkBackground = document.querySelector(".page__wrapper");
const feedbackSection = document.querySelector(".feedback");
const feedbackCloseButton = feedbackSection.querySelector(".feeedback__close-button");
const feedbackSubmitButton = feedbackSection.querySelector(".feedback__submit-button");
// classes
const showElementClass = "shown";
const hideElementClass = "hidden";
//functions
const showElements = function (...elements) {
  elements.forEach((el) => el.classList.remove(hideElementClass));
  elements.forEach((el) => el.classList.add(showElementClass));
};
const hideElements = function (...elements) {
  elements.forEach((el) => el.classList.remove(showElementClass));
  elements.forEach((el) => el.classList.add(hideElementClass));
};


showFeedbackButton.addEventListener("click", function (evt){
  evt.preventDefault();
  showElements(feedbackSection,darkBackground);
});

feedbackCloseButton.addEventListener("click", function (evt){
  evt.preventDefault();
  hideElements(feedbackSection,darkBackground);
});

document.addEventListener("keydown", function(evt) {
  if (evt.key === `Escape`) {
    hideElements(feedbackSection,darkBackground);
  }
});

feedbackSubmitButton.addEventListener("click", function (evt){
  evt.preventDefault();
  hideElements(feedbackSection,darkBackground);
});
