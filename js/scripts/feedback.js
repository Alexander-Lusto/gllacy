// components
const showFeedbackButton = document.querySelector(".contacts__button");
const darkBackground = document.querySelector(".page__wrapper");
const feedbackSection = document.querySelector(".feedback");
const feedbackCloseButton = feedbackSection.querySelector(".feeedback__close-button");
const feedbackSubmitButton = feedbackSection.querySelector(".feedback__submit-button");
const feedbackNameInput = feedbackSection.querySelector(".feedback input[name='user-name']");
const feedbackMailInput = feedbackSection.querySelector(".feedback input[name='user-mail']");
const feedbackCommentInput = feedbackSection.querySelector(".feedback textarea[name='user-comment']");

// classes
const showElementClass = "shown";
const hideElementClass = "hidden";
const animationShake = "modal-error";
const animationShakeTime = 600;

//functions
const showElements = function (...elements) {
  elements.forEach((el) => el.classList.remove(hideElementClass));
  elements.forEach((el) => el.classList.add(showElementClass));
};
const hideElements = function (...elements) {
  elements.forEach((el) => el.classList.remove(showElementClass));
  elements.forEach((el) => el.classList.add(hideElementClass));
};
const clearValues = function (...elements) {
  elements.forEach((el) => el.value = "");
}
const useAnimation = function (element, animation, time) {
  element.classList.remove(animation);
  element.classList.add(animation);
  timerId = setTimeout(() => element.classList.remove(animation), time);
}

//local storage
let isStorageSupport = true;
let userName = "";
let userMail = "";
try {
  userName = localStorage.getItem("name");
  userMail = localStorage.getItem("mail");
} catch (err) {
  isStorageSupport = false;
}



//eventListeners
showFeedbackButton.addEventListener("click", function (evt){
  evt.preventDefault();
  showElements(feedbackSection,darkBackground);
  feedbackNameInput.focus();
  userName ? (feedbackNameInput.value = userName) : feedbackNameInput.focus();
  userMail ? (feedbackMailInput.value = userMail) && (feedbackCommentInput.focus()) : feedbackMailInput.focus();
});

feedbackCloseButton.addEventListener("click", function (evt){
  evt.preventDefault();
  hideElements(feedbackSection,darkBackground);
  clearValues(feedbackNameInput, feedbackMailInput, feedbackCommentInput);
});

document.addEventListener("keydown", function(evt) {
  if (evt.key === `Escape`) {
    hideElements(feedbackSection,darkBackground);
    clearValues(feedbackNameInput, feedbackMailInput, feedbackCommentInput);
  }
});

feedbackSubmitButton.addEventListener("click", function (evt){
  evt.preventDefault();
  if (!feedbackNameInput.value || !feedbackMailInput.value || !feedbackCommentInput.value) {
    useAnimation(feedbackSection, animationShake, animationShakeTime);
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem("name", feedbackNameInput.value);
      localStorage.setItem("mail", feedbackMailInput.value);
    }
    hideElements(feedbackSection,darkBackground);
    clearValues(feedbackNameInput, feedbackMailInput, feedbackCommentInput);
  }

});


