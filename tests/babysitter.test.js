const Babysitter = require('../class/babysitter');
const Family = require('../class/family');

//Test Babysitter constructor
test('Babysitter has proper name set on construction', () => {
	var babysitterA = new Babysitter('Sam');
	expect(babysitterA.name).toBe('Sam');
});

//Family A pays $15 per hour before 11pm, and $20 per hour the rest of the night
var familyA = new Family('Smith');
familyA.setHourlyPay('5:00PM', '11:00PM', 15);
familyA.setHourlyPay('11:00PM', '4:00AM', 20);

//Family B pays $12 per hour before 10pm, $8 between 10 and 12, and $16 the rest of the night
var familyB = new Family('Cognata');
familyB.setHourlyPay('5:00PM', '10:00PM', 12);
familyB.setHourlyPay('10:00PM', '12:00AM', 8);
familyB.setHourlyPay('12:00AM', '4:00AM', 16);

//Family C pays $21 per hour before 9pm, then $15 the rest of the night
var familyC = new Family('Robinson');
familyC.setHourlyPay('5:00PM', '9:00PM', 21);
familyC.setHourlyPay('9:00PM', '4:00AM', 15);

//Test Babysitter.calculatePay
test('(5:00PM to 4:00AM) Full night shift is calculated correctly', () => {
	var babysitterA = new Babysitter('Sam');
	expect(babysitterA.calculatePay('5:00PM','4:00AM', familyA)).toEqual(190);
	expect(babysitterA.calculatePay('5:00PM','4:00AM', familyB)).toEqual(140);
	expect(babysitterA.calculatePay('5:00PM','4:00AM', familyC)).toEqual(189);
});

test('(11:00PM to 3:00AM) Partial night shift is calculated correctly', () => {
	var babysitterA = new Babysitter('Sam');
	expect(babysitterA.calculatePay('11:00PM','3:00AM', familyA)).toEqual(80);
	expect(babysitterA.calculatePay('11:00PM','3:00AM', familyB)).toEqual(56);
	expect(babysitterA.calculatePay('11:00PM','3:00AM', familyC)).toEqual(60);
});
