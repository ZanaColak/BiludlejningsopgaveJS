class ElectricCar extends Car{
    constructor(kwh, maxKm, whPrkm){
        this.kwh = kwh;
        this.maxKm = maxKm;
        this.whPrkm = whPrkm;
        super(this.regNr,this.brand,this.model,this.year,this.numOfDoors)
    }

    calculateDanishGreenFee(){
        let price;
        const whPrKm = getWhPrKm(); 
        const kmPrL = Math.round(100 / (whPrKm / 91.25) + 0.05);
        
        if(kmPrL >= 20 && kmPrL < 50){
            price = 330;
        } else if(kmPrL >= 15 && kmPrL < 20){
            price = 1050;
        }else if(kmPrLL >= 10 && kmPrL < 15){
            price = 2340;
        } else if(kmPrL >= 5 && kmPrL < 10){
            price = 5500;
        }else{
            price = 10470;
        }
        console.log('the price for the electric car is: ', price);
        return price;
    }

    get kwh() {
        return this._kwh;
      }
    
      get maxKm() {
        return this._maxKm;
      }
    
      get whPrkm() {
        return this._whPrkm;
      }
    
      // Setter metoder for kwh, maxKm og whPrkm
      set kwh(newKwh) {
        this._kwh = newKwh;
      }
    
      set maxKm(newMaxKm) {
        this._maxKm = newMaxKm;
      }
    
      set whPrkm(newWhPrkm) {
        this._whPrkm = newWhPrkm;
      }

      toString() {
        return `Electric Car Info: 
          ${super.toString()} // Kald superklassens toString-metode
          Battery Capacity: ${this._kwh} kWh
          Max Range: ${this._maxKm} km
          Watt-hours per Kilometer: ${this._whPrkm} Wh/km`;
      }
    
}