const express = require("express");
const {
  getAtlasAll,
  addAtlas,
  deleteAtlas,
  updateAtlas,
  addMany,
  getByName,
  getById,
  classicUpdates,
} = require("../controllers/personAtlas");
const atlasRouter = express.Router();

atlasRouter.get("/", getAtlasAll);
atlasRouter.post("/addperson", addAtlas);
// addMany();
// atlasRouter.get("/:name", getByName);
atlasRouter.get("/:_id", getById);
atlasRouter.put("/:id", classicUpdates);
atlasRouter.put("/:id", updateAtlas);
atlasRouter.delete("/:id", deleteAtlas);

module.exports = atlasRouter;
