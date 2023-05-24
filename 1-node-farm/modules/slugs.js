const slugify = require('slugify');

module.exports = element => {
	return slugify(element, { lower: true });
};
