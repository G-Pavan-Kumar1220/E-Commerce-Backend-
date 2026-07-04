const express = require("express")
const cors = require("cors")
require("dotenv").config()
const dataabase = require('./DB/dataBase')
const routes = require('./routes/userLoginRoute')
const productsRoute = require("./routes/productsRoute")
const cartRoutes = require("./routes/cart Routes")
const orderRoute = require('./routes/orderRoute')

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 4000

// connecting to the database

dataabase().then(()=>{
    console.log("databese Connected");
    
});

// routes

app.use('/api',routes)
app.use('/api/products',productsRoute)
app.use('/api/cart',cartRoutes)
app.use('/api/orders',orderRoute)


app.listen(PORT,()=>{
    console.log(`server run at port${PORT}`);
    
})

  