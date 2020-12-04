let concat = function(arr1, arr2){
	let concatenated = [];
	if(arr1.length > 0 && arr2.length > 0){
		concatenated = arr1;
		concatenated.concat(arr2);
	}
	else if(arr1.length > 0)
		concatenated = arr1;
	else if(arr2.length > 0)
		concatenated = arr2;
	
	return concatenated;
};

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);
