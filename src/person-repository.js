'use strict';

function PersonRepository (persons) {
    this.persons = persons || [{
        id: 'P',
        name: 'Przemysław Szczepanik'
    }, {
        id: 'R',
        name: 'Robert Wojda'
    }, {
        id: 'T',
        name: 'Tomasz Tarczyński'
    }];
}

PersonRepository.prototype.findById = function (id) {
    return this.persons.find(function (person) {
        return person.id === id;
    }) || null;
}

module.exports = PersonRepository;