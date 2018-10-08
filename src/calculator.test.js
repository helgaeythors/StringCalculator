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