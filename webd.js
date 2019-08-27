/*
This version changes:
 - CSS first, JS later
 - Hero image from first domain
 - Remove unused CSS
 - Bundle CSS
 - Compress CSS
 - Remove Unused JS
 - Bundle JS - defer
 - Bundle JS - async
 - Web Worker for data processing
*/

const expressStaticGzip = require('express-static-gzip');
module.exports = function(app, express) {
    const prefix = "d";
    
    app.get(`/${prefix}/`, (req, res) => {
        res.sendFile(__dirname + '/www/d/index.html');
    })
    app.use(`/${prefix}/`, expressStaticGzip('www/d', { 
        enableBrotli: true,         
        orderPreference: ['br', 'gzip'],
        maxAge: 36000000000 
    }))
    
}