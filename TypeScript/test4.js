var express = require('express')

var app = express()

var path = require('path')

function pathTraversalNoncompliant() {

    app.get('/products', (req, res) => {

        const basePath = '/data/product/images/'

        // Noncompliant: user-supplied path is not sanitized and could contain malicious characters.

        var targetPath = path.join(basePath, req.query.path)

        retrieveProduct(targetPath)

        res.send('Here is your requested product!')

    })

}
