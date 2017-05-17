'use strict';

var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

var TripRepository = require('./../src/trip-repository');

describe('TripRepository', function () {
    it('Should return null if trip not exists', function () {
        var tripRepository = new TripRepository([]);

        var trip = tripRepository.findById('J');

        expect(trip).to.equal(null);
    })

    it('Should return correct trip by id', function () {
        var id = 'J';
        var tripRepository = new TripRepository([{id: id}]);

        var trip = tripRepository.findById(id);

        expect(trip).to.not.be.null;
        expect(trip.id).to.equal(id);
    })
});