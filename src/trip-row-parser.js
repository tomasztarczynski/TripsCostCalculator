'use strict';

function TripRowParser (tripTokenParser) {
    this.tripTokenParser = tripTokenParser;
}

TripRowParser.prototype.parse = function (text) {
    var trimedText = text.replace(/\s/g,'')

    if (!trimedText) {
        return null;
    } else if(/^#+\d+#+$/.test(trimedText)) {
        return null;
    } else if (/^[A-Za-z]+\d+\.\d+\.\d+:/.test(trimedText)) {
        var splited = trimedText.split(':');

        if(splited.length !== 2) {
            throw new Error('Wiersz przejazdu jest niepoprawny');
        }

        if(!splited[1]) {
            return null;
        }

        var dateParts = splited[0].replace(/^[A-Za-z]*/g, '').replace(':', '').split('.');

        if(dateParts.length !== 3) {
            throw new Error('Wiersz przejazdu jest niepoprawny');
        }

        return {
            date: new Date(dateParts[2], dateParts[1], dateParts[0]),
            trips: []
        }
    } else {
        throw new Error('Wiersz przejazdu jest niepoprawny');
    }
}

module.exports = TripRowParser;