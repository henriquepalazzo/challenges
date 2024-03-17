console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

for (const language in languages) {
  if (Object.hasOwnProperty.call(languages, language)) {
    const element = languages[language];
    const option = document.createElement("option")
    option.setAttribute("value", element)
    option.textContent = element
    select.append(option)
  }
}

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

for (const navItem in nav) {
  if (Object.hasOwnProperty.call(nav, navItem)) {
    const element = nav[navItem];
    console.log(element.text);
    const liItem = document.createElement("li")
    const aItem = document.createElement("a")
    aItem.setAttribute("href", element.href)
    aItem.textContent = element.text
    liItem.append(aItem)
    ul.append(liItem)
  }
}
