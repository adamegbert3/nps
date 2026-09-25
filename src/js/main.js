import { getParkData, parkInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

const parkData = getParkData();

function setParkIntro(data) {
  document.querySelector(".intro").innerHTML = `<h1>${data.fullName}</h1><p>${data.description}</p>`;
}

setHeaderFooter(parkData);

setParkIntro(parkData);

function setParkInfo(data) {
const buildCardsHTML = data.map(mediaCardTemplate)
document.querySelector(".info").innerHTML = buildCardsHTML.join("");
}

setParkInfo(parkInfoLinks);