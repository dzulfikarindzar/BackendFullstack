require('dotenv/config')
const express = require("express")
const cors = require('cors')
const server = express()
const routes = require("./src/main")
const db = require('./src/Configs/db')
const bodyPars = require('body-parser')
const morgan = require("morgan")
const redis = require('./src/Configs/redis')
const logger = require('./utils/logger')

server.use(bodyPars.urlencoded({extended: false}))
server.use(cors())
server.use(bodyPars.json())
server.use(morgan("dev"))
server.use("/public", express.static("public"))
server.use("/api", routes)
//server.use(routes)

db.connect()
    .then((res) => {
        logger.info("Database Connect")
    })
    
    .catch((err) => {
        logger.info("Database not connect")
        logger.info(err)
    })

redis
    .redisCheck()
    .then((res) => {
        logger.info(res);
    })
    .catch((err) => {
        logger.info(err);
    })

server.listen(9100, () => {
    logger.info("Service running on port 9100");
})



