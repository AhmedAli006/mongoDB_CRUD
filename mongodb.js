const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient

const connetionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connetionURL,{ useNewUrlParser: true }, (error,client)=>{
  if (error) {
    return console.log('error');
  }  

  const db = client.db(databaseName)


db.collection('users').insertOne({
    name:"ahmed",
    age:22
})

db.collection('users').insertMany([
  {
    name:'doug',
    age:83
  },{
    name:'gunther',
    age:35
  }
])
 db.collection('users').updateOne({
  _id: new mongodb.ObjectId("62f4a696d2d3f741bbf93036")
},
{
  $set:{
    name:"ali"
  }
}
).then((result)=>{
  console.log(result);
}).catch((error)=>{
  console.log(error);
})



}) 