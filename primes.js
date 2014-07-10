// ##primes(max)
// Using your `isPrime()` function, create a function `primes` that 
// will return an array of all prime numbers up to a certain amount.

var isPrime = function(num) { 
	for (var i = 2; i < num; i++) { 
		if (num % i === 0) { 
			return false;
		};
	};
	return true;
};

var listPrimes = []; 

var primes = function(max) { 
	for (var i = 0; i < max; i++) { 
		if (isPrime(i) == true){
			listPrimes.push(i);
		};
	};return listPrimes;
};
primes(20); 
console.log(listPrimes);


// // Randall method
// primesnum = [];

// var isPrime = function(num) {
//     if(num < 2) return false;  // needed to prevent 0, 1, showing up as prime
//     for (var i = 2; i < num; i++) {
//         if(num%i==0)
//             return false;
//     }
//     return true;
// }


// var primes = function(numMax) {
//     for(var i = 0; i<numMax; i++) {
// if(isPrime(i)) {
// primesnum.push(i);
// }
// }
    
//     return primesnum
// }
// console.log(primes(10));
