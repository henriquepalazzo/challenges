console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars = 0) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";
  for (let index = 1; index <= 5; index++) {
    const star = document.createElement("img");
    if (filledStars) {
      star.setAttribute("src", "../assets/star-filled.svg")
      filledStars--
    } else {
      star.setAttribute("src", "../assets/star-empty.svg")
    }
    star.addEventListener("click", () => {
      renderStars(index)
    })
    starContainer.append(star)
  }
}

renderStars(3);
