var db = require('mongoskin').db('mongodb://localhost:27017/scrumpoker');
var ObjectID = require('mongoskin').ObjectID;

exports.getAll = function (callback) {
    db.collection('scrumpoker').find().toArray(function(err, result) {
        if (err) throw err;
        callback(result);
    });
};

exports.createScrumPoker = function (scrumpoker, callback) {
    db.collection('scrumpoker').insert(scrumpoker, function(err) {
        if (err) throw err;
        console.log('Scrumpoker ' + scrumpoker._id + ' was inserted!');
        callback(scrumpoker);
    });
	
};

exports.getScrumPoker = function(scrumpokerId, callback) {
	db.collection('scrumpoker').findOne({ _id : ObjectID.createFromHexString(scrumpokerId) }, function(err, result) {
        if (err) throw err;
        callback(result);
    });
};