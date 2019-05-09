const Util = require('./Util');

/**
 * Holds family's name and payrate information, indexed by hour (5:00PM-6:00PM is index 0) 
 *
 * @param name {string} - Name of the family, used for logging purposes.
 */
function Family(name) {
	this.name = name;
	this.hourlyPay = []
};

/**
 * Sets the payrate of a given time range for this family.
 *
 * @param startTime {string} - The start of the time range (e.g. '12:00AM')
 * @param endTime {string} - The end of the time range (e.g. '4:00AM')
 * @param payRate {number} - The amount of money a babysitter will recieve during this time range.
 */
Family.prototype.setHourlyPay = function (startTime, endTime, payRate) {
	var range = Util.getTimeRangeValues(startTime, endTime);

	for (var i=range.startValue; i<range.endValue; i++) {
		this.hourlyPay[i] = payRate;
	}
};

/**
 * Gets the payrate of this family, per a given hour.
 *
 * @param hour {number} - Number value of the hour we want to get the payrate for (0, 1, 2..).
 * @return {number} - Payrate for the given hour.
 */
Family.prototype.getPayRateOfHour = function (hour) {
	return this.hourlyPay[hour];
};

module.exports = Family;