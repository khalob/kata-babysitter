const Util = require('./Util');

/**
 * Holds the babysitter's name
 *
 * @param name {string} - Name of the babysitter, used for logging purposes.
 */
function Babysitter (name) {
	this.name = name;
};

/**
 * Calculate the total pay, given a start time, end time, and family.
 *
 * @param startTime {string} - The start of the time range (e.g. '12:00AM')
 * @param endTime {string} - The end of the time range (e.g. '4:00AM')
 * @param family {Family} - Family sat for. Holds payrate information.
 */
Babysitter.prototype.calculatePay = function (startTime, endTime, family) {
	var totalPay = 0;
	var range = Util.getTimeRangeValues(startTime, endTime);
	
	for (var hour = range.startValue; hour < range.endValue; hour++) {
		totalPay += family.getPayRateOfHour(hour);
	}
	
	return totalPay;
};

module.exports = Babysitter;