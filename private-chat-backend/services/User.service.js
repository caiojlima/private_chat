const { User } = require('../models');

const createUser = async (payload) => {
    User.create({
        ...payload,
    })
};

module.exports = { createUser };