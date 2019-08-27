/*
This version changes:
 - image compressed
 - <img> with size
 - <picture> with different versions: GuetzliJPG, ZopfliPNG, WebP
 - Google Fonts with swap and inline fonts
 - Lazy load images
 - font-display: optional 
 - Other important fonts with preload
 - TODO: responsive images
*/

const expressStaticGzip = require('express-static-gzip');
module.exports = function(app, express) {
    const prefix = "e";
    
    app.get(`/${prefix}/`, (req, res) => {
        res.sendFile(__dirname + '/www/e/index.html');
    })
    app.use(`/${prefix}/`, expressStaticGzip('www/e', { 
        enableBrotli: true,         
        orderPreference: ['br', 'gzip'],
        maxAge: 36000000000 
    }))
    
}