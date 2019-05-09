const Util = require('./Util');

/**
 * Holds the babysitter's name
 *
 * @param name {string} - Name of the babysitter, used for logging purposes.
 */
function Babysitter (name) {
	this.name = name;
};


module.exports = Babysitter;