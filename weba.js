
module.exports = function(app, express) {
    const prefix = "a";

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
        // Delayed response: 2s
        setTimeout(() => res.sendFile(__dirname + '/www/a/index.html'), 2000)
    })
    app.use(`/${prefix}/web/page`, express.static('www/a', { maxAge: 0 }))
    
}