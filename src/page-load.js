import foodImage from "./img/food_header.jpg"

export const loadHomepage = function() {
    const content = document.querySelector("#content");

    const headline = document.createElement("h1");
    headline.textContent = "Calippo's!";

    const p = document.createElement("p");
    p.textContent = "It is food. It is Italian. It is good!";

    const image = document.createElement("img");
    image.src = foodImage;

    content.appendChild(headline);
    content.appendChild(p);
    content.appendChild(image);
}