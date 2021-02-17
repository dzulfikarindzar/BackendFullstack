const express = require("express");
const validate = require("../middleware/validate")
const routes = express.Router();
const ctrl = require("../Controllers/history");


routes.get('/',validate(["developer","users"]),ctrl.get);
routes.post("/",validate(["developer","users"]),ctrl.add);
routes.delete("/:id",validate(["developer","users"]),ctrl.del);

module.exports = routes;