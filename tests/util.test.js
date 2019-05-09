const Util = require('../class/util');

//Test Util.parseTimeToNumberValue
test('Starts no earlier than 5:00PM', () => {
	expect(function () {
		Util.parseTimeToNumberValue('4:00PM')}
	).toThrowError('Cannot use a time before 5:00PM.');
});

test('Leaves no later than 4:00AM', () => {
	expect(function () {
		Util.parseTimeToNumberValue('5:00AM')
	}).toThrowError('Cannot use a time after 4:00AM.');
});

test('Time parameter must be a String type', () => {
	expect(function () {
		Util.parseTimeToNumberValue(4)
	}).toThrowError('Invalid time given, must be a String object in HH:MMAA format (e.g. 11:00PM).');
});

test('Time parameter must follow HH:MMAA format', () => {
	expect(function () {
		Util.parseTimeToNumberValue('4pm')
	}).toThrowError('Invalid time given, must be a String object in HH:MMAA format (e.g. 11:00PM).');
});

test('5:00PM to 4:00AM matches 0 to 11', () => {
	expect(Util.parseTimeToNumberValue('5:00PM')).toBe(0);
	expect(Util.parseTimeToNumberValue('6:00PM')).toBe(1);
	expect(Util.parseTimeToNumberValue('7:00PM')).toBe(2);
	expect(Util.parseTimeToNumberValue('8:00PM')).toBe(3);
	expect(Util.parseTimeToNumberValue('9:00PM')).toBe(4);
	expect(Util.parseTimeToNumberValue('10:00PM')).toBe(5);
	expect(Util.parseTimeToNumberValue('11:00PM')).toBe(6);
	expect(Util.parseTimeToNumberValue('12:00AM')).toBe(7);
	expect(Util.parseTimeToNumberValue('1:00AM')).toBe(8);
	expect(Util.parseTimeToNumberValue('2:00AM')).toBe(9);
	expect(Util.parseTimeToNumberValue('3:00AM')).toBe(10);
	expect(Util.parseTimeToNumberValue('4:00AM')).toBe(11);
});

test('Gets paid for full hours (no fractional hours)', () => {
	expect(function () {
		Util.parseTimeToNumberValue('1:25AM')
	}).toThrowError('Cannot use fractional hours.');
});

//Test Util.getTimeRangeValues
test('Start time must come before end time', () => {
	expect(function () {
		Util.getTimeRangeValues('1:00AM', '12:00AM')
	}).toThrowError('End time given was before start time given.');
});
