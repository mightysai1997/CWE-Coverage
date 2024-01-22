var express = require('express')

var app = express()

function improperRestrictionOfFramesCompliant() {

    app.use((req, res) => {

        var host = req.query.opts

        // Compliant: it has safe `X-Frame-Options` header.

        res.setHeader("X-Frame-Options", "https://example.com")

    })

}
