class Vehicle{
    constructor(name, type, price){
        this.name = name,
        this.type = type,
        this.price = price
    }
    getDetails(){
        return ('the name of the bike: '+ this.name)
    }
}
class Car extends Vehicle{
    constructor(name, fuel){
        super(name);
        this.fuel = fuel;
    }
    getDetails(){
        return (`${super.getDetails()},fuel type : ${this.fuel}`);
    }
}
let car1 = new Car('kia','petrol');
console.log(car1.getDetails());

