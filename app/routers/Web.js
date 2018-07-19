/**
 * Import base packages
 */
const express = require('express');
const router = express.Router();
const routerUtils = require('../helpers/modules/Router');

/**
 * Define routes
 */
const routes = [
    {
        route: '/',
        method: 'get',
        controller: 'Index',
        action: 'index'
    },
    {
        route: '/projects',
        method: 'get',
        controller: 'Index',
        action: 'index'
    },
    {
        route: '/project/:path',
        method: 'get',
        controller: 'Index',
        action: 'index'
    },
    {
        route: '/programming',
        method: 'get',
        controller: 'Index',
        action: 'index'
    },
    {
        route: '/about',
        method: 'get',
        controller: 'Index',
        action: 'index'
    }
];

routerUtils.routesToRouter(router, routes, 'Web');

module.exports = {router, routes};
