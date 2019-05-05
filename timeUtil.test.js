const timeUtil = require('./timeUtil');

test('starts no earlier than 5:00PM', () => {
  expect(timeUtil.parseTimeToInteger('4:00PM')).toBe('Cannot use a time before 5:00PM');
});

test('leaves no later than 4:00AM', () => {
  expect(timeUtil.parseTimeToInteger('5:00AM')).toBe('Cannot use a time after 4:00AM');
});

test('time parameter must be a String type', () => {
  expect(timeUtil.parseTimeToInteger(4)).toBe('Invalid time given, must be a String object in HH:MMAA format (e.g. 11:00PM)');
});

test('time parameter must follow HH:MMAA format', () => {
  expect(timeUtil.parseTimeToInteger('4pm')).toBe('Invalid time given, must be a String object in HH:MMAA format (e.g. 11:00PM)');
});

test('time parameter is valid between 5:00PM - 4:00AM', () => {
  expect(timeUtil.parseTimeToInteger('1:00AM')).toBe(9);
});

test('gets paid for full hours (no fractional hours)', () => {
  expect(timeUtil.parseTimeToInteger('1:25AM')).toBe('Cannot use fractional hours');
});