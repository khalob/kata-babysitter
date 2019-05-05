
var timeUtil = {
	parseTimeToInteger: function(givenTime) {
		var timeRegex = /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/;
		if (typeof(givenTime) === 'string' && givenTime.match(timeRegex)) {
			//break apart given time string
			var meridian = givenTime.slice(-2);
			var timeComponent = givenTime.slice(0, -2).trim().split(':');
			var hours = parseInt(timeComponent[0]);
			var minutes = parseInt(timeComponent[1]);
			var result = 0;
			
			if (minutes > 0){
				return 'Cannot use fractional hours';
			}
			
			if (meridian.toLowerCase() === 'am') {
				if (hours > 4) {
					return 'Cannot use a time after 4:00AM';
				} else {
					result = hours + 8;
				}
			} else {
				if (hours < 5) {
					return 'Cannot use a time before 5:00PM';
				} else {
					result = hours - 4;
				}
			}
			
			return result;
		}
		return 'Invalid time given, must be a String object in HH:MMAA format (e.g. 11:00PM)'
	}
};

module.exports = timeUtil;