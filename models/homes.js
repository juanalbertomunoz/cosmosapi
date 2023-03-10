const mongoose = require("mongoose")

const HomeScheme = new mongoose.Schema(
    {
       key: {
             type: String,
             unique: true,
             requerided: true
             },
        address: {
                type: String,
                requerided: true
                },
        gps: {
            latitud: {
                    type: String,
                    requerided: true
                    },
            longitud: {
                   type: String,
                    requerired: true
                 }
             }
            },
             {
        versionKey: false,
        timestamps: true,
             }
)

module.exports = mongoose.model("homes", HomeScheme)