const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//ONGS ROUTES
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//INCIDENTS ROUTES
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

//SPECIFIC ONG
routes.get('/profile', ProfileController.index);

//LOGIN
routes.post('/sessions', SessionController.create);


module.exports = routes;