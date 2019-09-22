// Configuring the database
const dbConfig = require('../config/database.config.js');
const mongoose = require('mongoose');
var assert = require('assert');

mongoose.Promise = global.Promise;

// Connecting to the database



describe('connection and then testing connection', function() {
    before(function(done) {
        mongoose.connect(dbConfig.url,{useNewUrlParser:true}, function(error) {
            if (error) console.error('Error while connecting:\n%\n', error);
            console.log('connected');
            done(error);
        });
    });
    it('should be 1 if connected', function(){
        // mongoose.connection.readyState equls 1 when connected
        assert.equal(1, mongoose.connection.readyState);
      });
});


