const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDb  = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlparser:true,
        useUnifiedTopology:true,
    })
    .then(console.log("DB connected Successfully"))
    .catch( (error) =>{
        console.error("DB Facing Connection issues");
        console.log(error);
        process.exit(1);
    })
};

module.exports = connectWithDb;