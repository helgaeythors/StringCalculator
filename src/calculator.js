// calculator.js
function add (numbers){
	if(numbers == "") // empty string
		return 0;

	if(numbers.includes("-")){ // throw exception if there is a negative number
		var negNumbers = numbers.match(/-\d+/g).map(Number);
		throw errorMessage(negNumbers, numbers.length);
	}

	if(numbers.includes("," || "\n")){ // multiple numbers and two delimeters
		var numberArr = numbers.split(/[,\n]/);
		return sum(numberArr);
	}

	return parseInt(numbers); // only one number		
}

function sum(arr){
	var total = 0;

	for(var i = 0; i < arr.length; i++){
		total += parseInt(arr[i]);
	}
	return total;	
}

function errorMessage(arr, length){
	var errorMessage = "Negatives not allowed: ";

	for(var i = 0; i < length; i++){
		errorMessage += arr[i];

		if(i != length - 1) errorMessage += ",";
	}
	return errorMessage;
}

module.exports = add;