
const { connection } = require("mongoose");
const { MongoClient } = require('mongodb');

//async function
async  function connectDB() {
 
  const uri = "mongodb+srv://keziawaho:kezia1234@x-manage.ut1smz5.mongodb.net/x-manage-db?retryWrites=true&w=majority";


  const client = new MongoClient(uri);

  try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Make the appropriate DB calls
      //await  listDatabases(client);

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}



//this will list you database to test the connection

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};



connectDB().catch(console.error)
module.exports={connectDB}


