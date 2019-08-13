
//shoes *mock database* --------------------------------------

let flatSlippers = {id: "flatSlippers", 
                    title: "Bloch Womens Performa Stretch Canvas Ballet Shoes", 
                    price: "$16.92", 
                    reviews: [{user: "Sam Cote", text:`I have been taking dance for about 15-16 years now and have ALWAYS
                     loved this brand! I’ve tried a ton of different brands and styles and these have always been the best!
                      I wear a street shoe size 8.5 and couldn’t remember what size my slippers were from the last time, 
                      so I looked at reviews and everywhere I could to see what people with bigger feet got and couldn’t find 
                      much so I just kinda winged it 😅 - I have extremely wide feet and long toes and decided to get the 8.5 
                      B and they fit perfect! The box was rather beaten up but the shoes are fine and fit great!!`, date: "7/12/19", id:1},
                      {user: "Jessica Dimmock", text: `Great fit! Beautiful shoe! I purchased a pair for my daughter who takes
                      ballet twice a week and they still look great. I teach several ballet classes per week and mine are torn up. 
                      I would still recommend them. They almost lasted a full season.`, date: "7/27/19", id:1}],
                    totalNumOfReviews: 2,
                    imgsrc: 'https://cdn1.discountdance.net/image/207x275/s0284g_1.jpg',
                }


let blochPointe = {id: "blochPointe", 
                   title: "Bloch Adult Balance European Pointe Shoes", 
                   price: "$80.05", 
                   reviews: [],
                   totalNumOfReviews: 0,
                   imgsrc: "https://cdn1.discountdance.net/image/1395x1860/es0160l_1.jpg"
                }


let grishkoPointe = {id: "grishkoPointe", 
                    title: "Grishko Adult Triumph Pointe Shoes", 
                    price: "$79.46", 
                    reviews: [{user: "Katrina Greene", text: "Tried and true!", date: "7/26/19", id: 1}],
                    totalNumOfReviews: 1,
                    imgsrc: 'https://cdn1.discountdance.net/image/1395x1860/maya_1.jpg',
                }


export const shoes = [flatSlippers, blochPointe, grishkoPointe];


//leotards *mock database* -----------------------------------

let meshBack = {id: "meshBack",
                title: "Womens Compression Mesh Back Leotard", 
                price: "$37.05", 
                reviews: [{user: "Katie", text: "This runs a bit small, but stretches out as you wear it.", date: "5/6/19", id: 1}],
                totalNumOfReviews: 0,
                imgsrc: 'https://cdn1.discountdance.net/image/1395x1860/na165_1.jpg',
            }

let longSleeve = {id: "longSleeve", 
                  title: "Womens Inspired Back Cutout Long Sleeve Leotard", 
                  price: "$41.18", 
                  reviews: [{user: "Macy", text: "Honestly love this leotard. I've bought it in multiple colors because I love it so much.", date: "5/6/19", id: 1}],
                  totalNumOfReviews: 0,
                  imgsrc: 'https://cdn1.discountdance.net/image/1395x1860/rpcc004_1.jpg',
                }

let velvetRed = {id: "velvetRed", 
                title: "Womens Burnout Velvet Camisole Leotard", 
                price: "$58.53", 
                reviews: [],
                totalNumOfReviews: 0,
                imgsrc: 'https://cdn1.discountdance.net/image/1395x1860/sk101_1.jpg',
            }


export let leotards = [meshBack, longSleeve, velvetRed];


//costumes *mock database* ------------------------------------

let whiteTulle = {id: "whiteTulle",
                 title: "Adult 24-inch Juliet Skirt Soft Tulle", 
                 price: "$25.42",
                reviews: [{user: "Karen", text: "This skirt is made of a pretty cheap material honestly, but the price is good, so it's ok.", date: "5/6/19", id: 1}],
                totalNumOfReviews: 0,
                imgsrc: 'https://i.pinimg.com/originals/25/3c/6d/253c6d951035e7dd1801d5b6100e586b.jpg',
            }

let redTutu = {id: "redTutu",
             title: "Womens 7-Layer Ballet Tutu Skirt", 
             price: "$77.22", 
             reviews: [],
            totalNumOfReviews: 0,
            imgsrc: 'https://images-na.ssl-images-amazon.com/images/I/71As-8XgUdL._UY445_.jpg',
        }

let lilacTutu = {id: "lilacTutu",
                 title: "Adult Professional 6-Layer Platter Tutu" , 
                 price: "$124.86", 
                 reviews: [{user: "Karen", text: "It's so beautiful! Just used it in performance and I love it.", date: "5/6/19", id: 1}],
                 totalNumOfReviews: 0,
                 imgsrc: 'https://cdn1.discountdance.net/image/1395x1860/chacott1_1.jpg',
                }


export let costumes = [whiteTulle, redTutu, lilacTutu];