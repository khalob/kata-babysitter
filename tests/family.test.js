const Family = require('../class/family');

//Test Family constructor
test('Family has proper name set on construction', () => {
	var familyA = new Family('Smith');
	expect(familyA.name).toBe('Smith');
});

//Test Family.setHourlyPay
test('5:00PM to 6:00PM is an array of length 1, with proper payrate set', () => {
	var familyA = new Family('Smith');
	familyA.setHourlyPay('5:00PM', '6:00PM', 15);
	expect(familyA.hourlyPay).toEqual([15]);
});

test('7:00PM to 12:00AM is an array of length 5, with proper payrate set', () => {
	var familyA = new Family('Smith');
	familyA.setHourlyPay('7:00PM', '12:00AM', 15);
	expect(familyA.hourlyPay).toEqual([undefined, undefined, 15, 15, 15, 15, 15]);
});

test('5:00PM to 4:00AM is an array of length 1, with proper payrate set', () => {
	var familyA = new Family('Smith');
	familyA.setHourlyPay('5:00PM', '4:00AM', 15);
	expect(familyA.hourlyPay).toEqual([15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15]);
});

//Test Family.getPayRateOfHour
var familyA = new Family('Smith');
familyA.setHourlyPay('5:00PM', '6:00PM', 15);
familyA.setHourlyPay('6:00PM', '7:00PM', 20);
familyA.setHourlyPay('7:00PM', '8:00PM', 25);

test('0th index of of hourlyPay is 15', () => {
	expect(familyA.getPayRateOfHour(0)).toBe(15);
});

test('1st index of of hourlyPay is 20', () => {
	expect(familyA.getPayRateOfHour(1)).toBe(20);
});

test('2nd index of of hourlyPay is 25', () => {
	expect(familyA.getPayRateOfHour(2)).toBe(25);
});

