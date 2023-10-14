class PetrolCar extends Car{
    constructor(oktanNum, kmPrL){
        this.oktanNum = oktanNum;
        this.kmPrL = kmPrL;
        super(this.regNr,this.brand,this.model,this.year,this.numOfDoors)
    }

    calculateDanishGreenFee(){
        let price;

        if(this.kmPrL >= 20 && this.kmPrL < 50){
            price = 330;
        } else if(this.kmPrL >= 15 && this.kmPrL < 20){
            price = 1050;
        }else if(this.kmPrL >= 10 && this.kmPrL < 15){
            price = 2340;
        } else if(this.kmPrL >= 5 && this.kmPrL < 10){
            price = 5500;
        }else{
            price = 10470;
        }
        console.log('the price for the petrol car is: ', price);
        return price;
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