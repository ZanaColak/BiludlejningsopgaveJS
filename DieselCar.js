class DieselCar extends Car{
    constructor(hasPartikelFilter, kmPrl){
        this.hasPartikelFilter = hasPartikelFilter;
        this.kmPrl = kmPrl;
        super(this.regNr,this.brand,this.model,this.year,this.numOfDoors)
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