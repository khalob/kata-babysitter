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

module.exports = Family;