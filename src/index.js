import "./styles.css";
import { loadHomepage } from "./page-load";
import { loadMenu } from "./menu-load";
import { loadAbout } from "./about-load";

const content = document.querySelector("#content");
const home_button = document.querySelector("#home");
const menu_button = document.querySelector("#menu");
const about_button = document.querySelector("#about");

home_button.addEventListener("click", () => {
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
    loadHomepage();
});

menu_button.addEventListener("click", () => {
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
    loadMenu();
});

about_button.addEventListener("click", () => {
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
    loadAbout();
});


loadHomepage();