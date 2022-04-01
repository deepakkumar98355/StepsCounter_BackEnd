"use strict";
import StepsController from "../controllers/stepController";
import middleware from "../middlewares/middleware";


module.exports = function (app: any) {
  app.use(middleware.headerValidation);
  /**
   * API to check health of the system
   */

  app.get("/api/health", (req: any, res: any) => {
    res.json({
      status: 200,
      msg: "application is up and running",
    });
  });

  app.post("/api/apsis/v1/addTeam", StepsController.addTeam);

  app.get("/api/apsis/v1/getTeam", StepsController.getTeam);

  app.get("/api/apsis/v1/getAllTeams", StepsController.getAllTeams);

  app.post("/api/apsis/v1/UpsertUsers", StepsController.upsertTeamUsers);

};

