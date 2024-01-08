import * as express from 'express';
import * as urlLib from 'url';

const app = express();

app.get('/some/path', function (req, res) {
    const url: string = req.param('url');
    const host: string | null = urlLib.parse(url).host;

    // BAD: the host of `url` may be controlled by an attacker
    const regex: RegExp = /^((www|beta).)?example.com/;

    if (host && host.match(regex)) {
        res.redirect(url);
    }
});
