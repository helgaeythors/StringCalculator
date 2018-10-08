// calculator.js
function add (numbers){
	if(numbers == "") // empty string
		return 0;

	if(numbers.includes("-")){ // throw exception if there is a negative number
		var negNumbers = numbers.match(/-\d+/g).map(Number);

		var errorMessage = "Negatives not allowed: ";

		for(var i = 0; i < numbers.length; i++){
			errorMessage += negNumbers[i];

			if(i != numbers.length - 1){
				errorMessage += ",";
			}
		}

		throw errorMessage;
	}

	if(numbers.includes("," || "\n")){ // multiple numbers and two delimeters
		var numberArr = numbers.split(/[,\n]/);

		var total = 0;
		for(var i = 0; i < numberArr.length; i++){
			total += parseInt(numberArr[i]);
		}
		return total;	
	}

	return parseInt(numbers); // only one number		
}

module.exports = add;