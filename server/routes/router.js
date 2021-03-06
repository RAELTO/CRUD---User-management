const express = require('express');
const route = express.Router();//this method allows to create different router in a separate file

const services = require('../services/render');
const controller = require('../controller/user_controller');

/**
 * @description Root Route
 * @method GET /
 */
route.get('/', services.homeRoutes);

/**
 * @description add users
 * @method GET /add-user
 */

route.get('/add-user', services.add_user);

/**
 * @description for update user
 * @method GET /update-user
 */

route.get('/update-user', services.update_user);

/**
 * @description for other pages
 * /mission /vision /contact
 */
route.get('/mission', services.mission);
route.get('/vision', services.vision);
route.get('/contact', services.contact);

//API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route