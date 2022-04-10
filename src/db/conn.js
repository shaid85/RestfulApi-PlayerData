const  mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/olympics")
.then(()=> console.log("Connection Successful"))
.catch(()=> console.log("No Connection"))

