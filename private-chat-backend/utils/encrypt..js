const bcryptjs = require('bcryptjs')

const encryptPassword = (password) => bcryptjs.hashSync(password, bcryptjs.genSaltSync());

const passwordValidation = (password, hash) => bcryptjs.compareSync(password, hash);

module.exports = { encryptPassword, passwordValidation };