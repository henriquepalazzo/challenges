console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)
    console.log(data);

    const ageBadness = Number(data.age) + Number(data.badness)
    console.log(`The age-badness-sum of ${data.firstName} is ${ageBadness}`);

    event.target.elements.firstName.focus();
    event.target.reset();
})