export const loadAbout = function() {
    const content = document.querySelector("#content");

    const headline = document.createElement("h1");
    const p = document.createElement("p");

    headline.textContent = "About this Page";
    p.textContent = "It is nothing, really."
    
    content.appendChild(headline);
    content.appendChild(p);
}