const interactiveMap = document.querySelector(".contacts__map");

if (navigator.onLine) showElements(interactiveMap);
else hideElements(interactiveMap);

