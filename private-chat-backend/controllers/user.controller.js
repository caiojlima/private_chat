const { createUser } = require('../services/User.service');
const { encryptPassword } = require('../utils/encrypt.');

const newUserRegistration = async (req, res, next) => {
    try {
        let { password } = req.body;
        password = encryptPassword(password);
        await createUser({ ...req.body, password });
        res.status(201).json({ message: 'Sucessfully created user' }) ;
    } catch (error) {
        next(error)
    }
};

module.exports = { newUserRegistration }