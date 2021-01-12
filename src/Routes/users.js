const express = require("express")
const routes = express.Router()
const ctrl = require("../Controllers/users")
const validate = require ('../middleware/validate')

routes.get('/', validate(["developer"]), ctrl.get)
routes.post("/", ctrl.add)
routes.put("/", validate(["developer"]), ctrl.update);
routes.delete("/:id", validate(["developer"]), ctrl.del)

module.exports = routes