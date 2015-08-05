// Rides

// Create a Child class that takes a height, name, and age.
// Create a Ride class that takes a minimum and maximum height.
// Create two instances of each.
// Write a function that takes a ride object and a child object as arguments and determines if the child is take enough for the ride (return true or false).

var Child = function (height, name, age){
  this.height = height;
  this.name = name;
  this.age = age;
};

var Ride = function (minHeight, maxHeight){
  this.minHeight = minHeight;
  this.maxHeight = maxHeight;
};

var susan = new Child(50, "Susan", 8);
var billy = new Child(56, "Billy", 9);

var wheel = new Ride(40, 80);
var coaster = new Ride(54, 80);

var isTallEnough = function(ride, child){
  if (child.height >= ride.minHeight) {
    return true;
  }
  else {
    return false;
  }
};

