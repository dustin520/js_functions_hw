// ##merge(arr1, arr2)

// Write a function called ```merge```.  The function should take two 
// sorted arrays of numbers as input and return a merged array of the sorted 
// numbers from the input.  For example, if the input arrays 
// were `var arr1 = [3,6,11]; var arr2 = [2,4,5,8,9];`  Then the returned 
// array would be: `[2,3,4,5,6,8,9,11]`.


var arr1 = [3,6,11],
	arr2 = [2,4,5,8,9],
  	arr3 = [], 
	maxLength = arr1.length + arr2.length; 

var merge = function(first, second) { 
	for (var i = 0; i < maxLength; i++) { 
		if (arr1[0] < arr2[0]) { 
			arr3.push(arr1[0]);
		}else {
			arr3.push(arr2[0]); 
		};
	};
};

merge(arr1, arr2); 
arr3;
console.log(arr3); 



// // Aaron/Will Method 
// var arr1 = [3,6,11,12,23,34,46,76], arr2 = [2,4,5,8,9], arr3 = [];
// var maxleng = arr1.length + arr2.length

// var merge = function(arr1, arr2){
// for (var i = 0; i < maxleng; i++) {

// if (arr1.length === 0) {
// arr3.push(arr2.shift());
// }
// else if (arr2.length === 0) {
// arr3.push(arr1.shift());
// }
// else {
// if (arr1[0] < arr2[0]) {
// arr3.push(arr1[0]);
// arr1.shift(); 
// }
// else {
// arr3.push(arr2[0]);
// arr2.shift(); 
// }
// }


// }
// return arr3;

// }

// console.log(arr1);
// console.log(arr2);

// console.log(merge(arr1, arr2));
