// ##sillySum(arr)
// Write a function that takes an array of numbers, and returns 
// the sum of each number multiplied by its index. 

// `count += (number * index)`

/* Pseudo
	parameter = arry nums
	sum of num * index
*/

// Dustin Method
var arr =[1, 2, 3, 4],
	sum = 0;

var sillySum = function(array) { 
	for (var i = 0; i < array.length; i++) { 
		var product = array[i] * i;
		sum += product; 
	};
	return sum; 
};

console.log(sillySum(arr));


// // Randalls Method

// var count = 0;
// var array = [1,2,3]

// var sillySum = function (array) {
//     for(var i = 0; i < array.length; i++) {
//         count +=  (array[i]*i);
// }
// return count;
// }

// console.log(sillySum(array))



// // Joes Method
// var newArr=[];
// var sillySum = function(arr){

// for(i=0;i<arr.length;i++){
// newArr.push(arr[i]* i);
// }
// return newArr;
// }
// console.log(sillySum([1,2,3,4,5]));
