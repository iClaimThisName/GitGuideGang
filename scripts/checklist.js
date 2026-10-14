function uncheckAll() {
  document
    .querySelectorAll('input[type="checkbox"]')
    .forEach((el) => (el.checked = false));
}

document.querySelector(".uncheck-button").addEventListener("click", uncheckAll);
