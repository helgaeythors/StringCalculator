// calculator.js
function add (numbers){
	if(numbers == "") // empty string
		return 0;

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