'use strict';

var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

var PersonRepository = require('./../src/person-repository');

describe('PersonRepository', function () {
    it('Should return null if person not exists', function () {
        var personRepository = new PersonRepository([]);

        var person = personRepository.findById('T');

        expect(person).to.equal(null);
    })

    it('Should return correct person by id', function () {
        var id = 'T';
        var personRepository = new PersonRepository([{id: id}]);

        var person = personRepository.findById(id);

        expect(person).to.not.be.null;
        expect(person.id).to.equal(id);
    })
});