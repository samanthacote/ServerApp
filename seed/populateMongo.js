import {shoes} from '../data.js';
import {leotards} from '../data.js';
import {costumes} from '../data.js';

var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, client) {
  if (err) throw err;
  console.log("Database created!");
  const db = client.db("mydb");
  db.collection("shoes").insertMany(shoes, function(err, res) {
    if (err) throw err;
    console.log("The shoes have been added!");
  });
  db.collection("leotards").insertMany(leotards, function(err, res) {
    if (err) throw err;
    console.log("The leotards have been added!");
  });
  db.collection("costumes").insertMany(costumes, function(err, res) {
    if (err) throw err;
    console.log("The costumes have been added!");
  });
  client.close();
});