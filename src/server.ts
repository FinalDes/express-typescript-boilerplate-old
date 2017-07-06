import express = require("express");
 /* tslint:disable:no-console */

export class Server {
    public static bootstrap(port?: number): express.Application {
        // if (port === undefined) {
        //     port = 3000;
        // }
        port = port === undefined ? 3000 : port;
        return new Server(port).app;
    }
    public app: express.Application;
    private constructor(port: number) {
        this.app = express();
        this.app.listen(port, () => {
            console.log("listening on " + port);
        });
    }
}
