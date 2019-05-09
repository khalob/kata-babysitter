const Babysitter = require('../class/babysitter');
const Family = require('../class/family');

//Test Babysitter constructor
test('Babysitter has proper name set on construction', () => {
	var babysitterA = new Babysitter('Sam');
	expect(babysitterA.name).toBe('Sam');
});

