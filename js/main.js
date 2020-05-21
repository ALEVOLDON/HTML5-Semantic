let page = document.querySelector('.page');
let themeButton = document.querySelector('.outline-button');
themeButton.onclick = function() {
  page.classList.toggle('style');
  page.classList.toggle('outline');
};