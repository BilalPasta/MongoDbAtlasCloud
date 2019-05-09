

var MongoClient = require('mongodb').MongoClient;
var url = "enter-your-database-url";

// databasename is bilal
// collection names is bilal,order and product
//check connection
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("sample_airbnb").collection("listingsAndReviews");
//   // perform actions on the collection object
//   console.log(collection);
//   client.close();
// });





//create collection 
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("bilal");
//     dbo.createCollection("bilal", function(err, res) {
//       if (err) throw err;
//       console.log("Collection created!");
//       db.close();
//     });
//   });
//data insert


// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("bilal");
//   var myobj = { name: "Company Inc", address: "Highway 37" };
//   dbo.collection("bilal").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });

// });


//insert many data using array


// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("bilal");
//     var myobj = [
//         { name: 'John', address: 'Highway 71'},
//         { name: 'Peter', address: 'Lowstreet 4'},
//         { name: 'Amy', address: 'Apple st 652'},
//         { name: 'Hannah', address: 'Mountain 21'},
//         { name: 'Michael', address: 'Valley 345'},
//         { name: 'Sandy', address: 'Ocean blvd 2'},
//         { name: 'Betty', address: 'Green Grass 1'},
//         { name: 'Richard', address: 'Sky st 331'},
//         { name: 'Susan', address: 'One way 98'},
//         { name: 'Vicky', address: 'Yellow Garden 2'},
//         { name: 'Ben', address: 'Park Lane 38'},
//         { name: 'William', address: 'Central st 954'},
//         { name: 'Chuck', address: 'Main Road 989'},
//         { name: 'Viola', address: 'Sideway 1633'}    ];
//     dbo.collection("order").insertMany(myobj, function(err, res) {
//       if (err) throw err;
//       console.log("Number of documents inserted: " + res.insertedCount);
//       db.close();
//     });
//   });

//findone used just like selection but return only 1st doc

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("bilal");
//   dbo.collection("bilal").findOne({}, function(err, result) {
//     if (err) throw err;
//     console.log(result.name);
//     db.close();
//   });
// });



//find used for select al data such as select * from tablename 


// MongoClient.connect(url,(err,client)=>{
//   if (err) throw err;

//  let   db=client.db('bilal');
//  db.collection('bilal').find({},{projection:{_id:0}}).toArray((err,result)=>{
//   if (err) throw err;

//    console.log(result);
//  })
  
// })





//query 

// MongoClient.connect(url,(err,client)=>{
//   if (err) throw err
//   let db=client.db('bilal');
//   var query = { address: "Park Lane 38" };

//   db.collection('bilal').find(query).toArray((err,result)=>{
//     if (err) throw err
// console.log(result);
//   })
// })


//Find documents where the address starts with the letter "S":

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("bilal");
//   var query = { address: /S^/ };
//   dbo.collection("bilal").find(query).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });



//Sort the result alphabetically by name:

 

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("bilal");
//   var mysort = { name: 1 };
//   dbo.collection("bilal").find().sort(mysort).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });


// Sort the result reverse alphabetically by name:


// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("bilal");
//   var mysort = { name: -1 };
//   dbo.collection("bilal").find().sort(mysort).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });



// Delete the document with the address "Mountain 21":



// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("bilal");
//     var myquery = { address: 'Mountain 21' };
//     dbo.collection("bilal").deleteOne(myquery, function(err, obj) {
//       if (err) throw err;
//       console.log("1 document deleted");
//       db.close();
//     });
//   });


// Delete all documents were the address starts with the letter "O":

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("bilal");
//     var myquery = { address: /^O/ };
//     dbo.collection("bilal").deleteMany(myquery, function(err, obj) {
//       if (err) throw err;
//       console.log(obj.result.n + " document(s) deleted");
//       db.close();
//     });
//   });


// Delete the "bilal" table:

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("bilal");
//     dbo.collection("bilal").drop(function(err, delOK) {
//       if (err) throw err;
//       if (delOK) console.log("Collection deleted");
//       db.close();
//     });
//   });



//   Delete the "abc" collection, using dropCollection():

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("bilal");
//     dbo.dropCollection("abc", function(err, delOK) {
//       if (err) throw err;
//       if (delOK) console.log("Collection deleted");
//       db.close();
//     });
//   });

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("bilal");
//     var myquery = { address: "Valley 345" };
//     var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
//     dbo.collection("bilal").updateOne(myquery, newvalues, function(err, res) {
//       if (err) throw err;
//       console.log("1 document updated");
//       db.close();
//     });
//   });

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("bilal");
//     var myquery = { address: /^S/ };
//     var newvalues = {$set: {name: "Minnie"} };
//     dbo.collection("bilal").updateMany(myquery, newvalues, function(err, res) {
//       if (err) throw err;
//       console.log(res.result.nModified + " document(s) updated");
//       db.close();
//     });
//   });



//   To limit the result in MongoDB, we use the limit() method.
// The limit() method takes one parameter, a number defining how many documents to return.

// Limit the result to only return 5 documents:



// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("bilal");
//     dbo.collection("bilal").find().limit(5).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
//   });




// MongoDB is not a relational database, but you can perform a left outer join by using the $lookup stage.
// The $lookup stage lets you specify which collection you want to join with the current collection, and which fields that should match.
// Consider you have a "orders" collection and a "products" collection:

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("bilal");
//     var myobj = [
//         { _id: 154, name: 'Chocolate Heaven' },
//         { _id: 155, name: 'Tasty Lemons' },
//         { _id: 156, name: 'Vanilla Dreams' }    ];
//     dbo.collection("product").insertMany(myobj, function(err, res) {
//       if (err) throw err;
//       console.log("Number of documents inserted: " + res.insertedCount);
//       db.close();
//     });                       
//   });


//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("bilal");
//     var myobj = [
//         { _id: 1, product_id: 154, status: 1 }

//           ];
//     dbo.collection("order").insertMany(myobj, function(err, res) {
//       if (err) throw err;
//       console.log("Number of documents inserted: " + res.insertedCount);
//       db.close();
//     });
//   });




// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("bilal");
//     dbo.collection('order').aggregate([
//       { $lookup:
//          {
//            from: 'product',
//            localField: 'product_id',
//            foreignField: '_id',
//            as: 'orderdetails'
//          }
//        }
//       ]).toArray(function(err, res) {
//       if (err) throw err;
//       console.log(JSON.stringify(res));
//       db.close();
//     });
//   });