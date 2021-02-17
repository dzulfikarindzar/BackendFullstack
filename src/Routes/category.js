const express = require("express");
const routes = express.Router();
const validate = require('../middleware/validate');
const ctrl = require("../Controllers/category");


routes.get('/',validate(["developer", "users"]),ctrl.get);
routes.post("/",validate(["developer"]), ctrl.add);
routes.put("/",validate(["developer"]), ctrl.update);
routes.delete("/:id", validate(["developer"]),ctrl.del);

module.exports = routes;