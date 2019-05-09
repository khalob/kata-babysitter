var Util = {
	/**
	 * Converts a 'HH:MMAA' formatted string into a whole number value, so we can easily compare and manipulate time values.
	 *
	 * @param givenTime {string} - The time string to convert (e.g. '12:00AM')
	 * @return result {number} - The number representing the givenTime's value
	 */
	parseTimeToNumberValue: function(givenTime) {
		if (isValidTimeFormat(givenTime)) {
			//break apart given time string
			var meridian = givenTime.slice(-2);
			var timeComponent = givenTime.slice(0, -2).trim().split(':');
			var hours = parseInt(timeComponent[0]);
			var minutes = parseInt(timeComponent[1]);
			var result = 0;
			
			if (minutes > 0){
				throw 'Cannot use fractional hours.';
			}
			
			//12AM has an 'AM' merdiian, but needs to be subtracted from to get the proper time value (7)
			if (meridian.toLowerCase() === 'am' && hours !== 12) {
				if (hours > 4) {
					throw 'Cannot use a time after 4:00AM.';
				} else {
					result = hours + 7;
				}
			} else {
				//Dont allow noon to slip through as a valid babysitting time
				if (hours < 5 || hours === 12 && meridian.toLowerCase() === 'pm') {
					throw 'Cannot use a time before 5:00PM.';
				} else {
					result = hours - 5;
				}
			}
			
			return result;
		}
		throw 'Invalid time given, must be a String object in HH:MMAA format (e.g. 11:00PM).'
	},
	/**
	 * Converts 'HH:MMAA' formatted strings into whole number values and returns them in an Object. Verifies times given are a proper range.
	 *
	 * @param startTime {string} - The start of the time range (e.g. '12:00AM')
	 * @param endTime {string} - The end of the time range (e.g. '4:00AM')
	 * @return range {Object} - Holds the startValue and endValue obtained from parsing and converting the time strings into a number value.
	 */
	getTimeRangeValues: function(startTime, endTime) {
		var range = {
			'startValue': this.parseTimeToNumberValue(startTime),
			'endValue': this.parseTimeToNumberValue(endTime)
		};
		
		if (range.endValue <  range.startValue) {
			throw 'End time given was before start time given.';
		}
		
		return range;
	}
};

/**
 * Determines if time string given matches the proper, readable format.
 *
 * @param givenTime {string} - The time string to verify (e.g. '12:00AM')
 * @return {boolean} - The result of validating if givenTime is a string in the proper format.
 */
function isValidTimeFormat(givenTime){
	var timeRegex = /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/;
	if (typeof(givenTime) === 'string' && givenTime.match(timeRegex)) {
		return true;
	}
	return false;
};

module.exports = Util;