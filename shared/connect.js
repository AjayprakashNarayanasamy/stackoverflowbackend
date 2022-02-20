const {MongoClient} = require("mongodb");
module.exports = {
    db: null,
    async connect ()
    {
        try{
       const connection = await MongoClient.connect("mongodb+srv://toor:toor@cluster0.sz9dl.mongodb.net?retryWrites=true&w=majority");
       this.db = connection.db("Agilisium")
       console.log("COnnection started")
      
       
       
        }
        catch(err)
        {
            console.error(err)
        }


    }
}