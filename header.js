const customSelect = document.querySelectorAll(".custom-select")
function toggleDropdownLanguage(event) {
  event.stopPropagation();
  customSelect[0].classList.toggle("active");
}

function selectOptionLanguage(option) {
  event.stopPropagation();
  const selectValue = customSelect[0].querySelectorAll(".select-value")[0];
  selectValue.textContent = option.textContent;
  customSelect[0].classList.remove("active");
}

function toggleDropdownCurrently(event) {
  event.stopPropagation();
  customSelect[1].classList.toggle("active");
}

function selectOptionCurrently(option, event) {
  event.stopPropagation();
  const selectValue = customSelect[1].querySelectorAll(".select-value")[0];
  selectValue.textContent = option.textContent;
  customSelect[1].classList.remove("active");
}

document.addEventListener("click", function (event) {
  customSelect[0].classList.remove("active");
  customSelect[1].classList.remove("active");
});

function stopPropagation(event) {
  event.stopPropagation();
}
