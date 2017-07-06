import express = require('express');

export class Server{
    public app: express.Application;

    public static bootstrap(): express.Application {
        return new Server(3000).app;
    }

    private constructor(port:Number){
        this.app = express();
        this.app.listen(port, () => {
            console.log('listening on '+port)
        });
    }
}