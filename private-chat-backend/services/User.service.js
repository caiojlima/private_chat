const { User } = require('../models');

const createUser = async (payload) => {
    return User.create({
        ...payload,
    });
};

const getUserByUsername = async (username) => {
    return User.findAll({ where: { username } })
}

const getUserByEmail = async (email) => {
    return User.findAll({ where: { email } })
}

module.exports = { createUser, getUserByEmail, getUserByUsername };