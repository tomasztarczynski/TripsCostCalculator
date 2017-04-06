'use strict';

var tripSeparator = '_';
var tripAndDriverSeparator = '!';
var driverAndPassangersSeparator = '#';
var passangersSeparator = '.';
var divider = '/';

function TripTokenParser () {
    
}

function parseTrip (text) {
    var splited = text.split(tripAndDriverSeparator);

    if(splited.length !== 2) {
        throw new Error('Token przejazdu jest niepoprawny.');
    }

    var tripName = splited[0];

    var splited2 = splited[1].split(driverAndPassangersSeparator);

    if(splited2.length !== 2) {
        throw new Error('Token przejazdu jest niepoprawny.');
    }

    var driver = splited2[0];

    var splited3 = splited2[1].split(passangersSeparator);

    if(!splited3.length) {
        throw new Error('Token przejazdu jest niepoprawny.');
    }

    var passangers = [];

    splited3.forEach(function (element) {
        var splited4 = element.split(divider);

        if(splited4.length === 1) {
            passangers.push({
                name: splited4[0],
                divider: 1
            });
        } else if (splited4.length === 2) {
            if(isNaN(splited4[1])) {
                throw new Error('Token przejazdu jest niepoprawny.');
            }

            passangers.push({
                name: splited4[0],
                divider: parseFloat(splited4[1])
            });
        } else {
            throw new Error('Token przejazdu jest niepoprawny.');
        }
    });

    return {
        name: tripName,
        driver: driver,
        passangers: passangers
    };
}

TripTokenParser.prototype.parse = function (text) {
    if(!text) {
        return [];
    }

    var splited = text.split(tripSeparator);

    if(!splited.length) {
        throw new Error('Token przejazdu jest niepoprawny.');
    }

    var trips = [];

    splited.forEach(function (element) {
        var parsedTrip = parseTrip(element);
        trips.push(parsedTrip);
    });

    return trips;
}

module.exports = TripTokenParser;
