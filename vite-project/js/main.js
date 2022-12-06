import { menu } from "./menu";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const menuDiv = document.querySelector("#all");
display(menu);

document.querySelector("#all").addEventListener("click", function () {
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
  const chicken = menu.filter((item) => item.meat == "chicken");
  display(chicken);
});
document.querySelector("#vegetarian").addEventListener("click", function () {
  menuDiv.innerHTML = "";
  const pork = menu.filter((item) => item.meat.includes("pork"));
  display(pork);
});

document.querySelector("#light").addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList = ["light"];
  } else if (document.body.classList.contains("bleu")) {
    document.body.classList = ["light"];
  } else {
    document.body.classList = ["light"];
  }
});

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});
