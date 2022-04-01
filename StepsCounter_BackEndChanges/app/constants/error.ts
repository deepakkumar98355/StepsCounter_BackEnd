export = {
  errorCodes: {
    BAD_REQUEST: 400.01,
    INVALID_TOKEN: 401,
    UNAUTHORIZED: 401,
    ACCESS_RESTRICTED: 403,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    SERVER_TIMEOUT: 408,
    CONFLICT: 409,
    EXPECTATION_FAILED: 417,
    VALIDATION_ERROR: 400.32,
    NO_DATA_FOUND_ERROR: 433,
    VERSION_ERROR: 434,
    SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    DB_ERROR: 503,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    MONGO_DUPLICATE_RECORD: 11000,
  },
  errorMessages: {
    INVALID_REQ_PARAM: 'Error! Required parameters missing ',
    GENERIC_ERROR: 'Bad Request: Error 400',
    ALREADY_EXITS: 'Error! Team already exists',
    NO_RECORD_FOUND: 'Error! No record found'
  },
}
