const express = require('express')
const router = express.Router();
const apiRoutes = require('./api.Routes');

const index = [
    {
        routes: '/api',
        path: apiRoutes,
    }
]

index.forEach((route, index) => router.use(route.routes, route.path))

module.exports = router;


