import express, {Request, Response} from 'express'

var app = express()

var compare = require("secure-compare");

function timingAttackCompliant() {

  app.get("/user/login", function (req: Request, res: Response) {

    // Compliant: sensitive data field is compared using 'secure-compare'.

    if (compare(password, "myPass")) {

      //

    }

  });

}
