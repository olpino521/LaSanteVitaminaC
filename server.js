// Copyright (C) 2020, Omar Leonardo Pino Reyes. All rights reserved.
'use strict';

import Express from 'express'
import Path from 'path'
import HTTP from 'http'

const PORT = 60000;

class Server {

    constructor() {
        this.api = Express();
        this.api.use( Express.json() )
                .use( Express.urlencoded({ extended: true }))
                .use( Express.static( Path.join( __dirname, '.')))

        this.api.get('/', ( request, response ) => {
            let indexFile = Path.join(__dirname + '/index.html')
            let url = request.protocol + '://' + request.get('host') + request.originalUrl;
            console.log(url);
            response.sendFile(indexFile, { title:'VitaminaC'} );
        });
        
        this.run()
    }

    run() {

        let portEnv = process.env.PORT;
        if(portEnv == null || port == ""){

            portEnv = PORT;
        }
        this.api.set('port', portEnv );
        this.listener = HTTP.createServer( this.api );
        
        this.listener.listen( portEnv );
        this.listener.on('listening', event => {

            let addr = this.listener.address();
            let bind = typeof addr == `string` ? `pipe ${addr}`: `port ${addr.port}`;

            console.log(`Listening on ${bind}`)
        });
    }
}

const server = new Server();