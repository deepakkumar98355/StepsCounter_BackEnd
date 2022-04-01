"use strict";

import { RequestModel } from "../../models/requestModel";

class moduleHelper {

    /**
   * module helper for inserting team data
   * @param {RequestModel.Users} Users
   * @returns {number} total score of the team
   */

    async calculateTotalSteps(usersData: Array<RequestModel.Users>) {
        try {
            let totalTeamScore: number = 0

            for (let user of usersData) {
                totalTeamScore = user.totalSteps + totalTeamScore
            }

            return totalTeamScore
        } catch (error) {
            throw Error(JSON.stringify(error));
        }
    }
}

const ModuleHelper = new moduleHelper();
export default ModuleHelper;
