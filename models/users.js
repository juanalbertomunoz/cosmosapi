const mongoose = require("mongoose")

const UserScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type:String
        },
        idUser: {
            type: Number,
            unique: true
        },
        phone: {
            type: Number
        },
        role: {
            type: String,
            default: "user"
        }
    },
    {
        timestamp: true,
        versionKey: false
    }
)

module.exports = mongoose.model("users", UserScheme)