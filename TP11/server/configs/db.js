const mongoose = require('mongoose')

module.exports = async () =>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/exampledb', {
            autoIndex: true,
            serverSelectionTimeoutMS: 30000
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.log("Mongoose: ", err);
    }
}