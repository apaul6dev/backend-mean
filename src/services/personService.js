const Person = require('../models/Person');
exports.getAllPersons = () => Person.find();
