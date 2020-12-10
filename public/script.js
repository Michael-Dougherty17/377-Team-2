const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");
const form = document.querySelector(".routeInfo");
let startInputID = null;
let endInputID = null;
let cashNow = 0;
let noMoreThanOne = 0;
let myRoute = "hello world";

burgerIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
});

async function main() {
  try {
    //load bus data
    const routeData = "https://api.umd.io/v1/bus/routes";
    const data = await fetch(routeData);
    const routes = await data.json();
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
      for (let i = 0; i < routes.length; i++) {

        cashNow = 0;

        const routeIDCall = routes[i].route_id;
        const routeData = `https://api.umd.io/v1/bus/routes/${routeIDCall}`;
        const dataThree = await fetch(routeData);
        const useableRouteData = await dataThree.json();
        let stopIDArray = useableRouteData[0].stops;

        for (let n = 0; n < stopIDArray.length; n++) {

          if (stopIDArray[n] == startInputID) {
            cashNow += 1;
          }
          
          if (stopIDArray[n] == endInputID) {
            cashNow += 1;
          }

        }
        
        if (noMoreThanOne == 0 && cashNow == 2) {

          noMoreThanOne = 1;
          myRoute = routeIDCall;
        }
      }

      console.log(myRoute);
    })
  } 
  
  catch (error) {
    console.log(error);
  }
}

window.onload = main;