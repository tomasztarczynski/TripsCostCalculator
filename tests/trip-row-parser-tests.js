'use strict';

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
    'Monday 2.1.2017: J|P/2,R/2',
    'Tuesday 3.1.2017:JwA|R',
    'Wednesday 4.1.2017: CZ|R',
    'Thursday 5.1.2017: JwCZ|R',
    'Friday 6.1.2017: J|RT',
    '',
    'Saturday 7.1.2017:',
    'Sunday 8.1.2017:'
];

describe('', function () {
    it('Should return null if row contains week number', function () {
        var tripRowParser = new TripRowParser();

        var result = tripRowParser.parse(rows[0]);

        expect(result).to.equal(null);
    })

    it('Should return null if row contains only whitespaces', function () {
        var tripRowParser = new TripRowParser();

        var result = tripRowParser.parse(rows[1]);

        expect(result).to.equal(null);
    })

    it('Should return null if row has not trip token', function () {
        var tripRowParser = new TripRowParser();

        var result = tripRowParser.parse(rows[2]);

        expect(result).to.equal(null);
    })

    it('Should return object with correct properties', function () {
        var tripRowParser = new TripRowParser();

        var parsedTripRow = tripRowParser.parse(rows[6]);

        expect(parsedTripRow).to.have.property('date')
            .that.is.a('date');
        expect(parsedTripRow).to.have.property('trips')
            .that.is.an('array')
    })

    it('Should return object with correct date', function () {
        var tripRowParser = new TripRowParser();

        var parsedTripRow = tripRowParser.parse(rows[6]);

        expect(parsedTripRow.date.getFullYear()).to.equal(2017);
        expect(parsedTripRow.date.getMonth()).to.equal(1);
        expect(parsedTripRow.date.getDate()).to.equal(2);
    })
});