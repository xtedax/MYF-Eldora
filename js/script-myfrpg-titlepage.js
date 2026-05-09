// ======================== PAGE LOADING EFFECT ======================== //
// This script adds a "loaded" class to the body element OF THE TITLE PAGE ONLY once the page has fully loaded, triggering a fade-in effect defined in CSS. The body starts with an opacity of 0, and when the "loaded" class is added, it transitions to full opacity over 0.3 seconds, creating a smooth fade-in effect for the entire page content.

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
// =========================================================================== //