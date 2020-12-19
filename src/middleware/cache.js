const response = require('../Helpers/respon')
const respon = require('../Helpers/respon')
const redis = require('../Config/redis')
const { redisdb } = require("../Config/redis")

const getAll = (req, res, next) => {
    redisdb.get("products", (err, data) =>{
        if (err) {
            return response(res, 500, err)
        }
        if (data !== null) {
            const result = JSON.parse(data)
            console.log("halo dari redis");
            return response(res, 200, result)
        }else {
            next()
        }
    })
}

module.exports = getAll