var labels = document.querySelectorAll(".form label");

labels.forEach((label, indx) => {
  label.addEventListener("click", () => {
    label.parentElement.children[0].focus();
  });
});
