'use strict'

class Middleware {
    /**
     * Validates the header Request
     * @param req Http request
     * @param res Http response
     * @param next
     */
    headerValidation(req: any, res: any, next: any) {
        let validRequest: boolean

        if (req.headers) {
            const auth_token = process.env.auth_token
            if (req.headers.channel && (req.headers.channel === 'WEB')) {
                if (req.headers.auth_token === auth_token) {
                    validRequest = true
                } else {
                    console.log('*** middleware validation Failed ***' + ' with URL' + req.url)

                    validRequest = false
                }
            } else {
                console.log('*** middleware validation Failed ***' + ' with URL' + req.url)

                validRequest = false
            }
        } else {
            console.log('*** middleware validation Failed ***' + ' with URL' + req.url)

            validRequest = false
        }


        if (!validRequest) {
            return res.status(401).json({
                statusCode: 401,
                errorMessage: 'API is not authorized'
            })
        } else {
            next()
        }
    }
}

const middleware = new Middleware()
export default middleware
