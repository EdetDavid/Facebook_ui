// popover
var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);

var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});

// Gender Select
if (window.location.pathname === "/") {
  const radioBtn1 = document.querySelector("#flexRadioDefault1");
  const radioBtn2 = document.querySelector("#flexRadioDefault2");
  const radioBtn3 = document.querySelector("#flexRadioDefault3");
  const genderSelect = document.querySelector("#genderSelect");

  radioBtn1.addEventListener("change", () => {
    genderSelect.classList.add("d-none");
  });

  radioBtn2.addEventListener("change", () => {
    genderSelect.classList.add("d-none");
  });

  radioBtn3.addEventListener("change", () => {
    genderSelect.classList.remove("d-none");
  });
}

if (window.location.pathname === "/feed") {
  const radio_off = document.getElementById("radio__off");
  const radio_on = document.getElementById("radio__on");
  const body = document.getElementById("body");

  radio_off.addEventListener("change", () => {
    body.classList.remove("dark-mode");
  });
  radio_on.addEventListener("change", () => {
    body.classList.add("dark-mode");
  });
}

function darkMode() {
  const icon = document.getElementsByClassName("darkText");
  for (var i = 0; i < icon.length; i++) {
    icon[i].style.color = "white";
  }
}
function darkModeOff() {
  const icon = document.getElementsByClassName("darkText");
  for (var i = 0; i < icon.length; i++) {
    icon[i].style.color = "black";
  }
}
