const { Message } = require('../models');

const createMessage = async (payload) => {
    return Message.create({
        ...payload,
    })
}

module.exports = { createMessage }