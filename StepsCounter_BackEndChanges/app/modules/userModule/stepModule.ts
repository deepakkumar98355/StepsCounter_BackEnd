"use strict";

import { RequestModel } from "../../models/requestModel";
import cacheService from "../../utils/cache/cacheService";
import ModuleHelper from "../moduleHelper/moduleHelper";

class stepsModule {
  /**
   * @param {string} team_type
   * @returns Array<Object> of Team Data with steps count
   */
  async getAllTeamData(team_type: string) {
    try {
      let finalList = []
      let allteam_names = await cacheService.getAllKeys()

      const promises = []

      //Creating a list of team names and fetching data in parallel

      for (let team_name of allteam_names) {
        promises.push(cacheService.getValueForKey(team_name))
      }

      const results = await Promise.all(promises.map((p) => p.catch((e) => e)));
      const allTeamRecords = results.filter((result) => !(result instanceof Error));

      /* 
          can validated based on team_type and filter out only active teams
      */

      if (allTeamRecords.length > 0) {
        for (let teamData of allTeamRecords) {
          let team_name = teamData.team_name
          let score = 0

          for (let memberRecord of teamData.memberList) {
            score = memberRecord.totalSteps + score
          }

          finalList.push({ team_name, score })
        }
      }

      console.log(finalList)


      return finalList
    } catch (error) {
      throw Error(JSON.stringify(error));
    }
  }

  /**
   * module helper for inserting team data
   * @param {RequestModel.CreateTeam} CreateTeam
   * @returns {boolean} true in case of success
   */
  async insertTeamData(createTeamData: RequestModel.CreateTeam) {
    try {
      createTeamData.createdOn = Date.now()
      createTeamData.updatedOn = Date.now()

      createTeamData.isActive = true

      createTeamData.totalSteps = await ModuleHelper.calculateTotalSteps(createTeamData.memberList)

      const isInserted = cacheService.setValueForKey(createTeamData.team_name, createTeamData)

      return isInserted

    } catch (error) {
      throw Error(JSON.stringify(error));
    }
  }

  async getTeamData(team_name: string) {
    try {

      let teamData: RequestModel.CreateTeam = new RequestModel.CreateTeam();

      teamData = await cacheService.getValueForKey(team_name)

      /* 
          Will only send active records
      */
      if (teamData && teamData.isActive) {
        return teamData;
      }

      return null

    } catch (error) {
      throw Error(JSON.stringify(error));
    }
  }

  async updateTeamUsers(team_name: string, newMembersList: any) {
    let result: boolean = false

    let teamData = await cacheService.getValueForKey(team_name)

    /* 
        If team data exists will insert/update member details
    */

    if (teamData) {
      let currentMemberList = teamData.memberList

      Array.prototype.push.apply(currentMemberList, newMembersList);

      teamData.memberList = currentMemberList
      teamData.totalSteps = await ModuleHelper.calculateTotalSteps(currentMemberList)

      const isInserted = cacheService.setValueForKey(team_name, teamData)

      result = isInserted

    } else {
      result = false
    }


    return result

  }
}

const StepsModule = new stepsModule();
export default StepsModule;
