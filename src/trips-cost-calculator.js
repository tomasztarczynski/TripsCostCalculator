'use strict';

function TripCostCalculator (personRepository, tripRepository) {
    this.personRepository = personRepository;
    this.tripRepository = tripRepository;
}

TripCostCalculator.prototype.calculate = function (trips) {
    
}

module.exports = TripCostCalculator;
