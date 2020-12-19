const users = {}
const model = require('../Models/users')
const respon = require('../Helpers/respon')
const hashPassword = require('../Helpers/hash')

users.get = async (req, res) => {
    try{
        const result = await model.get()
        return respon(res, 200, result)
    }catch (error){
        return respon(res, 500, error)

    }
  
}

users.add = async (req, res) => {
    try {
        const checkEmail = await model.getByEmail (req.body.email)
    if (checkEmail.length > 0){
        return respon (res, 401, {msg : "email has been registered"})
    }
        const newPassword = await hashPassword(req.body.password)
        const users = {
            name : req.body.name,
            email : req.body.email,
            password : newPassword,
            role : req.body.role,
        }
        const data = await model.add(users)
        return respon(res, 201, data)
    } catch (error){
        return respon(res, 500, error)
    }
    
}

users.update = async (req, res) => {
    try {
        console.log("masuk controller")
        const newPassword = await hashPassword(req.body.password)
        const users = {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            password: newPassword,
        }

        const data = await model.update(users);
        return respon(res, 200, data);
    } catch (error){
        return respon(res, 400, error);
    }
}

users.del = async (req, res) => {
   try {
       const result = await model.del(req.params.id)
        return respon(res, 200, result)
   }catch (error) {
        return res.send(res, 400, error)
   }
}

module.exports = users