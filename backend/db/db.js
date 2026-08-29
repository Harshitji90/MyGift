const mongoose = require('mongoose')

async function ConnectDb(){
    try{
        // await  mongoose.connect('mongodb+srv://Website2:Web12345@cluster1.t7fvlxk.mongodb.net/GiftCards')
        await mongoose.connect('mongodb+srv://Website2:mykey12345@cluster1.t7fvlxk.mongodb.net/GiftCards')
        console.log("Database Connected")
    }
    catch(error){
        console.error("MongoDB CONNECTION FAILED:", error);
        process.exit(1);
    }
}

module.exports=ConnectDb;