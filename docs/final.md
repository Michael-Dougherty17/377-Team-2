# TerpBus

### Team members: 
Shasvat Vyas, Michael Dougherty, Ulrich Boudie, Swapnil Goplani

### App Link:
https://quiet-hollows-47732.herokuapp.com/

### Information Problem:
New students at UMD have a hard time getting used to the bus schedule because the current apps are neither intuitive enough nor do they provide students with every thing they need, we aim to put in place a new bus app which will solve these issues.

### Stakeholders:
Newly admitted students into the University of Maryland and anyone else who is confused by the University bus system

### Data:
We are using data from the UMD.io bus API found at https://beta.umd.io/#tag/bus.

### Solution: 

Our strategy to approacht his problem was to make a simple app that displays only the information tehs tudetn needs to see. They want to know how long they ahve until a bus reaches theirs top and then how long it will be until that bus reaches their destination. This eliminates confusing dropdowns, picking a bus route, and picking a bus number that the NextBus app has.

### Technical system decision rationale:

We used Bulma to customize our HTML pages. We used the navbar feature to create a navigation bar at the top of the page. We also have a burger drop down menu for mobile screen sizes. For back-end programming, we used node.js. Data was passed from the API through our website structured in a JSON format which is fetched from the UMD.io API when the page loads. We used the column feature to create the CSS columns in our CSS for the destination and the route information sections. 

### Challenges:

Challenges faced and impact on final design: We have failed to get the bus data working on our app, which has made it unable to display the bus number, routes, and departures/arrival times.

### Future Work:

Next steps that we will take to further this project in the future are develop a live map interface to show students where exactly their bus is when they are using the app. This will allow the users to save their favorite routes. We will also create a scheduling system that notifies users when their favorite bus is arriving at their local stop but also notify them by sending alerts when their favorite buses are running late. 