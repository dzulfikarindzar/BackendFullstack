const express = require("express");
const routes = express.Router();
const ctrl = require("../Controllers/product");
const validate = require ("../middleware/validate")
const upload = require ("../middleware/multer")
const cache = require("../middleware/cache")

routes.get('/'
,validate(["developer","users"])
,cache,ctrl.getAll);
routes.get('/:id',ctrl.get);
routes.get('/search',ctrl.getSearch);
routes.get('/sort',ctrl.getSort);
routes.post("/",upload.single("image"), ctrl.add);
routes.put("/", upload.single("image"), ctrl.update);
routes.delete("/:id", ctrl.del);

module.exports = routes;