const unloadedMap = document.querySelector('.map__canvas--unloaded')

unloadedMap.classList.remove('map__canvas--unloaded')

const map = L.map('map-canvas')
  .setView ([59.96840, 30.31740], 19);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [38, 50],
});

const mainPinMarker = L.marker(
  {
    lat: 59.96830,
    lng: 30.31763,
  },
  {
    draggable: false,
    icon: mainPinIcon,
  }
);

mainPinMarker.addTo(map);
