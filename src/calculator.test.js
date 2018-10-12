// calculator.test.js
const add = require('./calculator');

it("should return zero on an empty string", () => {
	expect(add("")).toBe(0);
});

it("should return the number when only one number is in the string", () => {
	expect(add("3")).toBe(3);
});

it("should return the sum of two numbers", () => {
	expect(add("1,2")).toBe(3);
});

it("should return the sum of multiple numbers", () => {
	expect(add("1,2,3,4")).toBe(10);
});

it("should return the sum of multiple numbers, new line character as delimeter", () => {
	expect(add("1\n2,3,4")).toBe(10);
});

test("exception thrown if any negative numbers are in the string, and show negative numbers", () => {
	function negativeNumbers(){
		add("-2\n-4,3,-5");
	}

	expect(negativeNumbers).toThrow("Negatives not allowed: -2,-4,-5");
});

it("should ignore a single number larger than 1000", () => {
	expect(add("1001")).toBe(0);
});

it("should ignore numbers larger than 1000", () => {
	expect(add("1001,2\n1")).toBe(3);
});

it("should handle optional delimeter", () => {
	expect(add("//;\n1;2;3")).toBe(6);
});

it("should handle optinal delimeter and default delimeters", () => {
	expect(add("//;%\n1\n2;%3,4")).toBe(10);
});