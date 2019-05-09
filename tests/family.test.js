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


