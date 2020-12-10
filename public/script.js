//mobile dropdown
const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");
const form = document.querySelector(".routeInfo");
let startInputID = null;
let endInputID = null;

burgerIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
});



async function main() {
  try {
    //load bus data
    const routeData = "https://api.umd.io/v1/bus/routes";
    const data = await fetch(routeData);
    const routes = await data.json();
    console.log(routes);

    const stopData = "https://api.umd.io/v1/bus/stops";
    const dataTwo = await fetch(stopData);
    const stopArray = await dataTwo.json();

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = $(event.target).serializeArray();
      const startInput = formData[0].value;
      const endInput = formData[1].value;
      
      for (let j = 0; j < stopArray.length; j++) {

        if (startInput == stopArray[j].title) {
          startInputID = stopArray[j].stop_id;
        }

        if (endInput == stopArray[j].title) {
          endInputID = stopArray[j].stop_id;
        }
      }

      console.log(startInputID);
    })

    for (let i = 0; i < routes.length; i++) {

      const routeIDCall = routes[i].route_id;
      const routeData = `https://api.umd.io/v1/bus/routes/${routeIDCall}`;
      const dataThree = await fetch(routeData);
      const useableRouteData = await dataThree.json();
      let stopIDArray = useableRouteData[0].stops;
      console.log(stopIDArray);
      //I have the array of stops now I need to see if the stop_id matches the starting and ending stop id and if it does I can
      //call the api with the route id and take the stop id to get estimated arrival time
      
    }
  } 
  
  catch (error) {
    console.log(error);
  }
}

window.onload = main;