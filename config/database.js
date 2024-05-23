const mongoose = require('mongoose')

require('dotenv').config();

const connectWithDb = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(console.log("Connection successfully"))
    .catch( (error) => {
        console.log("Faild to connect to database");
        console.log(error);
        process.exit(1);
    })
}

module.exports = connectWithDb;