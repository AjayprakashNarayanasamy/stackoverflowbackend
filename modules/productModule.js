//Rooms
const { ObjectId } = require("mongodb")
var mongo = require("../shared/connect")

module.exports.getProduct = async (req ,res , next) =>{
try{
    var response = await mongo.db.collection("Products").find().toArray()
    console.log("response")
    console.log(response)
    res.send(response);
    // {
    //     "seatsavailable":"300",
    //     "amenities":"NON - AC",
    //     "costperhour":"100",
    //     "date":"17-02-2021",
    //     "starttime":"04:00 AM",
    //     "endtime":"02:00 PM",
    //     "roomid":"rm1",
    //     "status":"NOT-Available",
    //     "roomname":"rm1deluxe",
    //     "availabilty":"0"
        
    // }


}catch(err)
{
console.error(err);
res.status(500).send(err);
}
}

module.exports.createProduct = async(req , res , next) =>
{
    try{
        var response = await mongo.db.collection("Products").insertOne(req.body)
        res.send(response)

    }catch(err)
    {
console.error(err);
res.status(500).send(err);
    }
}
module.exports.updateProduct = async (req , res , next) =>
{
    try{
           var response = await mongo.db.collection("Products").updateOne({_id:ObjectId(req.params.id)} , {$set:{...req.body}}) 
           res.send(response)
    }catch(err)
    {
        console.error(err);
        res.status(500).send(err); 
    }
}
module.exports.deleteProduct = async (req , res , next) =>
{
    try{
           var response = await mongo.db.collection("Products").remove({_id:ObjectId(req.params.id)}) 
           res.send(response)
    }catch(err)
    {
        console.error(err);
        res.status(500).send(err); 
    }
}
