// All OOPs Concept in One Program

class Vehicle {
  // Object Literals
  constructor(make, model) {
    this._make = make;
    this._model = model;
  }

  getMake() {
    // Encapsulation
    return this._make;
  }

  getModel() {
    return this._model;
  }

  startEngine() {
    console.log("Engine started.");
  }

  drive() {
    // Abstraction
    throw new Error("drive() method must be implemented in child classes.");
  }
}

class Jet extends Vehicle {
  // Inheritance
  constructor(make, model) {
    super(make, model);
  }

  drive() {
    console.log("Conguratulations!!!");
  }
}

class Car extends Vehicle {
  // Inheritance
  constructor(make, model) {
    super(make, model);
  }

  drive() {
    console.log("Conguratulations!!!");
  }
}

class Motorcycle extends Vehicle {
  // Inheritance
  constructor(make, model) {
    super(make, model);
  }

  drive() {
    console.log("Conguratulations!!!");
  }
}

var welcome = alert("Welcome TO FIRST CHOICE"); // Alert function
welcome;

var database = [
  // Database
  {
    vehicle: "AirBus",
    model: "A1170",
    amount: "$50",
  },
  {
    vehicle: "Benz",
    model: "B3489",
    amount: "$30",
  },
  {
    vehicle: "Harily Davidson",
    model: "H207",
    amount: "10",
  },
];

var Budget = Number(prompt("Enter Your Budget $")); // prompt functionn

var jetFunnction = () => {
  const jet = new Jet(database[0].vehicle, database[0].model);
  console.log(`Make: ${jet.getMake()} `);
  console.log(`Model: ${jet.getModel()}`);
  jet.startEngine();
  jet.drive();
};

var carFunction = () => {
  const car = new Car(database[1].vehicle, database[1].model);
  console.log(`Make: ${car.getMake()}`);
  console.log(`Model: ${car.getModel()}`);
  car.startEngine();
  car.drive();
};

var motorcycleFunction = () => {
  const motorcycle = new Motorcycle(database[2].vehicle, database[2].model);
  console.log(`Make: ${motorcycle.getMake()}`);
  console.log(`Model: ${motorcycle.getModel()}`);
  motorcycle.startEngine();
  motorcycle.drive();
};

if (Budget >= 50) {
  jetFunnction();
} else if (Budget >= 30) {
  carFunction();
} else if (Budget >= 10) {
  motorcycleFunction();
} else {
  alert("Better Luck Next Time!!!");
}
