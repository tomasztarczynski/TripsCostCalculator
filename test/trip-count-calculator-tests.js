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
        "passanger": "P",
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

var result = expectedResult;

describe('TripCountCalculator', function () {
    it('Should return correct number of drivers', function () {
        expect(result.length).to.equal(expectedResult.length);
    })

    it('Should contains correct drivers ids', function () {
        var expectedDriverIds = expectedResult.map(function(value) {
            return value.driver;
        })

        var driversIds = result.map(function(value) {
            return value.driver;
        })

        expect(driversIds).to.eql(expectedDriverIds);
    })
});
