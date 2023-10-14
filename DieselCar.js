class DieselCar extends Car{
    constructor(hasPartikelFilter, kmPrl){
        this.hasPartikelFilter = hasPartikelFilter;
        this.kmPrl = kmPrl;
        super(this.regNr,this.brand,this.model,this.year,this.numOfDoors)
    }

    calculateDanishGreenFee(){
        let price;
        const partikelFilter = 1000;
        if(this.kmPrL >= 20 && this.kmPrL < 50){
            price = 130;
        } else if(this.kmPrL >= 15 && this.kmPrL < 20){
            price = 1390;
        }else if(this.kmPrL >= 10 && this.kmPrL < 15){
            price = 1850;
        } else if(this.kmPrL >= 5 && this.kmPrL < 10){
            price = 2770;
        }else{
            price = 15260;
        }
        if(!getHasPartikelFilter())
        console.log('the price for the diesel car is: ', price += partikelFilter);
        return price;
    }

    get hasPartikelFilter() {
        return this._hasPartikelFilter;
      }
    
      get kmPrl() {
        return this._kmPrl;
      }
    
      // Setter metoder for hasPartikelFilter og kmPrl
      set hasPartikelFilter(newHasPartikelFilter) {
        this._hasPartikelFilter = newHasPartikelFilter;
      }
    
      set kmPrl(newKmPrl) {
        this._kmPrl = newKmPrl;
      }

      toString() {
        return `Diesel Car Info: 
          ${super.toString()} // Kald superklassens toString-metode
          Particulate Filter: ${this._hasPartikelFilter ? 'Yes' : 'No'}
          Km per Liter: ${this._kmPrl}`;
      }
}