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
                    type: Number,
                    requerided: true
                    },
            longitud: {
                   type: Number,
                    requerired: true
                 }
             },
        estado: {
                type: Boolean,
                default: false
        }
            },
             {
        versionKey: false,
        timestamps: true,
             }
)

module.exports = mongoose.model("homes", HomeScheme)