//mobile dropdown
const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");

burgerIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
});

async function main() {
  try {
    //load bus data
    const busData = "https://api.umd.io/v1/bus/stops";
    const data = await fetch(busData);
    const buses = await data.json();
    //console.log(buses);
    for (let i = 0; i < buses.length; i++) {

      //console.log(buses[i].title)

      if(buses[i].title == "La Plata Hall"){
        //console.log(buses[i].stop_id);
        let results = buses[i].stop_id;
        console.log(results);
        const arrivalTime = `https://api.umd.io/v1/bus/stops/${results}`;
        const dataTwo = await fetch(arrivalTime);
        const arrival = await dataTwo.json();
        console.log(arrival);
      }

      function testFunction() {

        const startInput = document.getElementById('start').value;
        const endInput = document.getElementById('end').value;
        console.log(startInput);

        //how to send data to backend and work with it and then send data back to front end so I can change lines 59 and 61 with said data
      }

      //lines 105+ in lab 5 to select user input and use that as arguement instead of hard coding line 20

      


      

    }
    //generate li, inject into select element
    //name attrib and value for each
    //labs 5+6
    //use button to fire event or submission event lisener on form
    //fetch stop list from api, then store the stops in a "thing" so that we 
    //can search via title(since api doesnt allow for search by title) ourselves and then get the stop id and return that to the api to
    //get estimated arrival times
  } 
  
  catch (error) {
    console.log(error);
  }
}
window.onload = main;