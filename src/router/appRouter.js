const express = require('express');
const router = new express.Router();
const controller = require('../controller/appController');

let routes = (app) => {
    try {
        router.get('/api/v1/search', controller.search);
        app.use(router);    
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
};

module.exports = routes;