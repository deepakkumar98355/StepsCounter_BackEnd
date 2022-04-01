'use strict'
import constants from '../constants/error'
import { RequestModel } from '../models/requestModel'

const errorCodes = constants.errorCodes
const errorMessages = constants.errorMessages

class Errorhandler {
    /**
     * Send the error message to the client
     * @param res
     * @param error
     * @param customCode
     */
    sendFormattedError(req: any, res: any, error: any, httpStatusCode: any = 400) {
        let response = new RequestModel.ErrorResponse()
        response.statusCode = error.statusCode || 400
        response.errorMessage = error.errorMessage || 'FAILED'

        res.status(httpStatusCode).send(response)
    }
}

const successHandler = new Errorhandler()
export default successHandler
