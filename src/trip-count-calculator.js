'use strict';

function TripCountCalculator (personRepository, tripRepository) {
    this.personRepository = personRepository;
    this.tripRepository = tripRepository;
}

TripCountCalculator.prototype.calculate = function (trips) {
    
}

module.exports = TripCountCalculator;
