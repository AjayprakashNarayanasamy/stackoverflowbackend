const express = require("express");
const mongo = require("./shared/connect")
const productRouter = require("./routes/products")
const registerRouter = require("./routes/register")
const app = express();

app.use(express.json());
mongo.connect()
app.use("/product",productRouter)
app.use("/register",registerRouter)
const port = process.env.PORT || 3000;
app.listen(port , function()
{
    console.log("Started")
});



//mongo.db.collection("Product").update(roomname:{req.body.roomname},${set:})

//http://localhost:3000/register/signup => rooms already booked
// _id
// :
// 620f2ec7aaab751512ddb19f
// name
// :
// "AjayNew Data"
// age
// :
// "231"
// roomname
// :
// "rm2deluxe"
//http://localhost:3000/register/gett => userdetails
//http://localhost:3000/register/avail => available rooms