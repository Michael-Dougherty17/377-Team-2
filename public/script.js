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
    //load array of routes. this includes route id and route title
    const routeData = "https://api.umd.io/v1/bus/routes";
    const data = await fetch(routeData);
    const routes = await data.json();
    
    //load array of stops. this includes stop id and stop title
    const stopData = "https://api.umd.io/v1/bus/stops";
    const dataTwo = await fetch(stopData);
    const stopArray = await dataTwo.json();

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = $(event.target).serializeArray();
      const startInput = formData[0].value;
      const endInput = formData[1].value;
      noMoreThanOne = 0;
      //gets user input to the script so I can now utilize user input in the eventListener
      
      for (let j = 0; j < stopArray.length; j++) { //goes thru the array of stops and mathces the user input(stop title) to stop id

        if (startInput == stopArray[j].title) {
          startInputID = stopArray[j].stop_id;
        }

        if (endInput == stopArray[j].title) {
          endInputID = stopArray[j].stop_id;
        }
      }
      console.log(stopArray);
      //console.log(startInputID); 
      //console.log(routes);
      for (let i = 0; i < routes.length; i++) { //goes thru each element in the route array

        cashNow = 0;

        let routeIDCall = routes[i].route_id;
        let routeData = `https://api.umd.io/v1/bus/routes/${routeIDCall}`; //get the route id from i element and call the api again to 
        let dataThree = await fetch(routeData); //get the detailed version of i element. when called with a specific route, it returns an array of stops for that route
        let useableRouteData = await dataThree.json();
        let stopIDArray = useableRouteData[0].stops; //save array of stops for route i in here
        console.log(stopIDArray);
        console.log(routeIDCall);

        for (let n = 0; n < stopIDArray.length; n++) { //go thru that array of stops
          //cashNow++;

          if (stopIDArray[n] === startInputID) { //find out if the first user input is present in this array of stops
            cashNow++;
          }
          
          if (stopIDArray[n] === endInputID) {
            cashNow++;
          }

        }//if cashnow becomes 2 that means the user's start input and end input are present in route i
        
        if (noMoreThanOne === 0 && cashNow === 2) {

          noMoreThanOne = 1;
          myRoute = routeIDCall; //save route i's route id into this variable and then call api again with route id and stop id to get estimated arrival time
        }
      }

      console.log(myRoute);
      console.log(cashNow);
    })
  } 
  
  catch (error) {
    console.log(error);
  }
}
window.onload = main;