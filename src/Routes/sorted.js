const express = require('express');
const routes = express.Router();
const ctrl = require('../Controllers/sorted');
const validate = require('../middleware/validate');

routes.get('/', validate(['developer', 'users']), ctrl.get);
routes.get('/:name', validate(['developer', 'users']), ctrl.getName);

module.exports = routes;