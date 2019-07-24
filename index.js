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

// helper functions
const isValidShoe = (id) => {
    return((['flatSlippers', 'blochPointe', 'grishkoPointe'].includes(id)) ? true : false)
};

const isValidLeo = (id) => {
    return((['meshBack', 'longSleeve', 'velvetRed'].includes(id)) ? true : false)
};

const isValidCostume = (id) => {
    return((['whiteTulle', 'redTutu', 'lilacTutu'].includes(id)) ? true : false)
};

//CREATE A NEW REVIEW
app.post('/shoes/:id/reviews', (req, res) => {
    let newReview = {
        user: req.body.user, 
        text: req.body.text,
        date: req.body.date,
        id: null,
    };
    const shoe = shoes.find((obj) => obj.id === req.params.id);
    const numReviews = shoe.totalNumOfReviews;
    newReview.id = numReviews + 1;
    shoe.totalNumOfReviews++;
    shoe.reviews.push(newReview);
    res.json(shoe.reviews);
});

//GET REVIEWS
app.get('/shoes/:id/reviews/:reviewid*?/', (req, res) => {
    if(isValidShoe(req.params.id)){
        const shoe = shoes.find((obj) => obj.id === req.params.id);
        if(req.params.reviewid){
            if(shoe.totalNumOfReviews>= req.params.reviewid){
                res.json(shoe.reviews[req.params.reviewid - 1]);
            }
            else{
                res.status(400).send("A review with that ID number does not exist yet. To see the list of active reviews, see shoes/:id/reviews/.");  
            }
        }
        res.json(shoe.reviews);
    }
    else {
        res.status(400).send("The product you are requesting reviews for does not exist. To view the list of active products, visit localhost:3000/shoes/.");
    }
}
);

//GET A SHOE
app.get('/shoes/:id*?/', (req, res) => {
    if(req.params.id){
        if(isValidShoe(req.params.id)){
            const shoe = shoes.find((obj) => obj.id === req.params.id);
            res.json(shoe)
        }
        else {
            res.status(400).send("That product does not exist. To view the list of products, visit localhost:3000/shoes/.");
        }
    }
    else{
        res.json({shoes});
    }
}
);

//GET A LEOTARD
app.get('/leotards/:id*?/', (req, res) => {
    if(req.params.id){
        if(isValidLeo(req.params.id)){
            const leo = leotards.find((obj) => obj.id === req.params.id);
            res.json(leo)
        }
        else {
            res.status(400).send("That product does not exist. To view the list of products, visit localhost:3000/leotards/.");
        }
    }
    else{
        res.json({leotards});
    }
}
);

//GET A LEOTARD
app.get('/costumes/:id*?/', (req, res) => {
    if(req.params.id){
        if(isValidCostume(req.params.id)){
            const costume = costumes.find((obj) => obj.id === req.params.id);
            res.json(costume)
        }
        else {
            res.status(400).send("That product does not exist. To view the list of products, visit localhost:3000/costumes/.");
        }
    }
    else{
        res.json({costumes});
    }
}
);

//UPDATE A REVIEW
app.put('/shoes/:id/reviews/:reviewid', (req, res) => {
    if(isValidShoe(req.params.id)){
        const reviewID = req.params.reviewid;
        const shoe = shoes.find((obj) => obj.id === req.params.id);
        if(shoe.totalNumOfReviews >= reviewID){
            let newReview = {
                user: req.body.user,
                text: req.body.text,
                date: req.body.date,
                id: reviewID,
            }
            shoe.reviews[reviewID - 1] = newReview;
            res.json(shoe.reviews);
        }
        else{
            res.status(400).send("A review with that ID number does not exist yet. To see the list of active reviews, see shoes/:id/reviews/.");
        }
    }
    else{
        res.status(400).send("That product does not exist. To view the list of products, visit localhost:3000/shoes/.");
    }
});


//DELETE A REVIEW
app.delete('/shoes/:id/reviews/:reviewid/', (req, res) => {
    if(isValidShoe(req.params.id)){
        const reviewID = req.params.reviewid;
        const shoe = shoes.find((obj) => obj.id === req.params.id);
        if(shoe.totalNumOfReviews >= reviewID){
            shoe.reviews[reviewID - 1] = {
                user: "Review has been recently deleted",
                text: "Review has been recently deleted",
                date: "Review has been recently deleted",
                id: reviewID,
            };
            res.json(shoe.reviews);
        }
        else{
            res.status(400).send("A review with that ID number does not exist yet. To see the list of active reviews, see shoes/:id/reviews/.");
        }
    }
});


app.listen(port, () => console.log(`App listening on port ${port}!`));

