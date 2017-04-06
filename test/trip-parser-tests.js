'use strict';

var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

var TripParser = require('./../src/trip-parser');

describe('TripParser', function () {
    function createTripRowParserStub (date, trips) {
        return { 
            parse: function () { 
                return { 
                    date: date || new Date(2010, 10, 10, 10, 10, 10, 10), 
                    trips: trips || []
                };
            }
        };
    }

    it('Should return no trips', function () {
        var tripParser = new TripParser(createTripRowParserStub());

        var parsed = tripParser.parse(null);

        expect(parsed.length).to.equal(0);
    })

    it('Should return one trip', function () {
        var tripParser = new TripParser(createTripRowParserStub());

        var parsed = tripParser.parse('abcd');

        expect(parsed.length).to.equal(1);
    })

    it('Should return two trips', function () {
        var tripParser = new TripParser(createTripRowParserStub());

        var parsed = tripParser.parse('abcd\nabcd');

        expect(parsed.length).to.equal(2);
    })

    it('Should return correct parsed trip', function () {
        var date = new Date(2015, 10, 10, 10, 10, 10, 10);
        var trips = ['$trip$'];
        var tripParser = new TripParser(createTripRowParserStub(date, trips));

        var parsed = tripParser.parse('abcd');

        expect(parsed.length).to.equal(1);
        expect(parsed[0].date).to.equal(date);
        expect(parsed[0].trips[0]).to.equal(trips[0]);
    })
});