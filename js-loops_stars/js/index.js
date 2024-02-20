console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars = 0) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";
  let filledStarsCounter = filledStars
  for (let index = 1; index <= 5; index++) {
    const star = document.createElement("img");
    if (filledStarsCounter) {
      star.setAttribute("src", "../assets/star-filled.svg")
      filledStarsCounter--
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
