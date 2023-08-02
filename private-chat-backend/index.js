const express = require('express');
const cors = require('cors');
const UserValidations = require('./middlewares/user.validation')
const UserController = require('./controllers/user.controller');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

app.post('/register', UserValidations.existanceValidation, UserController.newUserRegistration);

app.use((error, req, res, next) => {
    return res.status(500).json({ error: error.message })
})

app.listen(process.env.PORT || 3001, () => {
    console.log(`Aplicação ouvindo na porta ${process.env.PORT || 3001}`);
  });