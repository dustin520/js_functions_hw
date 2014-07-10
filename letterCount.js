// ##letterCount(word)

// Write a function that takes a string that finds out how many times a 
// character occurs.  For example, the string "apple" would print the following:

// ```
// a - 1
// p - 2
// l - 1
// e - 1
// ```

// __BONUS__: Make sure that lower case letters and upper case letters count 
// for the same character.  Also, ignore spaces and punctuation.

var disp = {}; 

var result = function(string){
	for (var i = 0; i < string.length; i++) { 
		var count = 0; 
		for (var j = 0; j < string.length; j++){
			if (string[i] === string[j]){
				count += 1;
				disp[string[i]] = count; 
				//return count; 

			};
			count = 0; 
		};
		
	};
};

console.log(result("apple")); 


// // Randall Method
// var obj ={};
// var count = 0;

// var appear = function(word) {

// for(var i = 0; i < word.length; i++){

// //check for loop is see if the letter appeared
// for(var j = 0; j <word.length; j++) {
// if (word[i] === word[j]) {
// count++
// }
// }
// count = 0;
// }
// console.log(count["letter"]+" - "+count["letter"]["num"]);
// }

// // David Method
// var word = "sassafrass"
// var myObj = {};
// var count = 0;


// for (var i=0; i<word.length; i++) {

// for(var v=0; v<word.length; v++){
// if (word[i] === word[v]) {
// count++;
// myObj[word[i]] = count;
// }
// }
// count = 0;
// }
// console.log(myObj);

