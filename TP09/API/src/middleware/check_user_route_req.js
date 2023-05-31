const {RegisterValidation,LoginValidation} = require('./validation/user_validation')
function check_register(req, res, next){
    const data = req.body;
    const {error} = RegisterValidation(data);
    if(error){return res.status(400).send(error.details[0].message)}
    next()
}
function check_login(req, res, next){
    const data = req.body;
    const {error} = LoginValidation(data);
    if(error){return res.status(400).send(error.details[0].message)}
    next()
}

module.exports.check_register = check_register
module.exports.check_login = check_login
