const userDao = require("../dao/user.dao");

let getUsers = async () => {

    return new Promise((resolve, reject) => {
        userDao.db.all("SELECT * FROM employees", [], (err, row) => {
            if (err) {
                reject({ code: 500, users: "missing!" });
            }
            resolve({ code: 200, users: row });
        })
    })

}

let insertUser = async (user) => {
    return new Promise((resolve, reject) => {
        userDao.db.run("INSERT INTO employees (last_name, first_name, title, address, country_code) VALUES (?,?,?,?,?)",
            [user.lastName, user.firstName, user.title, user.address, user.countryCode],
            (err) =>{
                if(err){
                    reject({code:400, message: "insert fail!"})
                }else{
                    resolve({code: 200, message: "insert success!"})
                }
            }

        )
    })
}

let updateUser = async (user) =>{
   
    return new Promise((resolve, reject) =>{
        userDao.db.run("UPDATE employees SET last_name = ?, first_name = ?, title = ?, address = ?, country_code =? WHERE employee_id = ?",
        [user.lastName, user.firstName, user.title, user.address, user.countryCode, user.id],
        (err) =>{
            if(err){
                
                reject({code: 403, message: "user not found"})
            }else{
                resolve({code: 200, message: "update ok!"})
            }
        })
    })
}

module.exports = {
    getUsers: getUsers,
    insertUser: insertUser,
    updateUser: updateUser,
}