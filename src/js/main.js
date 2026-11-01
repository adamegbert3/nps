// import { getParkData, parkInfoLinks } from "./parkService.mjs";
// import "../css/style.css";
// import "../css/home.css";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import {getParkData, getInfoLinks} from "./parkService.mjs";



function setParkIntro(data) {
  document.querySelector(".intro").innerHTML = `<h1>${data.fullName}</h1><p>${data.description}</p>`;
}



function setParkInfo(data) {
const buildCardsHTML = data.map(mediaCardTemplate)
document.querySelector(".info").innerHTML = buildCardsHTML.join("");
}

// setParkInfo(parkInfoLinks);

async function init() {
    const parkData = await getParkData();
    setHeaderFooter(parkData);
    setParkIntro(parkData);
    const links = getInfoLinks(parkData.images)
    setParkInfo(links)
}


function enableNavigation() {
  document.querySelector(".global-nav_toggle").addEventListener("click", (ev) => {
    let target = ev.target;
    const show = document.querySelector(".global-nav")
    show.classList.toggle("show");

    if (target.tagName !== "BUTTON") {
      target = target.closest("button");
    }
    
    if (show.classList.contains("show")) {
      target.setAttribute("aria-expanded", "true");
    } else {
      target.setAttribute("aria-expanded", "false");
    }
  })
}




init();
enableNavigation();