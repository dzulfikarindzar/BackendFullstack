const express = require("express")
const routes = express.Router()
const ctrl = require("../Controllers/product")
const validate = require('../middleware/validate')
const upload = require('../middleware/multer')
const cache = require('../middleware/cache')

routes.get('/', 
// validate(["developer", "users"]),
 cache, ctrl.getAll)
routes.get('/:id', 
// validate(["developer", "users"]),
 ctrl.get)
routes.post("/", 
// validate(["developer"]), 
upload.single("image"), ctrl.add)
routes.put("/",
//  validate(["developer"]), 
upload.single("image"), ctrl.update)
routes.delete("/:id", 
// validate(["developer"]),
 ctrl.del)

module.exports = routes
