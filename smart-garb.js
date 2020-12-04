const smartGarbage = function(trash, bins){
	let garbage = {
		waste: bins.waste,
		recycling: bins.recycling,
		compost: bins.compost
	}
	
	switch(trash){
		case 'recycling':
			garbage.recycling++;
			break;
		case 'waste':
			garbage.waste++;
			break;
		case 'compost':
			garbage.compost++;
			break;
	}
	
	return garbage;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5}));

