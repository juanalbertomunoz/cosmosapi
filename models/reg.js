const mongoose = require("mongoose")

const RegShellySchema = new mongoose.Schema(
    {
        type: {type: String, required: true}, 
        mac: {type: String, required: true},
        ubication: {type: String},
        vivienda: {type: String},
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

module.exports = mongoose.model("regshelly", RegShellySchema)