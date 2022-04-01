'use strict'

class SuccessHandler {
    /**
     * General function to format the response message
     * @param res  ServerResponse Object
     * @param dataResult Endpoint's expected data
     * @param message Additional message to be shown
     */

    sendFormattedSuccess(req: any, res: any, dataResult: any, message: any, customCode: any = 200) {
        var response = Object()
        response.statusCode = customCode
        //response.message = message || "SUCCESS";
        if (dataResult && dataResult != null) {
            if (dataResult.data) {
                response.data = dataResult.data
            } else {
                response.data = dataResult
            }
        }

        res.status(response.statusCode).send(response)
    }
}

const successHandler = new SuccessHandler()
export default successHandler
