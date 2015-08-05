// Miles

// Within a new file called miles.js:

// Create a Car class that takes the miles per gallon and gallons in a tank.
// Create a Route class that takes the total miles to the destination, the destination name, and location (city and state).
// Create two instances of each.
// Write a function that takes a car object and a route object as arguments and determines if the car has enough gas to make the entire route (return true or false).

var Car = function(mpg, galInTank){
  this.mpg = mpg;
  this.galInTank = galInTank;
};

var Route = function(totalMiles, destination, location){
  this.totalMiles = totalMiles;
  this.destination = destination;
  this.location = location;
};

var honda = new Car(30, 3);
var chevy = new Car(11, 3);

var highway = new Route(100, "DisneyLand", "Anaheim, CA");
var countryRoad = new Route(32, "Liquer Outlet", "Bumblef*ck, GA");

var willIGetThere = function(car, route){
  //multiply miles per gallon by miles in tank.
  var milesInTank = car.mpg * car.galInTank;
  if (milesInTank > route.totalMiles){
    return true;
  }
  else {
    return true;
  }
};

