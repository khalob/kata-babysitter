const timeUtil = require('./timeUtil');

test('time parameter must be a String type', () => {
  expect(timeUtil.parseTimeToInteger(4)).toBe('Invalid time given, must be a String object in HH:MMAA format (e.g. 11:00PM)');
});

test('time parameter must follow HH:MMAA format', () => {
  expect(timeUtil.parseTimeToInteger('4pm')).toBe('Invalid time given, must be a String object in HH:MMAA format (e.g. 11:00PM)');
});
