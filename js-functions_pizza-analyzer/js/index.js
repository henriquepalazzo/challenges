console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value
  const pizzaSize2 = pizzaInput2.value
  calculatePizzaGain(pizzaSize1, pizzaSize2)
});

pizzaInput2.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value
  const pizzaSize2 = pizzaInput2.value
  calculatePizzaGain(pizzaSize1, pizzaSize2)
});

// Task 1
// define the function calculatePizzaGain here

function calculatePizzaGain(diameter1, diameter2) {
  const area1 = calculatePizzaArea(diameter1)
  const area2 = calculatePizzaArea(diameter2)
  const pizzaGain = (area2 - area1) / area1 * 100
  output.textContent = Math.round(pizzaGain)
}

function calculatePizzaArea(diameter) {
  const radius = diameter/2
  return Math.PI*(radius*radius)
}

// Task 2
// define the function updatePizzaDisplay here

function updatePizzaDisplay(pizzaElement, newSize) {
  pizzaElement.style.width = newSize / 24 * 100 + 'px'
}

// Task 3
// define the function updateOutputColor here

function updateOutputColor(size1, size2) {
  outputSection.style.backgroundColor = size1 > size2 ? 'var(--red)' : 'var(--green)'
}