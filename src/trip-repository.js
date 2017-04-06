'use strict';

function TripRepository(trips) {
    this.trips = trips || [{
        id: 'J',
        name: 'Job',
        distance: 61,
        isOneWay: false
    }, {
        id: 'A',
        name: 'Aquadrom',
        distance: 42,
        isOneWay: false
    }, {
        id: 'JwA',
        name: 'Job with Aquadrom',
        distance: 67,
        isOneWay: false
    }, {
        id: 'CZ',
        name: 'Częstochowa',
        distance: 88,
        isOneWay: true
    }, {
        id: 'JwCZ',
        name: 'Job with częstochowa',
        distance: 141,
        isOneWay: true
    }];
}

TripRepository.prototype.findById = function (id) {
    return this.trips.find(function (trip) {
        return trip.id === id;
    }) || null;
}

module.exports = TripRepository;