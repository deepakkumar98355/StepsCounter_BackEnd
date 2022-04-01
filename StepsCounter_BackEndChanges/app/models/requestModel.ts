'use strict'


export namespace RequestModel {
    export class CreateTeam {
        team_id: number
        team_name: string
        createdOn: number
        updatedOn: number
        totalSteps: number
        isActive: boolean
        memberList: Array<Users>
    }

    export class Users {
        userName: string
        totalSteps: number
        createdOn: Date
        updatedOn: Date
        isActive: boolean
    }

    export class TeamList {
        team_name: string
        total_steps: number
    }

    export class ErrorResponse {
        statusCode: number
        errorMessage: string
    }
}
