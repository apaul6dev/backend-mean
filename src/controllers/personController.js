const personService = require('../services/personService');

exports.getPersons = async (req, res) => {
  try {
    const people = await personService.getAllPersons();
    res.json(people);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener personas' });
  }
};
