const express = require('express')
const app = express()
const jwt = require('jsonwebtoken');
const fs = require('fs')
const routes = require('./routes')
const cors = require('cors')
const bodyParser = require('body-parser')
const myConnection = require('express-myconnection')
const config = require('./db/config')
const mysql = require('mysql')
const cron = require('node-cron')
const axios = require("axios")
require("dotenv").config()

const PORT = process.env.PORT

app.get('/', (req, res) => res.send('OPSI-Send-API v1.0'))
app.use(cors())
app.use(myConnection(mysql, config.dbHis, 'pool',))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: '*/*' }))

axios.post('http://localhost:' + PORT + '/api/opsi/createVisit', {
}).then(rs => {
    console.log(rs.data);
}
).catch(err => err);

cron.schedule('0 0 */1 * * *', function () {
    axios.post('http://localhost:' + PORT + '/api/opsi/createVisit', {
    }).then(rs => {
        console.log(rs.data);
    }
    ).catch(err => err);

});

routes(app)
app.listen(PORT,
    () => console.log(`Simple Express app listening on port ${PORT}!`))