const UserService = require('../services/User.service');

const existanceValidation = async (req, res, next) => {
    try {
        const { email, username, password } = req.body;
        if (!email || !username || !password) return res.status(400).json({ message: "Campos inválidos" })
        const emailResult = await UserService.getUserByEmail(email);
        const usernameResult = await UserService.getUserByUsername(username);
        const error = {}
        if (usernameResult.length || emailResult.length) {
            if (emailResult.length) { error.email = 'Email já cadastrado!' }
            if (usernameResult.length) { error.username = 'Username já cadastrado!' }
            return res.status(400).json({ error })

        }
        next();
    } catch (error) {
        next(error);
    }
    
}

module.exports = { existanceValidation }