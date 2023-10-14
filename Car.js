class Car{
constructor(regNr, brand, model, year, numOfDoors){
    this.regNr = regNr;
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.numOfDoors = numOfDoors
}
  get regNr() {
    return this._regNr;
  }

  get brand() {
    return this._brand;
  }

  get model() {
    return this._model;
  }

  get year() {
    return this._year;
  }

  get numOfDoors() {
    return this._numOfDoors;
  }

  set regNr(newRegNr) {
    this._regNr = newRegNr;
  }

  set brand(newBrand) {
    this._brand = newBrand;
  }

  set model(newModel) {
    this._model = newModel;
  }

  set year(newYear) {
    this._year = newYear;
  }

  set numOfDoors(newNumOfDoors) {
    this._numOfDoors = newNumOfDoors;
  }

  toString() {
    return `Car Info: 
      Registration Number: ${this.registrationNumber}
      Brand: ${this.brand}
      Model: ${this.model}
      Year: ${this.year}
      Number of Doors: ${this.numberOfDoors}`;
  }

}