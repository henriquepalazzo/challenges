console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const body = document.querySelector("body")
const post = document.createElement("section")
const postContent = document.createElement("p")
const postFooter = document.createElement("footer")
const username = document.createElement("span")
const button = document.createElement("post__button")

post.classList.add("post")
postContent.classList.add("post__content")
postContent.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
postFooter.classList.add("post__footer")
username.classList.add("post__username")
username.innerHTML = "@username"
button.innerHTML = "♥ Like"
button.classList.add("post__button")
postFooter.append(username)
postFooter.append(button)

post.append(postContent)
post.append(postFooter)
body.append(post)

button.addEventListener('click', handleLikeButtonClick)