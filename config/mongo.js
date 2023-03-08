require('dotenv').config();
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const uri = "mongodb+srv://" + process.env.USER + ":"+ process.env.PASSWORD + "@cluster0.qrr7cbm.mongodb.net/?retryWrites=true&w=majority";

const dbConnect = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("**** DB CONNECTED ****");
  } catch (error) {
    console.log("**** ERROR DB CONNECTION ****", error);
  }
};

module.exports = dbConnect;