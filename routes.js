const express = require('express')
const app = express()
const visit = require('./model/visit')

module.exports = function (app) {
    app.get('/api/opsi/', function (req, res) {
        res.send({ message: 'OPSI-Send-API v1.0' })
    })
    app.post('/api/opsi/createVisit',visit.createVisit)
}
