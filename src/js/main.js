import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;



const tabName = document.querySelector("head").querySelector("title");
tabName.innerHTML = parkData.fullName;

const parkTitle = document.querySelector(".park-title");
parkTitle.innerHTML = parkInfoTemplate(parkData);

const heroImage = document.querySelector("#hero_img");
heroImage.src = parkData.images[0].url;
heroImage.alt = parkData.images[0].altText;


function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}