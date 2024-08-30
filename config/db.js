const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


const dbConnection = ()=>{
    mongoose.connect(process.env.MONGODB_URL).then(()=>"Connected to MongoDB").catch((err)=>{
        console.log("DB Connection Failed");
        console.error(err);
        process.exit(1);
    });
}


module.exports = dbConnection;