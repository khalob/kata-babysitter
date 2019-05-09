const Babysitter = require('./class/babysitter');
const Family = require('./class/family');

/**
 * Simulates the earnings for different nights of babysitting, based on start time, end time, and family sat for.
 *
 */
function simulateBabysitting() {
	try {
		var Sam = new Babysitter('Sam');
		
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
		
		//partial nights
		Sam.logPay('5:00PM', '12:00AM', familyA);
		Sam.logPay('9:00PM', '4:00AM', familyB);
		Sam.logPay('1:00AM', '3:00AM', familyC);
		
		//whole nights
		Sam.logPay('5:00PM', '4:00AM', familyA);
		Sam.logPay('5:00PM', '4:00AM', familyB);
		Sam.logPay('5:00PM', '4:00AM', familyC);
	} catch (exception) {
		console.error(exception);
		return exception;
	}
};

simulateBabysitting();