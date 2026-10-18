import "../css/style.css";
import "../css/conditions.css";
import {getParkData, getParkAlerts, getVisitorCenterData } from "./parkService.mjs";
import { alertTemplate, visitorCenterTemplate } from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";

function setAlerts(alerts) {
    const alertsContainer = document.querySelector(".alerts > ul");
    alertsContainer.innerHTML = "";
    const html = alerts.map(alertTemplate);
    alertsContainer.insertAdjacentHTML("beforeend", html.join(""));
}


function setVisitorCenters(visitorCenters) {
    const visitorCenterList = document.querySelector(".visitor > details > ul");
    visitorCenterList.innerHTML = "";
    const html = visitorCenters.map(visitorCenterTemplate);
    visitorCenterList.insertAdjacentHTML("beforeend", html.join(""));
}

function setActivities(activities) {
    const activitiesList = document.querySelector(".activities > details > ul");
    activitiesList.innerHTML = "";
    const html = activities.map((activity) => `<li>${activity.name}</li>`);
    activitiesList.insertAdjacentHTML("beforeend", html.join(""));
}

async function init() {
    const parkData = await getParkData();
    const alerts = await getParkAlerts(parkData.parkCode)
    const visitorCenters = await getVisitorCenterData(parkData.parkCode)
    const activities = parkData.activities;
    setActivities(activities)
    setVisitorCenters(visitorCenters)
    setHeaderFooter(parkData);
    setAlerts(alerts)
}

init()