var acc = document.getElementsByClassName("accordion");
var i;

function showEl() {
  this.classList.toggle("active");
  var triDir = this.children[0];
  var panel = this.nextElementSibling;
  if (panel.style.display === "block") {
    panel.style.display = "none";
    triDir.className = 'fas fa-solid fa-chevron-right';
  } else {
    panel.style.display = "block";
    triDir.className = 'fas fa-solid fa-chevron-down';
  }
}
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", showEl);
}
