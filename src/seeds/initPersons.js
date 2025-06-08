const Person = require('../models/Person');
const initialPersons = [
  { name: 'Juan Pérez', email: 'juan@example.com' },
  { name: 'Ana García', email: 'ana@example.com' },
  { name: 'Luis Martínez', email: 'luis@example.com' },
  { name: 'Marta López', email: 'marta@example.com' },
  { name: 'Carlos Torres', email: 'carlos@example.com' },
  { name: 'Lucía Ramírez', email: 'lucia@example.com' },
  { name: 'Diego Fernández', email: 'diego@example.com' },
  { name: 'Sofía Herrera', email: 'sofia@example.com' },
  { name: 'Javier Castro', email: 'javier@example.com' },
  { name: 'Laura Rojas', email: 'laura@example.com' },
];

async function insertDefaultUsers() {
  const count = await Person.countDocuments();
  if (count === 0) {
    await Person.insertMany(initialPersons);
    console.log('✅ Personas por defecto insertados en MongoDB');
  } else {
    console.log('ℹ️ Personas ya existentes, no se insertan duplicados');
  }
}

module.exports = insertDefaultUsers;
