'use strict';

var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

var TripRowParser = require('./../src/trip-row-parser');

var rows = [
    '##### 1 #####',
    '',
    'Sunday 1.1.2017:',
    '',
    '##### 2 #####',
    '',
    'Monday 2.1.2017: J!T#P/2.R/2',
    'Tuesday 3.1.2017: JwA!T#R',
    'Wednesday 4.1.2017: CZ!T#R',
    'Thursday 5.1.2017: JwCZ!T#R',
    'Friday 6.1.2017: J!P#R.T',
    '',
    'Saturday 7.1.2017:',
    'Sunday 8.1.2017:'
];

describe('TripRowParser', function () {
    function createTripTokenParserStub (returnValue) {
        return { parse: function () { return returnValue || []; }};
    }

    it('Should return null if row contains week number', function () {
        var tripRowParser = new TripRowParser(createTripTokenParserStub());

        var result = tripRowParser.parse(rows[0]);

        expect(result).to.equal(null);
    })

    it('Should return null if row contains only whitespaces', function () {
        var tripRowParser = new TripRowParser(createTripTokenParserStub());

        var result = tripRowParser.parse(rows[1]);

        expect(result).to.equal(null);
    })

    it('Should return null if row has not trip token', function () {
        var tripRowParser = new TripRowParser(createTripTokenParserStub());

        var result = tripRowParser.parse(rows[2]);

        expect(result).to.equal(null);
    })

    it('Should return object with correct properties', function () {
        var tripRowParser = new TripRowParser(createTripTokenParserStub());

        var parsedTripRow = tripRowParser.parse(rows[6]);

        expect(parsedTripRow).to.have.property('date')
            .that.is.a('date');
        expect(parsedTripRow).to.have.property('trips')
            .that.is.an('array')
    })

    it('Should return object with correct date', function () {
        var tripRowParser = new TripRowParser(createTripTokenParserStub());

        var parsedTripRow = tripRowParser.parse(rows[6]);

        expect(parsedTripRow.date.getFullYear()).to.equal(2017);
        expect(parsedTripRow.date.getMonth()).to.equal(1);
        expect(parsedTripRow.date.getDate()).to.equal(2);
    })

    it('Should return object with correct trips', function () {
        var tripTxt = '$trip$';
        var rowTxt = 'Saturday 7.1.2017:' + tripTxt;
        var tripTokenParserStub = createTripTokenParserStub([tripTxt]);
        var tripRowParser = new TripRowParser(tripTokenParserStub);
            
        var parsedTripRow = tripRowParser.parse(rowTxt);
        
        expect(parsedTripRow.trips.length).to.equal(1);
        expect(parsedTripRow.trips[0]).to.equal(tripTxt);
    })
});