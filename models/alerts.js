const mongoose = require("mongoose")

const RegAlertSchema = new mongoose.Schema(
    {
        key: {type: String, required: true}, 
        msm: {type: String, required: true},
        mac: {type: String},
        address: {type: String},
        description: {type: String},
        estado: {
            type: Boolean,  //true, false default
            default: false
        },
    },
        
    {
        versionKey: false,
        timestamps: true,
    }
)

module.exports = mongoose.model("regAlert", RegAlertSchema)