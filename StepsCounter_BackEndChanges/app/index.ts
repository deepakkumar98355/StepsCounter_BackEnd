'use strict'

const express = require('express')


//Adding NewRelic for production

export default class SampleClass {
    app: any
    appRouter: any
    time: Date

    constructor() {
        this.app = express()
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        this.time = new Date()
        this.setRouters()
    }

    startServer(): void {
        if (process.env.port) {
            this.app.listen(process.env.port, () => {
                console.log(`All good!  Server has started on ${process.env.port}`)
            })
        } else {
            console.log(`oops! Sorry Server can not be started`)
        }
    }

    setRouters(): void {
        this.appRouter = require('./routers/app')(this.app)
    }
}
