const Family = require('../class/family');

//Test Family constructor
test('Family has proper name set on construction', () => {
	var familyA = new Family('Smith');
	expect(familyA.name).toBe('Smith');
});


