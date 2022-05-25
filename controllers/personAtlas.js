const Person = require("../models/person");

exports.getAtlasAll = async (req, res) => {
  try {
    const personList = await Person.find();
    res.status(200).send({ msg: "ur person list", personList });
  } catch (error) {
    res.status(500).send("OUPS something went wrong GET");
  }
};

exports.postAtlas = async (req, res) => {
  try {
    const newPerson = await new Person(req.body);
    newPerson.save();
    res.send(newPerson);
  } catch (error) {
    res.status(500).send("OUPS something went wrong POST");
  }
};

exports.deleteAtlas = async (req, res) => {
  try {
    const { id } = req.params;
    Person.findByIdAndDelete(id);
    res.status(200).send("person deleted");
  } catch (error) {
    res.status(500).send("OUPS something went wrong DELETE");
  }
};

exports.updateAtlas = async (req, res) => {
  try {
    const { id } = req.params;
    Person.findByIdAndUpdate(id);
    res.status(200).send("person updated");
  } catch (error) {
    res.status(500).send("OUPS something went wrong UPDATE");
  }
};
