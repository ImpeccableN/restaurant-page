export const loadMenu = function() {
    const content = document.querySelector("#content");

    const headline = document.createElement("h1");
    const p = document.createElement("p");

    headline.textContent = "Recipe for Bolognese";
    p.textContent = "Das Wichtigste an einer Bolognese ist das sogenannte 'Soffritto: Dazu einen ordentlichen Klotz Butter (ca. 125 g) und ein wenig Olivenöl (damit die Butter nicht verbrennt) in eine Pfanne geben. Zwiebeln, Möhren und Staudensellerie putzen bzw. schälen, ganz fein hacken und auf möglichst niedriger Flamme langsam (mind. 30 Minuten) darin garen, bis das Gemüse schön glasig und weich geworden ist. Wichtig ist, dass das Gemüse nicht brät, sondern wirklich nur dünstet - also nicht zu heiß werden lassen!"

    content.appendChild(headline);
    content.appendChild(p);
}