class ElectricCar extends Car{
    constructor(kwh, maxKm, whPrkm){
        this.kwh = kwh;
        this.maxKm = maxKm;
        this.whPrkm = whPrkm;
        super(this.regNr,this.brand,this.model,this.year,this.numOfDoors)
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