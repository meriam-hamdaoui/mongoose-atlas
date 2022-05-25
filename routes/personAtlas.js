const express = require("express");
const {
  getAtlasAll,
  postAtlas,
  deleteAtlas,
  updateAtlas,
} = require("../controllers/personAtlas");
const atlasRouter = express.Router();

atlasRouter.get("/", getAtlasAll);
atlasRouter.post("/", postAtlas);
atlasRouter.delete("/:id", deleteAtlas);
atlasRouter.put("/:id", updateAtlas);

module.exports = atlasRouter;
