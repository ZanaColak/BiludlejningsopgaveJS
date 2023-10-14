class PetrolCar extends Car{
    constructor(oktanNum, kmPrL){
        this.oktanNum = oktanNum;
        this.kmPrL = kmPrL;
        super(this.regNr,this.brand,this.model,this.year,this.numOfDoors)
    }

  // Getter
  get oktanNum() {
    return this._oktanNum;
  }

  get kmPrL() {
    return this._kmPrL;
  }

  // Setter
  set oktanNum(newOktanNum) {
    this._oktanNum = newOktanNum;
  }

  set kmPrL(newKmPrL) {
    this._kmPrL = newKmPrL;
  }

  toString() {
    return `Petrol Car Info: 
      ${super.toString()} // Kald superklassens toString-metode
      Oktan Number: ${this._oktanNum}
      Km per Liter: ${this._kmPrL}`;
  }
}