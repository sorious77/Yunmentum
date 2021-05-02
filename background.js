const body = document.body;
const locationInfo = document.querySelector(".locationInfo");
let randomNum = 0;

const bg = [
  "https://images.unsplash.com/photo-1619382803627-a1d7b7218224?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2091&q=80",
  "https://images.unsplash.com/photo-1504306871584-5ad5f1295c52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
  "https://images.unsplash.com/photo-1495985812444-236d6a87bdd9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1537781378841-c0d7f8363136?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
];

const bgInfo = [
  "Maldives, Maldives",
  "Liwa, United Arab Emirates",
  "White cobbled driveway",
  "Arctic",
];

function initBG() {
  randomNum = Math.floor(Math.random() * 4);
  body.style.backgroundImage = `url(${bg[randomNum]})`;
  locationInfo.innerHTML = `<div><i class="fas fa-map-marker-alt"></i> ${bgInfo[randomNum]}</div>`;
}

initBG();
