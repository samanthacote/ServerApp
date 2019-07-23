
//shoes *mock database* --------------------------------------

let flatSlippers = {id: "flatSlippers", 
                    title: "Bloch Womens Performa Stretch Canvas Ballet Shoes", 
                    price: "$16.92", 
                    reviews: [{user: "Sam Cote", text: "These are the best flat slippers for beginners!", date: "7/12/19", id:1}],
                    totalNumOfReviews: 1,
                }


let blochPointe = {id: "blochPointe", 
                   title: "Bloch Adult Balance European Pointe Shoes", 
                   price: "$80.05", 
                   reviews: [],
                   totalNumOfReviews: 0,
                }


let grishkoPointe = {id: "grishkoPointe", 
                    title: "Grishko Adult Triumph Pointe Shoes", 
                    price: "$79.46", 
                    reviews: [],
                    totalNumOfReviews: 0,
                }


export const shoes = [flatSlippers, blochPointe, grishkoPointe];


//leotards *mock database* -----------------------------------

let meshBack = {id: "meshBack",
                title: "Womens Compression Mesh Back Leotard", 
                price: "$37.05", 
                reviews: [],
                totalNumOfReviews: 0,
            }

let longSleeve = {id: "longSleeve", 
                  title: "Womens Inspired Back Cutout Long Sleeve Leotard", 
                  price: "$41.18", 
                  reviews: [],
                  totalNumOfReviews: 0,
                }

let velvetRed = {id: "velvetRed", 
                title: "Womens Burnout Velvet Camisole Leotard", 
                price: "$58.53", 
                reviews: [],
                totalNumOfReviews: 0,
            }


export let leotards = [meshBack, longSleeve, velvetRed];


//costumes *mock database* ------------------------------------

let whiteTulle = {id: "whiteTulle",
                 title: "Adult 24-inch Juliet Skirt Soft Tulle", 
                 price: "$25.42",
                reviews: [],
                totalNumOfReviews: 0,
            }

let redTutu = {id: "redTutu",
             title: "Womens 7-Layer Ballet Tutu Skirt", 
             price: "$77.22", 
             reviews: [],
            totalNumOfReviews: 0,
        }

let lilacTutu = {id: "lilacTutu",
                 title: "Adult Professional 6-Layer Platter Tutu" , 
                 price: "$124.86", 
                 reviews: [],
                 totalNumOfReviews: 0,
                }


export let costumes = [whiteTulle, redTutu, lilacTutu];