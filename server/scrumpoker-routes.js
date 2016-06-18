/*global require,console*/
/*jslint node: true */
'use strict';

var domain = require('./scrumpoker-domain');

module.exports = function(router) {
	
	router.get('/scrumpoker', function (req, res) {
        domain.getAll(function (scrumpokers) {
			res.json(scrumpokers);
		});
	});

	router.post('/scrumpoker', function (req, res) {
		var scrumpoker = req.body;
		domain.createScrumPoker(scrumpoker, function (scrumpoker) {
			res.json(scrumpoker);
		});
	});

	router.get('/scrumpoker/:scrumpokerId', function (req, res) {
		var scrumpokerId = req.params.scrumpokerId;
        console.log('Loading scrumpoker with id '+scrumpokerId)

		domain.getScrumPoker(scrumpokerId, function (scrumpoker) {
			res.json(scrumpoker);
		});
	});

};
