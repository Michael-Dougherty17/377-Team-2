# Terpbus

## README
Students at UMD have a hard time getting used to the bus schedule when
they first arrive. The bus apps offered to students are not intuitive
and do not provide users with everything they need like trip length
and arrival times. We hope to provide students with a simple and easy
solution to get where they need to be on time. This app will help them
manage schedules better and know when they will arrive at their
destinations.

### Heroku instance: https://quiet-hollows-47732.herokuapp.com/

### Target browsers: 
1. Google Chrome for Desktop and Mobile 
2. iOS Safari for Desktop and Mobile

### User Manual:
Enter your current stop location and your intended destination. Press start. The app will notify you how long it iwll take the bus to reach your current stop and then how long it will be until you reach your destination.

### Developer Manual: 
found below


## Developer Manual
### Installation
Clone the repository into GitHub Desktop. Install node.js from https://nodejs.org/en. Check that you have npm using the command "npm -v." Install npm with "npm install if you donot have npm.
### Starting the server
Run the application by starting npm with the command "npm start." Type localhost:3000 in your internet browser and the Terpbus index page will load if npm is running correctly.
### Endpoints
To get data from the API we used an async function and retrieved an array of bus routes and bus stops. Then using a PUT method we called the api again with user data from the form. Once the API has been called again using user input, we use a POST method to retrieve the final data from the API by calling it a third time with the data retrieved the second time. After the final data has been retrieved from the API we send it back to the front end to show the user what they need to know.

### Bugs and Future Development
The main bug with the application currently is displaying information to the user from the API. Our team was unable to solve this problem and that is the main compenonet hindering further development. Once this issue is resolved, developers can impplement planned future features such as a live map interface shows where a bus on a route is, the saving of frequently used routes, a scheduling system that can notify users when buses are arriving at stops, and an alert systemt aht notifies users of late buses.