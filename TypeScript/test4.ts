import express, {Request, Response} from 'express'

var app = express()

const password = "myPass";

function timingAttackNoncompliant() {

  app.get("/user/login", function (req: Request, res: Response) {

    // Noncompliant: '===' operator is used with sensitive data field.

    if (password === "myPass") {

      // logIn()

    }

  });

}
