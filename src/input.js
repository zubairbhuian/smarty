// /*------------------------------------------------------------------
// 	    Navbar Toggle
// 	------------------------------------------------------------------*/

// const btn = document.getElementById("menu-btn");
// const nav = document.getElementById("menu");
// const navItem = document.getElementById("menu");

// btn.addEventListener("click", () => {
//   btn.classList.toggle("open");
//   nav.classList.toggle("flex");
//   nav.classList.toggle("hidden");
// });
// navItem.addEventListener("click", () => {
//   navItem.classList.toggle("hidden");
//   btn.classList.toggle("open");
// });

/*------------------------------------------------------------------
    Contact
------------------------------------------------------------------*/

var toggleInputContainer = function (input) {
  if (input.value != "") {
    input.classList.add("filled");
  } else {
    input.classList.remove("filled");
  }
};

var labels = document.querySelectorAll(".label");
for (var i = 0; i < labels.length; i++) {
  labels[i].addEventListener("click", function () {
    this.previousElementSibling.focus();
  });
}

window.addEventListener("load", function () {
  var inputs = document.getElementsByClassName("input");
  for (var i = 0; i < inputs.length; i++) {
    console.log("looped");
    inputs[i].addEventListener("keyup", function () {
      toggleInputContainer(this);
    });
    toggleInputContainer(inputs[i]);
  }
});

const passwordToggle = document.querySelector(".js-password-toggle");

passwordToggle.addEventListener("change", function () {
  const password = document.querySelector(".js-password"),
    passwordLabel = document.querySelector(".js-password-label");

  if (password.type === "password") {
    password.type = "text";
    passwordLabel.innerHTML = "hide";
  } else {
    password.type = "password";
    passwordLabel.innerHTML = "show";
  }

  password.focus();
});
