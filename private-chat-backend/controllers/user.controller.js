const { createUser, getUserByEmail } = require('../services/User.service');
const { encryptPassword, passwordValidation } = require('../utils/encrypt.');
const { generateToken } = require('../utils/jwt');

const newUserRegistration = async (req, res, next) => {
    try {
        let { password } = req.body;
        password = encryptPassword(password);
        await createUser({ ...req.body, password });
        res.status(201).json({ message: 'Sucessfully created user' });
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const [result] = await getUserByEmail(email);
        if (!result || !passwordValidation(password, result.password)) {
            return res.status(400).json({ error: 'Email or password is incorrect' });

        }
        return res.status(200).json({ token: generateToken({ userId: result.id, email, username: result.username }) });
    } catch (error) {
        next(error);
    }
}

module.exports = { newUserRegistration, login }