const Person = require("../models/person");

exports.getAtlasAll = async (req, res) => {
  try {
    const personList = await Person.find();
    res.status(200).send({ msg: "ur person list", personList });
  } catch (error) {
    res.status(500).send("OUPS something went wrong GET");
  }
};

//13. Create Many Records with model.create()
const arrayOfPeople = [
  {
    name: "souad",
    age: 43,
    email: "souad@gmail.com",
    favouritFoods: ["icecream", "strawberry", "pasta"],
  },
  {
    name: "zohra",
    age: 68,
    email: "zohra@gmail.com",
    favouritFoods: ["couscous", "green beans", "milk"],
  },
  {
    name: "fatma",
    age: 33,
    email: "fatma@gmail.com",
    favouritFoods: ["pasta", "cheese", "pizza"],
  },
];
//i comment the ligne below to avoid the repetition inside my DB
//exports.addMany = Person.create(arrayOfPeople);

exports.addAtlas = async (req, res) => {
  try {
    const newPerson = await new Person(req.body);
    newPerson.save();
    res.send(newPerson);
  } catch (error) {
    res.status(500).send("OUPS something went wrong POST");
  }
};

exports.getByName = async (req, res) => {
  try {
    let { name } = req.params;
    const requestedPerson = await Person.findOne({ name: name });
    res.status(200).send({ msg: "ur requested Person", requestedPerson });
  } catch (err) {
    console.error("get person name crashed => " + err);
    //send an error msg
    res.status(500).send("u could not get this person");
  }
};

//16.Use model.findById() to Search Your Database By _id
exports.getById = async (req, res) => {
  try {
    let { _id } = req.params;
    const requestedIdPerson = await Person.findById({ _id });
    res.status(200).send({ msg: "ur requested id Person", requestedIdPerson });
  } catch (err) {
    console.error("get person name crashed => " + err);
    //send an error msg
    res.status(500).send("u could not get this person");
  }
};

//17.Perform Classic Updates by Running Find, Edit, then Save
exports.classicUpdates = async (req, res) => {
  try {
    let { _id } = req.params;
    let foodToAdd = "hamburger";
    const updateData = await Person.findById({ _id });
    // console.log(updateData);
    updateData.favouritFoods.push(foodToAdd);
    updateData.save();
    res.status(200).send({ msg: "food added ", updateData });
  } catch (err) {
    console.error("add food crashed => " + err);
    //send an error msg
    res.status(500).send("u could not get this person");
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
exports.deleteAtlas = async (req, res) => {
  try {
    const { id } = req.params;
    Person.findByIdAndDelete(id);
    res.status(200).send("person deleted");
  } catch (error) {
    res.status(500).send("OUPS something went wrong DELETE");
  }
};
