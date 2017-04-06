var chai = require('chai');
var expect = chai.expect;

var TripCostCalculator = require('./../src/trips-cost-calculator');

describe('TripCostCalculator', function () {
    it('Calculate should return sum of arguments', function () {
        var tripCostCalculator = new TripCostCalculator();

        expect(tripCostCalculator.calculate(1, 1)).to.equal(2);
    })
});
