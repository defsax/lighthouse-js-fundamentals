const isCitizen = true;
const age = 26;

if(isCitizen && age > 18){
  console.log("You are eligible to vote.");
}


const raining = true;
const cold = false;
const temperature = 1;

if(temperature < 0){
  console.log("Make sure you pick out a scarf!");
} else if(temperature < 15){
  console.log("Short sleeves won't cut it!");
} else{
  console.log("Short sleeves are fine.");
}

if(temperature < -40 || temperature > 40){
  console.log("Maybe going outside isn't such a great idea...");
}

if(raining){
  console.log("Don't forget your umbrella!")
}

if(!raining){
  console.log("Leave your umbrella at home!");
}


console.log("Now you're ready to go outside!");