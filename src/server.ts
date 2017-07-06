import express = require("express");

export class Server {
    public static bootstrap(): express.Application {
        return new Server(3000).app;
    }
    public app: express.Application;
    private constructor(port: number) {
        this.app = express();
        this.app.listen(port, () => {
            /* tslint:disable:no-console */
            console.log("listening on " + port);
        });
    }
}
