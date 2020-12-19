const express = require("express")
const routes = express.Router()
const ctrl = require("../Controllers/users")
const validate = require ('../middleware/validate')

routes.get('/', validate(["developer"]), ctrl.get)
routes.post("/", validate(["developer", "users"]), ctrl.add)
routes.put("/", validate(["developer"]), ctrl.update);
routes.delete("/:id", ctrl.del)

module.exports = routes