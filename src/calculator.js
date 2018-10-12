// calculator.js
function add (numbers){
	if(numbers == "") // empty string
		return 0;

	if(numbers.includes("-")){ // throw exception if there is a negative number
		var negNumbers = numbers.match(/-\d+/g).map(Number);
		throw errorMessage(negNumbers, numbers.length);
	}

	if(numbers.includes(",") || numbers.includes("\n")){ // multiple numbers and different delimeters	
		var numberArr = numbers.split(/[,\n]/); // split on the default delimeters

		if(numbers.includes("//")){ // if the string includes a optional new delimeter

			var newDelimeter = numbers.match(/\/\/(.*)(?=\n)/)[1]; // get the new delimeter

			var tempArray = []; // initialize temporary array to use
			for (var i = 1; i < numberArr.length; i++) { 		 // split elements in the array on the
				tempArray[i] = numberArr[i].split(newDelimeter); // new delimeter and store in an array of arrays
			}				

			var numberArr = []; // empty numberArr to fill with the numbers
			for(var i = 1; i < tempArray.length; i++){
				numberArr = numberArr.concat(tempArray[i]); // concatinate the individual numbers into numberArr
			}
		}

		return sum(numberArr);
	}

	if(parseInt(numbers) > 1000) return 0; // a single number larger than 1000

	return parseInt(numbers); // only one number		
}

function sum(arr){ // takes in an array of numbers and returns the sum
	var total = 0;

	for(var i = 0; i < arr.length; i++){
		if(!(arr[i] > 1000)){
			total += parseInt(arr[i]);
		}
	}
	return total;
}

function errorMessage(arr, length){ // takes in array of negative numbers, length
	var errorMessage = "Negatives not allowed: "; //and returns error message as string

	for(var i = 0; i < length; i++){
		errorMessage += arr[i];
		if(i != length - 1) errorMessage += ",";
	}
	return errorMessage;
}

module.exports = add;