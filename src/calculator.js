// calculator.js
function add (number){
	if(number == "")
		return 0;

	if(number.includes(",")){
		var numberArr = number.split(",");
		return parseInt(numberArr[0]) + parseInt(numberArr[1]);
	}

	return parseInt(number);
}

module.exports = add;