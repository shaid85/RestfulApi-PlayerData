// Restful Api Test by PostMan app
const express = require("express")
require("./db/conn")

const app = express()
const port = process.env.PORT || 3000

// Create Router
const mensRouter = require("./routers/mendata")

app.use(express.json())
app.use(mensRouter)

//  Connection 
app.listen(port, () => {
    console.log(`Connection is live at port ${port}`);
})