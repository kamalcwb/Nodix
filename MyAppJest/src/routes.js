const routes = require('express').Router();
const { User } = require('./app/models');

User.create({ name: 'teste', email: 'teste@pop.com.br', password_hash: 'teste123' })


module.exports = routes;