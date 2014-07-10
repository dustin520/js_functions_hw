// ##isPrime(num)
// Create a function to return `true` or `false` if a number passed 
// in a prime number.


var isPrime = function(num) { 
	for (var i = 2; i < num; i++) { 
		if (num % i === 0) {
			console.log('Not Prime'); 
			return false;
		}else {
			// console.log('Prime');
			// return true;
		};
	};console.log('Prime');
			return true;

};

console.log(isPrime(25));
console.log(isPrime(9));
console.log(isPrime(5));



// // online method
// var isPrime = function(num) {
//     if(num < 2) return false;
//     for (var i = 2; i < num; i++) {
//         if(num%i==0)
//             return false;
//     }
//     return true;
// }