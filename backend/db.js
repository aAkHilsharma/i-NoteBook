const { default: mongoose } = require("mongoose");

const mongoURI = "mongodb://localhost:27017/inotebook"
mongoose.set('strictQuery', true);
const connectToMongo= ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connection success!!");
    })
}
module.exports = connectToMongo;