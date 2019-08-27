/*
This version changes:
 - No redirects
 - Adds <link rel=preconnect>
 - Adding Brotli (static-gerentated .br resources)
*/

const expressStaticGzip = require('express-static-gzip');
module.exports = function(app, express) {
    const prefix = "c";
    
    app.get(`/${prefix}/`, (req, res) => {
        res.sendFile(__dirname + '/www/c/index.html');
    })
    app.use(`/${prefix}/`, expressStaticGzip('www/c', { 
        enableBrotli: true,         
        orderPreference: ['br', 'gzip'],
        maxAge: 36000000 
    }))
    
}