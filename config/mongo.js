const mongoose = require ("mongoose")
require('dotenv').config()


const uri = "mongodb+srv://" + process.env.USER + ":"+ process.env.PASSWORD + "@cluster0.qrr7cbm.mongodb.net/?retryWrites=true&w=majority";

const dbConnect = async () => {
    mongoose.set('strictQuery', false);
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    }).then(()=> console.log('DB connected'))
      .catch((err)=> console.log(err));
  }

module.exports = dbConnect