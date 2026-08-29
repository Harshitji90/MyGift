// const app = require("./backend/app")
// require("dotenv").config();

// const ConnectDb=require('./backend/db/db')
// const dns = require("dns");
// dns.setServers(['1.1.1.1'],['8.8.8.8']);
// ConnectDb();

// app.listen(3000,()=>{
//     console.log("Sever is running on PORT 3000")//
// })

const app = require("./backend/app");

require("dotenv").config();

const ConnectDb = require("./backend/db/db");

const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

ConnectDb();

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on PORT ${PORT}`);
});