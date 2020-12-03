const listOfMoves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];


let finalPosition = function(moves){
	let pos = [0, 0];
	for(let i of moves){
		switch(i){
			case 'north':
				pos[1]++;
				break;
			case 'south':
				pos[1]--;
				break;
			case 'east':
				pos[0]++;
				break;
			case 'west':
				pos[0]--;
				break;
			default:
				console.log("Not a move.");
				break;
		}
	}
	return pos;
};

console.log(finalPosition(listOfMoves));

