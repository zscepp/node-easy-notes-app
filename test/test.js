// Configuring the database
const dbConfig = require('../config/database.config.js');
const mongoose = require('mongoose');

const assert = require('assert');
const expect = require('chai').expect;
const request = require('request');

const fetch = require('node-fetch');




mongoose.Promise = global.Promise;

// Connecting to the database

// Test after connection

describe('connection and then testing connection', function() {
    this.beforeAll(function(done) {


       mongoose.connect(dbConfig.url,{useNewUrlParser:true, useUnifiedTopology: true}, function(error) {

            if (error) console.error('Error while connecting:\n%\n', error);
            
            done(error);
        });
   

});
    it('connected to database', function(){
        // mongoose.connection.readyState equls 1 when connected
        assert.equal(1, mongoose.connection.readyState);
    });
    it('Main page status', function(done) {
        request('http://localhost:2000/' , function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it('Notes page status', function(done) {

        request('http://localhost:2000/notes' , function(error, response, body) {

            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it('testing Fetch for status', function(done){
        fetch('http://localhost:2000/')
            .then(res => {
                console.log('status code: ' + res.status);
                expect(res.statusText).to.equal('OK');
                done();
            })
            .catch(done);
        
    });
});
