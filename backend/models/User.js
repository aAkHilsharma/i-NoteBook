const { default: mongoose, Schema } = require("mongoose");

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const user = mongoose.model('user', UserSchema);
user.createIndexes();
module.exports = user;