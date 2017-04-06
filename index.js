'use strict';

var TripTokenParser = require('./src/trip-token-parser');
var TripRowParser = require('./src/trip-row-parser');
var TripParser = require('./src/trip-parser');

const util = require('util')

console.log('**** Trips cost calculator ****\n\n');

var rawTrips = [
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
].join('\r\n');

var tripTokenParser = new TripTokenParser();
var tripRowParser = new TripRowParser(tripTokenParser);
var tripParser = new TripParser(tripRowParser);

var trips = tripParser.parse(rawTrips);

console.log(util.inspect(trips, false, null))