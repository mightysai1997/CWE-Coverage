import express, { Request, Response } from 'express';
import * as urlLib from 'url';

const app = express();

app.get('/some/path', function(req: Request, res: Response) {
    let url: string | undefined = req.query.url as string;
    let host: string | null = null;

    if (url) {
        host = urlLib.parse(url).host;
    }

    // BAD: the host of `url` may be controlled by an attacker
    let regex = /^((www|beta).)?example.com/;

    if (host && host.match(regex)) {
        res.redirect(url);
    }
});

// Example of using the express application
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
