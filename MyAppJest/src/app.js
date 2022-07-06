const express = require('express');

class AppControler {
    constructor() {
        this.express = express();

        this.midlewares()
        this.routes()
    }

    midlewares() {
        this.express.use(express.json())

    }
    routes() {
        this.express.use(require('./routes'))
    }
}

module.exports = new AppControler().express