// calculator.js
function add (numbers){
	if(numbers == "") // empty string
		return 0;

	if(numbers.includes("-")){ // throw exception if there is a negative number
		var negNumbers = numbers.match(/-\d+/g).map(Number);
		throw errorMessage(negNumbers, numbers.length);
	}

	if(numbers.includes("//")){ // different delimeter
		var newDelimeter = numbers.match(/\/\/(.*)(?=\s)/)[1];
		var numbersString = numbers.match(/(?<=\s)(.*)/)[1];
		var numberArr = numbersString.split(newDelimeter);
		return sum(numberArr);
	}

	if(numbers.includes("," || "\n")){ // multiple numbers and two delimeters
		var numberArr = numbers.split(/[,\n]/);
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