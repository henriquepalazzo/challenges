const icon = document.querySelector('[data-js="icon"]');
const button3 = document.querySelector('[data-js="sleep-3-button"]');
const button5 = document.querySelector('[data-js="sleep-5-button"]');
const button10 = document.querySelector('[data-js="sleep-10-button"]');
const body = document.body;

button3.addEventListener("click", async () => {
  icon.textContent = "💤";
  await sleep(3);
  icon.textContent = "⏰";
});

button5.addEventListener("click", async () => {
  icon.textContent = "💤";
  await sleep(5);
  icon.textContent = "⏰";
});

async function handleSleepFor10Button() {
  icon.textContent = "💤";
  await sleep(10);
  icon.textContent = "⏰";
}

button10.addEventListener("click", handleSleepFor10Button);

// returns a Promise that resolves after x seconds
function sleep(seconds) {
  const sleepPromise = new Promise((resolve) => {
    setTimeout(() => resolve(), seconds * 1000);
  });
  return sleepPromise;
}
