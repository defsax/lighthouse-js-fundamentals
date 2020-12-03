const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


let chooseStations = function(s){
  let goodStations = [];

  for(let i = 0; i < s.length; i++){
    if(s[i][1] >= 20){
    	if(s[i][2] === 'school' || s[i][2] === 'community centre'){
    		goodStations.push(s[i][0]);
    	}
		}
  }
  return goodStations;
}


chooseStations(stations);

