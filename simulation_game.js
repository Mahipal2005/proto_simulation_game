function Vehicle(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;
}

Vehicle.prototype.accelerate = function () {
    this.speed++;
};

Vehicle.prototype.brake = function () {
    this.speed--;
};

Vehicle.prototype.refuel = function () {
    console.log("The vehicle is fully refueled.");
};

function Car(brand, model, speed, fuelType, numberOfWheels) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfWheels = numberOfWheels;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.honk = function () {
    console.log("Honk! Honk!");
};

function Aeroplane(brand, model, speed, fuelType, numberOfEngines, landingGear) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfEngines = numberOfEngines;
    this.landingGear = landingGear;
}

Aeroplane.prototype = Object.create(Vehicle.prototype);
Aeroplane.prototype.constructor = Aeroplane;

Aeroplane.prototype.takeoff = function () {
    console.log("Airplane is taking off");
};

let mycar = new Car("Tata", "Nexon", 50, "petrol", 4);

let myaeroplane = new Aeroplane("India", "Air", 500, "diesel", 2, 5);
console.log(myaeroplane);
