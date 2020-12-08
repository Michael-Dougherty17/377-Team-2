//mobile dropdown
const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");

burgerIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
});

async function main() {
  try {
    //load bus data

    const busData = "https://api.umd.io/v1/bus/routes";
    const data = await fetch(busData);
    const buses = await data.json();
    console.log(buses);
    //generate li, inject into select element
    //name attrib and value for each
    //labs 5+6
    //use button to fire event or submission event lisener on form
  } 
  
  catch (error) {
    console.log(error);
  }
}

window.onload = main;
