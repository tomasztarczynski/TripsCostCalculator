'use strict';

var chai = require('chai');
var expect = chai.expect;

var TripTokenParser = require('./../src/trip-token-parser');

describe('TripTokenParser', function () {
    it('Should return empty array if text is empty', function () {
        var text = '';
        var tripTokenParser = new TripTokenParser();

        var trips = tripTokenParser.parse(text);

        expect(trips.length).to.equal(0);
    })

    it('Should return object with correct properties', function () {
        var text = 'J!T#R';
        var tripTokenParser = new TripTokenParser();

        var trips = tripTokenParser.parse(text);

        expect(trips.length).to.equal(1);
        var trip = trips[0];     
        expect(trip).to.have.property('name');
        expect(trip).to.have.property('driver');
        expect(trip).to.have.property('passangers');
        expect(trip.passangers.length).to.equal(1);  
        var passanger = trip.passangers[0];
        expect(passanger).to.have.property('name');
        expect(passanger).to.have.property('divider');
    })

    it('Should return object properties with correct values', function () {
        var text = 'J!T#R';
        var tripTokenParser = new TripTokenParser();

        var trips = tripTokenParser.parse(text);

        expect(trips.length).to.equal(1);
        var trip = trips[0]; 
        expect(trip.name).to.equal('J');
        expect(trip.driver).to.equal('T');
        expect(trip.passangers.length).to.equal(1);   
        var passanger = trip.passangers[0];
        expect(passanger.name).to.equal('R');
        expect(passanger.divider).to.equal(1);
    })

    it('Should return correct array of passangers', function () {
        var text = 'J!T#P.R';
        var tripTokenParser = new TripTokenParser();

        var trips = tripTokenParser.parse(text);

        var trip = trips[0];
        expect(trip.passangers.length).to.equal(2);
        expect(trip.passangers[0].name).to.equal('P');
        expect(trip.passangers[1].name).to.equal('R');
    })

    it('Should return passanger with correct divider', function () {
        var text = 'J!T#R/2';
        var tripTokenParser = new TripTokenParser();

        var trips = tripTokenParser.parse(text);

        var trip = trips[0];
        var passanger = trip.passangers[0];
        expect(passanger.divider).to.equal(2);
    })

    it('Should return passangers with correct divider #1', function () {
        var text = 'J!T#P/2.R';
        var tripTokenParser = new TripTokenParser();

        var trips = tripTokenParser.parse(text);

        var trip = trips[0];
        expect(trip.passangers[0].divider).to.equal(2);
        expect(trip.passangers[1].divider).to.equal(1);
    })

    it('Should return passangers with correct divider #2', function () {
        var text = 'J!T#P.R/2';
        var tripTokenParser = new TripTokenParser();

        var trips = tripTokenParser.parse(text);

        var trip = trips[0];
        expect(trip.passangers[0].divider).to.equal(1);
        expect(trip.passangers[1].divider).to.equal(2);
    })

    it('Should return passangers with correct divider #3', function () {
        var text = 'J!T#P/2.R/2';
        var tripTokenParser = new TripTokenParser();

        var trips = tripTokenParser.parse(text);

        var trip = trips[0];
        expect(trip.passangers[0].divider).to.equal(2);
        expect(trip.passangers[1].divider).to.equal(2);
    })

    it('Should return correct complex trip name', function () {
        var text = 'JwCZ!T#R';
        var tripTokenParser = new TripTokenParser();

        var trips = tripTokenParser.parse(text);

        var trip = trips[0];
        expect(trip.name).to.equal('JwCZ');
    })

    it('Should return correct array of trips', function () {
        var text = 'J!T#R_A!P#R.T';
        var tripTokenParser = new TripTokenParser();

        var trips = tripTokenParser.parse(text);
        
        expect(trips.length).to.equal(2);
    })
});