const input = document.getElementById('footer__input');
const placeholder = document.getElementById('footer__place');

input.addEventListener('input', function () {
  if (input.value === "") {
    placeholder.style.display = 'flex';
  } else {
    placeholder.style.display = 'none';
  }
});

// Initial check for placeholder visibility
if (input.value === "") {
  placeholder.style.display = 'flex';
}