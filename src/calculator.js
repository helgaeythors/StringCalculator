// calculator.js
function add (numbers){
	if(numbers == "") // empty string
		return 0;

	if(numbers.includes(",")){ // two numbers
		var numberArr = numbers.split(",");
		return parseInt(numberArr[0]) + parseInt(numberArr[1]);
	}

	return parseInt(numbers); // only one number
}

module.exports = add;