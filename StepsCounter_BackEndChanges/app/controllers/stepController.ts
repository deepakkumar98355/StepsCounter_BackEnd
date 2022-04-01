"use strict";

import StepsModule from "../modules/userModule/stepModule";
import successHandler from "../handler/successHandler";
import errorHandler from "../handler/errorHandler";
import { RequestModel } from "../models/requestModel";
import cacheService from "../utils/cache/cacheService";

const successCodes = require("../constants/success").SuccessCodes;
const successMessages = require("../constants/success").SuccessMessages;
const errorCodes = require("../constants/error").errorCodes;
const errorMessages = require("../constants/error").errorMessages;

let error = new RequestModel.ErrorResponse();


//Step controller for initial request processing
class StepsController {
    /**
     * API to Get all teams
     * @param {string} team_type
     * @returns response status as 200 if success
     * @returns list of all team data
     */

    async getAllTeams(req: any, res: any) {
        try {
            /* 
                By default will send only active teams data
                team_type will be 'Active' || 'INACTIVE'
            */

            let team_type: string = req.query && req.query.team_type ? req.query.team_type : 'Active'

            if (team_type) {
                let result = await StepsModule.getAllTeamData(team_type);

                if (result) {
                    return successHandler.sendFormattedSuccess(req, res, result, "", successCodes.SUCCESS);
                } else {
                    error.statusCode = errorCodes.NOT_FOUND;
                    error.errorMessage = errorMessages.NO_RECORD_FOUND;
                    return errorHandler.sendFormattedError(req, res, error);
                }
            } else {
                error.statusCode = errorCodes.VALIDATION_ERROR;
                error.errorMessage = errorMessages.INVALID_REQ_PARAM;
                return errorHandler.sendFormattedError(req, res, error);
            }
        } catch (error) {
            console.log("error in sendOtp", error);
            return errorHandler.sendFormattedError(req, res, error);
        }
    }

    async addTeam(req: any, res: any) {
        try {

            let createTeam: RequestModel.CreateTeam = new RequestModel.CreateTeam();
            createTeam = req.body

            const isTeamExists = await cacheService.hasValueForKey(createTeam.team_name)

            if (!isTeamExists && createTeam.team_name) {
                let response = await StepsModule.insertTeamData(createTeam)

                if (response) {
                    return successHandler.sendFormattedSuccess(req, res, "", successMessages.OPERATION_SUCCESS, successCodes.CREATED);
                } else {
                    error.statusCode = errorCodes.BAD_REQUEST;
                    error.errorMessage = errorMessages.GENERIC_ERROR;
                    return errorHandler.sendFormattedError(req, res, error);
                }
            } else {
                error.statusCode = errorCodes.VALIDATION_ERROR;
                error.errorMessage = errorMessages.ALREADY_EXITS;
                return errorHandler.sendFormattedError(req, res, error);
            }
        } catch (error) {
            console.log("error in addTeam", error);
            return errorHandler.sendFormattedError(req, res, error);
        }
    }

    /**
     * API to Get a team
     * @param {number} team_id
     * @returns response status as 200 if success
     * @returns list of all team data
     */

    async getTeam(req: any, res: any) {
        try {
            let team_name: string = req.query.team_name || ''

            if (team_name) {
                let response = await StepsModule.getTeamData(team_name);

                if (response) {
                    return successHandler.sendFormattedSuccess(req, res, response, "", successCodes.SUCCESS);
                } else {
                    error.statusCode = errorCodes.BAD_REQUEST;
                    error.errorMessage = errorMessages.NO_RECORD_FOUND;
                    return errorHandler.sendFormattedError(req, res, error);
                }
            } else {
                error.statusCode = errorCodes.VALIDATION_ERROR;
                error.errorMessage = errorMessages.INVALID_REQ_PARAM;
                return errorHandler.sendFormattedError(req, res, error);
            }
        } catch (error) {
            console.log("error in sendOtp", error);
            return errorHandler.sendFormattedError(req, res, error);
        }
    }

    async upsertTeamUsers(req: any, res: any) {
        try {

            let userRecord: RequestModel.Users = new RequestModel.Users();

            userRecord = req.body.userRecord || null
            const team_name = req.body.team_name || null

            if (userRecord && team_name) {
                let response = await StepsModule.updateTeamUsers(team_name, userRecord);

                if (response) {
                    return successHandler.sendFormattedSuccess(req, res, "", successMessages.OPERATION_SUCCESS, successCodes.CREATED);
                } else {
                    error.statusCode = errorCodes.BAD_REQUEST;
                    error.errorMessage = errorMessages.INVALID_REQ_PARAM;
                    return errorHandler.sendFormattedError(req, res, error);
                }
            }

            error.statusCode = errorCodes.VALIDATION_ERROR;
            error.errorMessage = errorMessages.ALREADY_EXITS;
            return errorHandler.sendFormattedError(req, res, error);
        } catch (error) {
            console.log("error in addTeam", error);
            return errorHandler.sendFormattedError(req, res, error);
        }
    }
}

const stepsController = new StepsController();
export default stepsController;
