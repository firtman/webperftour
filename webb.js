/*
This version changes:
 - TTFB reduced - latency was removed
 - All files cached for 1 hour now
 - GZIP enabled for text-based files
*/

const compression = require('compression');
module.exports = function(app, express) {
    const prefix = "b";

    app.use(compression())

    app.get(`/${prefix}`, (req, res) => {
        res.redirect(`/${prefix}/web`)
    })
    app.get(`/${prefix}/`, (req, res) => {
        res.redirect(`/${prefix}/web`)
    })
    
    app.get(`/${prefix}/web`, (req, res) => {
        res.redirect(`/${prefix}/web/page/`)
    })
    
    app.get(`/${prefix}/web/page`, (req, res) => {
        res.sendFile(__dirname + '/www/b/index.html');
    })
    app.use(`/${prefix}/web/page`, express.static('www/b', { maxAge: 36000000 }))
    
}