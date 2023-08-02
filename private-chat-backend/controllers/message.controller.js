const { createMessage } = require("../services/Message.service");
const { verifyToken } = require("../utils/jwt");

const sendMessage = async (req, res, next) => {
    try {
        const { token, content } = req.body;
        const{ userId } = verifyToken(token);
        await createMessage({content, userId});
        return res.status(201).json({ message: 'Mensagem enviada com êxito!' })
    } catch (error) {
        next(error)
    }
}

module.exports = { sendMessage }