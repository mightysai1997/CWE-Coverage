var express = require('express')

var app = express()

var compare = require('secure-compare')


function timingAttackCompliant() {

    app.get('/user/login', function (req, res) {

        // Compliant: sensitive data field is compared using 'secure-compare'.

        if(compare(password, "myPass")) {

            logIn()

        }

    })

}
