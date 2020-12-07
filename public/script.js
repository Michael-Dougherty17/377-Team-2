//mobile dropdown
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
})

//load bus data
const busData = "https://api.umd.io/v1/bus/routes";

const buses = [];

fetch(busData)
    .then((blob) => blob.json())
    .then((data) => buses.push(...data));

