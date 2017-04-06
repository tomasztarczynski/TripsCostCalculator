'use strict';

function TripParser (tripRowParser) {
    this.tripRowParser = tripRowParser;
}

TripParser.prototype.parse = function (trips) {
    if(!trips) {
        return [];
    }

    var rows = trips.split('\n');

    var result = [];

    rows.forEach(function(row) {
        var parsed = this.tripRowParser.parse(row);

        if(parsed !== null) {
            result.push(parsed);
        }
    }, this);

    return result;
}

module.exports = TripParser;