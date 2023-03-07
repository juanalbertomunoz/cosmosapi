const uri = "mongodb+srv://" + process.env.USER + ":"+ process.env.PASSWORD + "@cluster0.qrr7cbm.mongodb.net/?retryWrites=true&w=majority";

const mongoose = require ("mongoose")
require('dotenv').config()

const dbConnect = () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(uri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
                
        }, 
        (err, res) => {
            if(!err){
                console.log('**** DB CONNECTED ****')
            }else{
                console.log('**** ERROR DB CONNECTION ****')
            }
    
        }
    )
}

module.exports = dbConnect