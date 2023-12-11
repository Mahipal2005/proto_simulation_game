function Vehicle(brand,model,speed,fuelType){
    this.brand=brand;
    this.model=model;
    this.speed=speed;
    this.fuelType=fuelType
}

Vehicle.prototype.accelerate=function(s){
   
            console.log(s=s+1)

}
Vehicle.prototype.brake=function(s){
    console.log(s=s-1)
}
Vehicle.prototype.refuel=function(){
    console.log(" the vehicle is full refueling.")
}


function Car(brand, model, speed, fuelType, numberOfWheels){
    Vehicle.call(this, brand, model, speed, fuelType);
        this.numberOfWheels = numberOfWheels;
}
Car.prototype.honk=function(){
    console.log("Honk! Honk!");
}

function Aeroplain(brand, model, speed, fuelType,numberOfEngines,LandingGear){
    Vehicle.call(this, brand, model, speed, fuelType)
    this.numberOfEngines=numberOfEngines;
    this.LandingGear=LandingGear;
}
Aeroplain.prototype.takeoff=function(){
    console.log("airplane is taking off")
}
let mycar=new Car("Tata","Nexon",50,"petrol",4)

let myaeroplane=new Aeroplain("india","air","500","disel",2,5)
console.log(myaeroplane)
