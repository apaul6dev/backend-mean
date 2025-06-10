const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const personRoutes = require('./src/routes/personRoutes');
const insertDefaultPesons = require('./src/seeds/initPersons');

dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('✅ Servidor MEAN activo');
});

app.use('/api/persons', personRoutes);

connectDB().then(async () => {
  await insertDefaultPesons();
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor escuchando en http://0.0.0.0:${PORT}`);
  });
});
