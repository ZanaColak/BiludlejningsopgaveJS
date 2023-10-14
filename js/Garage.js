class Garage{
    constructor() {
        this.cars = [];
    }
    addCars(car){
        this.cars.push(car);
    }

    calculateDanishFeePark(){
        let price;
        for(let car of this.cars){
            price += car.calculateDanishFee();
        }
        console.log("The price is: ", price );
        return price;
    }

}