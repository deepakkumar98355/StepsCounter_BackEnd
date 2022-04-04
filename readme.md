# REST API

Step Tracker API List 

## Add team will insert a new team record

### Request

`POST /api/apsis/v1/addTeam/`

    curl -i -H 'Accept: application/json' http://localhost:5009/
    
### Headers

Content-Type:application/json
auth_token:p78g7b5t-k46enpnx-5gwjtv65-7pcra7vr-2tu7un6f-6jxgcv9z
channel:WEB
    
### Request Body

{
    "team_name": "Team_K",
    "memberList": [
        {
            "userName": "Test_1",
            "totalSteps": 500
        },
        {
            "userName": "Test_2",
            "totalSteps": 900
        },{
            "userName": "Test_3",
            "totalSteps": 30
        }
    ]
}

### Response

    HTTP/1.1 201 Created
    
   
    Connection: close
    Content-Type: application/json
    Content-Length: 2
    
    
## Get team will return metadata for a valid Team Name

### Request

`GET api/apsis/v1/getTeam?team_name=Team_Z`

    curl -i -H 'Accept: application/json' http://localhost:5009/

    
### Headers

Content-Type:application/json
auth_token:p78g7b5t-k46enpnx-5gwjtv65-7pcra7vr-2tu7un6f-6jxgcv9z
channel:WEB


### Response
{
    "statusCode": 200,
    "data": {
        "team_name": "Team_Z",
        "memberList": [
            {
                "userName": "Test_1",
                "totalSteps": 100
            },
            {
                "userName": "Test_2",
                "totalSteps": 200
            },
            {
                "userName": "Test_3",
                "totalSteps": 30
            }
        ],
        "createdOn": 1649089904600,
        "updatedOn": 1649089904600,
        "isActive": true,
        "totalSteps": 330
    }
}



    
## Get All team will return all the valid teams

### Request

`GET api/apsis/v1/getAllTeams`

    curl -i -H 'Accept: application/json' http://localhost:5009/


    
### Headers

Content-Type:application/json
auth_token:p78g7b5t-k46enpnx-5gwjtv65-7pcra7vr-2tu7un6f-6jxgcv9z
channel:WEB


### Response
{
    "statusCode": 200,
    "data": [
        {
            "team_name": "Team_Z",
            "score": 330
        },
        {
            "team_name": "Team_X",
            "score": 330
        },
        {
            "team_name": "Team_K",
            "score": 1430
        }
    ]
}

    
## Upsert Team Members will update and insert team records

### Request

`POST api/apsis/v1/upsertUsers`

    curl -i -H 'Accept: application/json' http://localhost:5009/

    
### Headers

Content-Type:application/json
auth_token:p78g7b5t-k46enpnx-5gwjtv65-7pcra7vr-2tu7un6f-6jxgcv9z
channel:WEB


### Request Body

{
    "team_name": "Team_Z",
    "userRecord": [
        {
            "userName": "Test_5",
            "totalSteps": 500
        },{
            "userName": "Test_6",
            "totalSteps": 1500
        }
    ]
}

### Response

    HTTP/1.1 201 Created
    
   
    Connection: close
    Content-Type: application/json
    Content-Length: 2

