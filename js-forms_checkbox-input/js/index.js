console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js="success"]')
successMessage.setAttribute("hidden", "");

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

hideTosError()
tosCheckbox.addEventListener('input', (event) => {
  event.target.checked ? hideTosError() : showTosError()
})

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  const formData = new FormData(event.target)
  const data = Object.fromEntries(formData)
  console.log(data);
  if(!data.tos) {
    showTosError()
    return
  }
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
  successMessage.removeAttribute("hidden");
});
