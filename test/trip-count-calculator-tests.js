var chai = require('chai');
var expect = chai.expect;

var TripCountCalculator = require('./../src/trip-count-calculator');

var trips = [{
    "date": new Date("2017-02-01T23:00:00.000Z"),
    "trips": [{
        "name": "J",
        "driver": "T",
        "passangers": [{
            "name": "P",
            "divider": 2
        }, {
            "name": "R",
            "divider": 2
        }]
    }]
}, {
    "date": new Date("2017-02-02T23:00:00.000Z"),
    "trips": [{
        "name": "JwA",
        "driver": "T",
        "passangers": [{
            "name": "R",
            "divider": 1
        }]
    }]
}, {
    "date": new Date("2017-02-03T23:00:00.000Z"),
    "trips": [{
        "name": "CZ",
        "driver": "T",
        "passangers": [{
            "name": "R",
            "divider": 1
        }]
    }]
}, {
    "date": new Date("2017-02-04T23:00:00.000Z"),
    "trips": [{
        "name": "JwCZ",
        "driver": "T",
        "passangers": [{
            "name": "R",
            "divider": 1
        }]
    }]
}, {
    "date": new Date("2017-02-05T23:00:00.000Z"),
    "trips": [{
        "name": "J",
        "driver": "P",
        "passangers": [{
            "name": "R",
            "divider": 1
        }, {
            "name": "T",
            "divider": 1
        }]
    }]
}];

var tripId = "J";

var expectedResult = [{
    "driver": "P",
    "counts": [{
        "passanger": "R",
        "count": "?"
    }, {
        "passanger": "T",
        "count": "?"
    }]
}, {
    "driver": "R",
    "counts": [{
        "passanger": "P",
        "count": "?"
    }, {
        "passanger": "T",
        "count": "?"
    }]
}, {
    "driver": "T",
    "counts": [{
        "passanger": "P",
        "count": "?"
    }, {
        "passanger": "R",
        "count": "?"
    }]
}];

describe('TripCountCalculator', function () {
    it('Should return correct number of drivers', function () {
        // Given
        var tripCountCalculator = new TripCountCalculator();

        // When
        var result = tripCountCalculator.calculate(trips, tripId);

        // Then
        expect(result.length).to.equal(expectedResult.length);
    })

    it('Should return correct drivers ids', function () {
        // Given
        var tripCountCalculator = new TripCountCalculator();

        // When
        var result = tripCountCalculator.calculate(trips, tripId);

        // Then
        var expectedDriverIds = expectedResult.map(function(value) {
            return value.driver;
        })

        var driversIds = result.map(function(value) {
            return value.driver;
        })

        expect(driversIds).to.eql(expectedDriverIds);
    })

    it('Should return correct counts length #1', function () {
        // Given
        var drivierId = 'P';
        var tripCountCalculator = new TripCountCalculator();

        // When
        var result = tripCountCalculator.calculate(trips, tripId);

        // Then
        var actual = result.find(function (value) {
            return value.driver === drivierId;
        });

        var expected = expectedResult.find(function (value) {
            return value.driver === drivierId;
        });

        expect(actual.counts.length).to.equal(expected.counts.length)
    })

    it('Should return correct counts length #2', function () {
        // Given
        var drivierId = 'R';
        var tripCountCalculator = new TripCountCalculator();

        // When
        var result = tripCountCalculator.calculate(trips, tripId);

        // Then
        var actual = result.find(function (value) {
            return value.driver === drivierId;
        });

        var expected = expectedResult.find(function (value) {
            return value.driver === drivierId;
        });

        expect(actual.counts.length).to.equal(expected.counts.length)
    })

    it('Should return correct counts length #3', function () {
        // Given
        var drivierId = 'T';
        var tripCountCalculator = new TripCountCalculator();

        // When
        var result = tripCountCalculator.calculate(trips, tripId);

        // Then
        var actual = result.find(function (value) {
            return value.driver === drivierId;
        });

        var expected = expectedResult.find(function (value) {
            return value.driver === drivierId;
        });

        expect(actual.counts.length).to.equal(expected.counts.length)
    })

    it('Should return correct counts #1', function () {
        // Given
        var drivierId = 'P';
        var tripCountCalculator = new TripCountCalculator();

        // When
        var result = tripCountCalculator.calculate(trips, tripId);

        // Then
        var actual = result.find(function (value) {
            return value.driver === drivierId;
        });

        var expected = expectedResult.find(function (value) {
            return value.driver === drivierId;
        });

        function findCountsByPassangerId (passangerId) {
            return {
                actualPassanger: actual.counts.find(function (value) {
                    return value.passanger === passangerId;
                }),
                expectedPassanger: expected.counts.find(function (value) {
                    return value.passanger === passangerId;
                })
            }
        }

        var rPassanger = findCountsByPassangerId('R');
        var tPassanger = findCountsByPassangerId('T');

        expect(rPassanger.actualPassanger.count).to.equal(rPassanger.expectedPassanger.count);
        expect(tPassanger.actualPassanger.count).to.equal(tPassanger.expectedPassanger.count);
    })

    it('Should return correct counts #2', function () {
        // Given
        var drivierId = 'R';
        var tripCountCalculator = new TripCountCalculator();

        // When
        var result = tripCountCalculator.calculate(trips, tripId);

        // Then
        var actual = result.find(function (value) {
            return value.driver === drivierId;
        });

        var expected = expectedResult.find(function (value) {
            return value.driver === drivierId;
        });

        function findCountsByPassangerId (passangerId) {
            return {
                actualPassanger: actual.counts.find(function (value) {
                    return value.passanger === passangerId;
                }),
                expectedPassanger: expected.counts.find(function (value) {
                    return value.passanger === passangerId;
                })
            }
        }

        var pPassanger = findCountsByPassangerId('P');
        var tPassanger = findCountsByPassangerId('T');

        expect(pPassanger.actualPassanger.count).to.equal(pPassanger.expectedPassanger.count);
        expect(tPassanger.actualPassanger.count).to.equal(tPassanger.expectedPassanger.count);
    })

    it('Should return correct counts #3', function () {
        // Given
        var drivierId = 'T';
        var tripCountCalculator = new TripCountCalculator();

        // When
        var result = tripCountCalculator.calculate(trips, tripId);

        // Then
        var actual = result.find(function (value) {
            return value.driver === drivierId;
        });

        var expected = expectedResult.find(function (value) {
            return value.driver === drivierId;
        });

        function findCountsByPassangerId (passangerId) {
            return {
                actualPassanger: actual.counts.find(function (value) {
                    return value.passanger === passangerId;
                }),
                expectedPassanger: expected.counts.find(function (value) {
                    return value.passanger === passangerId;
                })
            }
        }

        var pPassanger = findCountsByPassangerId('P');
        var rPassanger = findCountsByPassangerId('R');

        expect(pPassanger.actualPassanger.count).to.equal(pPassanger.expectedPassanger.count);
        expect(rPassanger.actualPassanger.count).to.equal(rPassanger.expectedPassanger.count);
    })
});
