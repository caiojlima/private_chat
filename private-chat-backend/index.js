const express = require('express');
const cors = require('cors');
const UserController = require('./controllers/user.controller');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

app.post('/register/', UserController.newUserRegistration);

app.listen(process.env.PORT || 3001, () => {
    console.log(`Aplicação ouvindo na porta ${process.env.PORT || 3001}`);
  });