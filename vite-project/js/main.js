import { menu } from "./menu";
import "../styles/style.css";
import { DOMSelectors } from "./dom";
import { DOMSelectorsTwo } from "./dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

DOMSelectorsTwo.fullmenu.addEventListener("click", function () {
  menuDiv.innerHTML = "";
  display(menu);
});
DOMSelectorsTwo.beef.addEventListener("click", function () {
  menuDiv.innerHTML = "";
  const beef = menu.filter((item) => item.meat.includes("beef"));
  display(beef);
});
DOMSelectorsTwo.chicken.addEventListener("click", function () {
  menuDiv.innerHTML = "";
  const chicken = menu.filter((item) => item.meat.includes("chicken"));
  display(chicken);
});
DOMSelectorsTwo.pork.addEventListener("click", function () {
  menuDiv.innerHTML = "";
  const pork = menu.filter((item) => item.meat.includes("pork"));
  display(pork);
});
DOMSelectorsTwo.drink.addEventListener("click", function () {
  menuDiv.innerHTML = "";
  const drink = menu.filter((item) => item.drink == "y");
  display(drink);
});

DOMSelectorsTwo.light.addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  } else if (document.body.classList.contains("bleu")) {
    document.body.classList.add("light");
    document.body.classList.remove("bleu");
  }
});

DOMSelectorsTwo.dark.addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else if (document.body.classList.contains("bleu")) {
    document.body.classList.add("dark");
    document.body.classList.remove("bleu");
  }
});

DOMSelectorsTwo.bleu.addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("bleu");
    document.body.classList.remove("light");
  } else if (document.body.classList.contains("dark")) {
    document.body.classList.add("bleu");
    document.body.classList.remove("dark");
  }
});

function menustuff() {
  menu.forEach((item) => {
    DOMSelectors.menuitem.insertAdjacentHTML(
      "afterbegin",
      `<div class="menu-card">
              <h2>${item.name}</h2>
              <img class="menu-image" src="${item.image}">
              <p class="menu-price">$${item.price}</p>
              <p class="menu-description">${item.description}</p>
          </div>`
    );
  });
}
menustuff();
