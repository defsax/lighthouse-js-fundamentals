let lastIndexOf = function(arr, val){
	let lastIndex = -1;
	for(let i = 0; i < arr.length; i++){
		if(val === arr[i])
			lastIndex = i;
	}
	return lastIndex;
};

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);



console.log("\n");

let range = function(start, end, step){
	let result = [];
	if(start === undefined ||
		end === undefined ||
		step === undefined){
		return result;
	} else if(start > end) {
		return result;
	} else if(step <= 0) {
		return result;
	}
	
	for(let i = start; i <= end; i += step){
		result.push(i);
	}
	return result;
};

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
