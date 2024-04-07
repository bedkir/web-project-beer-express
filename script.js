var myNavbar = document.getElementById("navbarSupportedContent");
var navbarToggleBtn = document.querySelector(".navbar-toggler");

navbarToggleBtn.addEventListener("click", function () {
  var isExpanded = myNavbar.classList.contains("show");
  if (isExpanded) {
    myNavbar.classList.remove("show");
  } else {
    myNavbar.classList.add("show");
  }
});
