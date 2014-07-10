// ##numSquare(max)
// Create a function called `numSquare` that will return an array of 
// all perfect square numbers up to, but not exceeding a max number.

/* Pseudo
	function of max number
	loop through all numbers under max
	check with conditionals perfect squares less than
	return in an array, push numbers in 
*/

var perfSq = []; 
  
var numSquare = function(maxNumber) { 
	for (var i = 0; i <= maxNumber; i++) {
		if (Math.pow(i,.5) % 1 === 0){
			perfSq.push(i); 
		};
	};return perfSq; 

};
numSquare(200); 
console.log(perfSq);
