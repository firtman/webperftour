const express = require('express');
const app = express();
const port = 3500;
const weba = require('./weba');
const webb = require('./webb');
const webc = require('./webc');
const webd = require('./webd');
const webe = require('./webe');


app.get("/", (req, res) => {
    res.sendFile(__dirname + '/www/index.html');
})
weba(app, express);
webb(app, express);
webc(app, express);
webd(app, express);
webe(app, express);

app.listen(port, () => console.log(`Open your browser at http://localhost:${port}!`))