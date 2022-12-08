import { menu } from "./menu";
import "./styles/style.css";
import { DOMSelectors } from "./dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const menu = document.querySelector("#menu");
display(menu);

document.querySelector("#fullmenu").addEventListener("click", function () {
  menuDiv.innerHTML = "";
  display(menu);
});
document.querySelector("#beef").addEventListener("click", function () {
  menuDiv.innerHTML = "";
  const beef = menu.filter((item) => item.meat.includes("beef"));
  display(beef);
});
document.querySelector("#chicken").addEventListener("click", function () {
  menuDiv.innerHTML = "";
  const chicken = menu.filter((item) => item.meat.includes("chicken"));
  display(chicken);
});
document.querySelector("#pork").addEventListener("click", function () {
  menuDiv.innerHTML = "";
  const pork = menu.filter((item) => item.meat.includes("pork"));
  display(pork);
});
document.querySelector("#drink").addEventListener("click", function () {
  menuDiv.innerHTML = "";
  const drink = menu.filter((item) => item.drink == "y");
  display(drink);
});

document.querySelector("#light").addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  } else if (document.body.classList.contains("bleu")) {
    document.body.classList.add("light");
    document.body.classList.remove("bleu");
  } else {
    document.body.classList = ["light"];
  }
});

document.querySelector("#dark").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else if (document.body.classList.contains("bleu")) {
    document.body.classList.add("dark");
    document.body.classList.remove("bleu");
  } else {
    document.body.classList = ["dark"];
  }
});

document.querySelector("#bleu").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("bleu");
    document.body.classList.remove("light");
  } else if (document.body.classList.contains("dark")) {
    document.body.classList.add("bleu");
    document.body.classList.remove("dark");
  } else {
    document.body.classList = ["bleu"];
  }
});

function menuitems() {
  menu.forEach((item) => {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<div class="menu-items">
              <h2>${item.name}</h2>
              <img class="image" src="${item.image}">
              <p class="price">$${item.price}</p>
              <p class="description">${item.description}</p>
          </div>`
    );
  });
}
menuitems();
