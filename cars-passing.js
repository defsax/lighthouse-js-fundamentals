const carsPassing = function(cars, speed){
  let updatedCars = cars;
  updatedCars.push({time: Date.now(), speed});
  return updatedCars;
}

const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
];

const speed = 38;

console.log(carsPassing(cars, speed));