const categories = {}
const model = require('../Models/category')
const respon = require('../Helpers/respon')

categories.get = async (req, res) => {
    try{
        const result = await model.get()
        return respon(res, 200, result)
    }catch (error){
        return res.send(error)

    }
  
}

categories.add = async (req, res) => {
    try {
        const result = await model.add(req.body)
        return respon(res, 201, result)
    } catch (error){
        return respon(res, 500, error)
    }
    
}

categories.update = async (req, res) => {
    try {
        const result = await model.update(req.body)
        return respon(res, 201, result)
    } catch (error){
        return respon(res, 400, error)
    }
}

categories.del = async (req, res) => {
   try {
       const result = await model.del(req.params.id)
        return respon(res, 200, result)
   }catch (error) {
        return res.send(res, 400, error)
   }
}

module.exports = categories
