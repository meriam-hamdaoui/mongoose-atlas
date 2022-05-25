require("dotenv").config();
const mongoose = require("mongoose");

const connectAtlas = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connexion successeded");
  } catch (error) {
    console.error("DB connexion failed => " + err);
  }
};

module.exports = connectAtlas;
