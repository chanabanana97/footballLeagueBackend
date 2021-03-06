var express = require("express");
var router = express.Router();
const players_utils = require("./utils/players_utils");

router.get("/playerFullDetails/:playerID", async (req, res, next) => {
    try {
      const player_details = await players_utils.getPlayersFullInfo(
        [req.params.playerID]
      );
      res.send(player_details);
    } catch (error) {
      next(error);
    }
  });
  
  module.exports = router;
  