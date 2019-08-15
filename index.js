import {shoes} from './data.js';
import {leotards} from './data.js';
import {costumes} from './data.js';

const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));


//connect to mongo
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/mydb";

// helper functions
const isValidShoe = (id) => {
    // MongoClient.connect(url, function(err, client) {
    //     if(err) throw err;
    //     const db = client.db("mydb");
    //     db.collection("shoes").find({}, {projection: {id: 1}}).toArray(function(err, result) {
    //         if(err) throw err;
    //         const shoe_ids = result.map(item => item.id);
    //         client.close();
    //         console.log(shoe_ids.includes(id) ? true : false);
    //         return shoe_ids.includes(id) ? true : false;
    //     })
    // })
    return((['flatSlippers', 'blochPointe', 'grishkoPointe'].includes(id)) ? true : false)
};

const isValidLeo = (id) => {
    return((['meshBack', 'longSleeve', 'velvetRed'].includes(id)) ? true : false)
};

const isValidCostume = (id) => {
    return((['whiteTulle', 'redTutu', 'lilacTutu'].includes(id)) ? true : false)
};

//CREATE A NEW REVIEW FOR A SHOE
app.post('/shoes/:id/reviews/add', (req, res) => {
    let newReview = {
        user: req.body.user, 
        text: req.body.text,
        date: req.body.date,
        id: req.body.id,
    };
    console.log("Here in the post call!");
    MongoClient.connect(url, function(err, client) {
        if(err) throw err;
        const db = client.db("mydb");
        db.collection("shoes").updateOne({id: req.params.id}, { $push: {reviews: newReview} }, function(err, res) {
            if(err) throw err;
        });
        client.close();
    });
});


//GET A SHOE's REVIEWS
app.get('/shoes/:id/reviews/', (req, res) => {
    MongoClient.connect(url, function(err, client) {
        if (err) throw err;
        const db = client.db("mydb");
        if(isValidShoe(req.params.id)){
            db.collection("shoes").find({id: req.params.id}).toArray(function(err, result) {
                if (err) throw err;
                res.json(result[0].reviews);
                client.close();
              });
        }
        else{
            res.status(400).send("A product with that ID does not exist yet. To see the list of active shoes, see /shoes/.");  
        }
    })
});

//GET A LEOTARD's REVIEWS
app.get('/leotards/:id/reviews/', (req, res) => {
    MongoClient.connect(url, function(err, client) {
        if (err) throw err;
        const db = client.db("mydb");
        if(isValidLeo(req.params.id)){
            db.collection("leotards").find({id: req.params.id}).toArray(function(err, result) {
                if (err) throw err;
                res.json(result[0].reviews);
                client.close();
              });
        }
        else{
            res.status(400).send("A product with that ID does not exist yet. To see the list of active leotards, see /leotards/.");  
        }
    })
});

//GET A COSTUME's REVIEWS
app.get('/costumes/:id/reviews/', (req, res) => {
    MongoClient.connect(url, function(err, client) {
        if (err) throw err;
        const db = client.db("mydb");
        if(isValidCostume(req.params.id)){
            db.collection("costumes").find({id: req.params.id}).toArray(function(err, result) {
                if (err) throw err;
                res.json(result[0].reviews);
                client.close();
              });
        }
        else{
            res.status(400).send("A product with that ID does not exist yet. To see the list of active costumes, see /costumes/.");  
        }
    })
});
    

// //GET A SHOE (without using mongo data)
// app.get('/shoes/:id*?/', (req, res) => {
//     if(req.params.id){
//         if(isValidShoe(req.params.id)){
//             const shoe = shoes.find((obj) => obj.id === req.params.id);
//             res.json(shoe)
//         }
//         else {
//             res.status(400).send("That product does not exist. To view the list of products, visit localhost:3000/shoes/.");
//         }
//     }
//     else{
//         res.json({shoes});
//     }
// }
// );

//GET A SHOE (using mongo data!!)
app.get('/shoes/:id*?/', (req, res) => {
    MongoClient.connect(url, function(err, client) {
        if(err) throw err;
        const db = client.db("mydb");
        if(req.params.id){
            if(isValidShoe(req.params.id)){
                db.collection("shoes").find({id: req.params.id}).toArray(function(err, result) {
                    if (err) throw err;
                    res.json(result[0]);
                    client.close();
                  });
            }
            else {
                res.status(400).send("That product does not exist. To view the list of products, visit localhost:3000/shoes/.");
            }
        }
        else{
            db.collection("shoes").find({}).toArray(function(err, result) {
                if (err) throw err;
                res.json(result);
                client.close();
              });
        }
    });
});      


