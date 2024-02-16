console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  const message = document.createElement("li")
  message.classList.add("toast-container__message")
  message.innerHTML = "I'm a toast message."
  toastContainer.append(message)
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = ""
});
