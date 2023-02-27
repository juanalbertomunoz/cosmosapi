const mongoose = require("mongoose")

const RegShellySchema = new mongoose.Schema(
    {
        nameZone: {type: String, required: true}, 
        // addressZone: {type: String, required: true}, 
        id_User: {type: String, required: true},
        gps: {
            latitud:{
                type: Number, 
                requerired: true
            }, 
            longitud:{
                type: Number, 
                requerired: true
            }
            
        },  //longitude, latitude
        valor: {type: Number, required: false},//$
        tipo: {type: String, required: false}, //car, motocicle, bicycle, scooter
        dispo: {type: String, required: false}, //hour, day, week, month
        photoZone: {type: String, required: false},
        estado: {
            type: Boolean,  //true, false default
            default: false
        }


    },
    {
        versionKey: false,
        timestamps: true,
    }
)

module.exports = mongoose.model("regshelly", RegShellySchema)