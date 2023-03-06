const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
//const MONGO_URI = "mongodb+srv://adarsh:nag123@cluster0.nsfvoa7.mongodb.net/resultMSDb?retryWrites=true&w=majority"
const MONGO_URI = "mongodb://rms-mongodb:fHJX5pmbZc0BQgqUFDfUZr8oMiatP2Va4kkjrRJlh2S02nRfbHo03ADBhLaMzpo2OzYNqerokNnKACDboSKSyA==@rms-mongodb.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@rms-mongodb@"
const connectDB = async () => {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const con = mongoose.connection;
    con.on("error", (error) => console.log(error));
    con.once("open", () => console.log(`MongoDB Connected | Host : ${con.host}`))
}

module.exports = connectDB