const userService = require("../services/user.service");

let getUsers = async (req, res)=>{
    let result = await userService.getUsers();
    res.status(result.code).send(result.users);
}

let insertUser = async (req, res) =>{
    let {
        lastName,firstName, title, address, countryCode
    } = req.query
    let result = await userService.insertUser({
        lastName,firstName,title, address,countryCode
    });
    res.status(result.code).send(result.message);
}

let updateUSer = async(req, res) =>{
    let {
        lastName,firstName, title, address, countryCode, id
    } = req.body
    let result = await userService.updateUser({
        lastName,firstName,title,address,countryCode,id
    });
    res.status(result.code).send(result.message);
}

module.exports = {
    getUsers: getUsers,
    insertUser: insertUser,
    updateUSer: updateUSer
}