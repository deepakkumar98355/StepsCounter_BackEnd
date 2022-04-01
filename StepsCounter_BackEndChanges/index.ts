'use strict'

import SampleClass from './app'
import dotenv from 'dotenv'
const _sampleClass = new SampleClass()

dotenv.config()
let path

/* 
    Adding environment variables for production and Development 
*/

switch (process.env.NODE_ENV) {
    case 'production':
        path = `${__dirname}/.prod.env`
        break
    default:
        path = `${__dirname}/.dev.env`
}
if (!path) {
    console.log(".env file doesn't exist")
    console.log('process.env.NODE_ENV = ', process.env.NODE_ENV)

    throw new Error(".env file doesn't exist")
}

dotenv.config({ path: path })

_sampleClass.startServer()
