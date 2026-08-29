const app = require("./backend/app")
require("dotenv").config();

const ConnectDb=require('./backend/db/db')
const dns = require("dns");
dns.setServers(['1.1.1.1'],['8.8.8.8']);
ConnectDb();

app.listen(3000,()=>{
    console.log("Sever is running on PORT 3000")
})