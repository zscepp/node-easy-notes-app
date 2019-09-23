// Configuring the database
const dbConfig = require('../config/database.config.js');
const mongoose = require('mongoose');
var assert = require('assert');
var expect = require('chai').expect;
var request = require('request');

mongoose.Promise = global.Promise;

// Connecting to the database

// Test after connection

describe('connection and then testing connection', function() {
    this.beforeAll(function(done) {
        mongoose.connect(dbConfig.url,{useNewUrlParser:true}, function(error) {
            if (error) console.error('Error while connecting:\n%\n', error);
            console.log('connected');
            done(error);
        });
    });
    it('connected to database', function(){
        // mongoose.connection.readyState equls 1 when connected
        assert.equal(1, mongoose.connection.readyState);
    });
    it('Main page status', function(done) {
        request('http://localhost:3000' , function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it('Notes page status', function(done) {
        request('http://localhost:3000/notes' , function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});


