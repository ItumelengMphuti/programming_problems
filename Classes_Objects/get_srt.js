class Car {
    #year
    #model
    constructor(model, year) {
      this.#model = model;
      this.#year = year;
    }
  
    get model() {
      return this.#model;
    }
  
    set model(newModel) {
      if (newModel.length > 0) {
        this.#model = newModel;
      } else {
        console.log("Model name cannot be empty!");
      }
    }
  }
  
  const myCar = new Car("Toyota", 2020);
  console.log(myCar.model); // "Toyota"
  
  myCar.model = "bmw";  // Setting a new model
  console.log(myCar.model); // "Honda"
  