const req = require("express/lib/request");
const mongo = require("../shared/connect");


exports.signup = async(req , res , next) =>
{ 
try{
  const product= await mongo.db.collection("Products").findOne({roomname:req.body.roomname})
  console.log(product.status);
  // const existUser = await mongo.db.collection("user").findOne({roomname:req.body.roomname})

  
  
 
  if(product.status=="unavailable") 
  {return res.status(400).send({msg:"Room already booked"})}

  else{
    // console.log("else part");

  var data = await mongo.db.collection("user").insertOne(req.body);
  console.log(req.body.roomname);
   
await mongo.db.collection("Products").updateOne({roomname:req.body.roomname},{$set:{status:"unavailable"}})
  console.log("Updated Data")
  res.send(data);
  console.log(data) 
  }
}
catch(err){
  console.log("Error in inserting data")
}

}
exports.getData = async (req ,res , next) =>{
try{
    var response = await mongo.db.collection("user").find().toArray()
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

// await mongo.db.collection("Products").updateOne({roomname
//   :req.body.roomname}),{$set:{status:"unavailable"}}

exports.available = async (req , res , next) =>{
try{
 
  var response = await mongo.db.collection("Products").find({"status":"unavailable"}).toArray()
  console.log("response")
  console.log(response)
  res.send(response);
  

}catch(err)
{
console.error(err);
res.status(500).send(err);
}}
