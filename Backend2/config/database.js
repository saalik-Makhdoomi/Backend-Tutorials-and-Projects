const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() => {
        console.log("DB Connection is Successful");
      })
    .catch((error) => {
        console.log("Issue in DB Connecton");
        console.error(error.message);
        process.exit(1);
    });
}

module.exports = dbConnect;