// //GET A LEOTARD
// app.get('/leotards/:id*?/', (req, res) => {
//     if(req.params.id){
//         if(isValidLeo(req.params.id)){
//             const leo = leotards.find((obj) => obj.id === req.params.id);
//             res.json(leo)
//         }
//         else {
//             res.status(400).send("That product does not exist. To view the list of products, visit localhost:3000/leotards/.");
//         }
//     }
//     else{
//         res.json({leotards});
//     }
// }
// );

//GET A LEOTARD (with mongo data!!)
app.get('/leotards/:id*?/', (req, res) => {
    MongoClient.connect(url, function(err, client) {
        if(err) throw err; 
        const db = client.db("mydb");
        if(req.params.id){
            if(isValidLeo(req.params.id)){
                db.collection("leotards").find({id: req.params.id}).toArray(function(err, result) {
                    if (err) throw err;
                    console.log(result);
                    res.json(result[0]);
                    client.close();
                  });
            }
            else {
                res.status(400).send("That product does not exist. To view the list of products, visit localhost:3000/leotards/.");
            }
        }
        else{
            db.collection("leotards").find({}).toArray(function(err, result) {
                if (err) throw err;
                console.log(result);
                res.json(result);
                client.close();
              });
        }
    });
});  

// //GET A COSTUME
// app.get('/costumes/:id*?/', (req, res) => {
//     if(req.params.id){
//         if(isValidCostume(req.params.id)){
//             const costume = costumes.find((obj) => obj.id === req.params.id);
//             res.json(costume)
//         }
//         else {
//             res.status(400).send("That product does not exist. To view the list of products, visit localhost:3000/costumes/.");
//         }
//     }
//     else{
//         res.json({costumes});
//     }
// }
// );

//GET A COSTUME (with mongo data!!)
app.get('/costumes/:id*?/', (req, res) => {
    MongoClient.connect(url, function(err, client) {
        if(err) throw err;
        console.log("Database connected!");
        const db = client.db("mydb");
        if(req.params.id){
            if(isValidCostume(req.params.id)){
                db.collection("costumes").find({id: req.params.id}).toArray(function(err, result) {
                    if (err) throw err;
                    console.log(result);
                    res.json(result[0]);
                    client.close();
                  });
            }
            else {
                res.status(400).send("That product does not exist. To view the list of products, visit localhost:3000/costumes/.");
            }
        }
        else{
            db.collection("costumes").find({}).toArray(function(err, result) {
                if (err) throw err;
                console.log(result);
                res.json(result);
                client.close();
              });
        }
    });
}); 


// //UPDATE A REVIEW
// app.put('/shoes/:id/reviews/:reviewid', (req, res) => {
//     if(isValidShoe(req.params.id)){
//         const reviewID = req.params.reviewid;
//         const shoe = shoes.find((obj) => obj.id === req.params.id);
//         if(shoe.totalNumOfReviews >= reviewID){
//             let newReview = {
//                 user: req.body.user,
//                 text: req.body.text,
//                 date: req.body.date,
//                 id: reviewID,
//             }
//             shoe.reviews[reviewID - 1] = newReview;
//             res.json(shoe.reviews);
//         }
//         else{
//             res.status(400).send("A review with that ID number does not exist yet. To see the list of active reviews, see shoes/:id/reviews/.");
//         }
//     }
//     else{
//         res.status(400).send("That product does not exist. To view the list of products, visit localhost:3000/shoes/.");
//     }
// });


//DELETE A REVIEW
// app.delete('/shoes/:id/reviews/:reviewuser/', (req, res) => {
//     const reviewUser = req.params.reviewuser;
//     MongoClient.connect(url, function(err, client) {
//         if(err) throw err;
//         console.log("Database connected!");
//         const db = client.db("mydb");
//         if(req.params.reviewuser){
//             db.collection("shoes").update({id: req.params.id}, {$unset: {reviews: ""}});
//         }
//         else {
//             res.status(400).send("Could not find user to delete review for.");
//         }
//         client.close();
//     });
// });

app.listen(port, () => console.log(`App listening on port ${port}!`));

