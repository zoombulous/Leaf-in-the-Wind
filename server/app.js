const Express = require ("express")();
const Http = require ("http").Server(Express);
const Socketio = require ("socket.io")(Http);
var fs = require('fs');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var FastBitSet = require('fastbitset');


var position = {
    x:200,
    y:200
};

var position2 = {
    x:220,
    y:220
};

var position3 = {
    x:230,
    y:230
};

var position4 = {
    x:240,
    y:240
};

var z_broken_shuttle = base64_encode('./third_broken_shuttle.jpg');
var z_cruiser_patrol = base64_encode('./third_cruiser_patrol.jpg');
var z_engine_room = base64_encode('./third_engine_room.jpg');
var z_minor_tech_diff = base64_encode('./third_minor_tech_diff.jpg');
var z_the_big_black = base64_encode('./third_the_big_black.jpg')
var cargo = base64_encode('./supplies/cargo.jpg')
var contraband = base64_encode('./supplies/contraband.jpg')
var fuel = base64_encode('./supplies/fuel.jpg')
var fugitive = base64_encode('./supplies/fugitive.jpg')
var part = base64_encode('./supplies/part.jpg')
var passenger = base64_encode('./supplies/passenger.jpg')
var empty = base64_encode('./supplies/empty.jpg')
var bonanza = base64_encodePNG('./ship_cards/bonanza.png')
var bonniemae = base64_encodePNG('./ship_cards/bonniemae.png')

var travelCards = [
    [
        z_broken_shuttle,
        z_cruiser_patrol,
        z_minor_tech_diff,
        z_broken_shuttle,
        z_cruiser_patrol,
        z_minor_tech_diff,
        z_broken_shuttle,
        z_cruiser_patrol,
        z_minor_tech_diff,
        z_broken_shuttle,
        z_cruiser_patrol,
        z_minor_tech_diff,
        z_the_big_black,
        bonniemae,
        bonanza,
        passenger,
        empty
    ],
    [z_the_big_black]
];

var shipCards =
    [
        //[possible supply [[i],[n]], [[i],[n]] ]
        [
            [
                [ [empty], ["Empty Slot"] ],
                [ [bonniemae], ["Bonnie Mae"] ],
                [ [bonanza], ["Bonanza"] ]
                
            ],
        ],
        //[player [total], [chosen 12boxes] ]
        //player1
        [
            //chosen for boxes (12 in total)
            [  [ [bonniemae], ["Bonnie Mae"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Passenger"] ],
               [ [empty], ["Part"] ],
               [ [empty], ["Part"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ]
            ],
            //totals
            [],
            //index
            [[1],
             [1],
             [1],
             [1],
             [1],
             [1],
             [1],
             [1],
             [1],
             [1],
             [1],
             [1]]
        ],
        
        //player2
        [  
            //chosen for boxes (12 in total)
            [  [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               //totals
               [],
               //index
               [0]]
        ],//player3
        [  
            //chosen for boxes (12 in total)
            [  [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
            //totals
               [],
               //index
               [0]]
        ],//player4
        [
            //chosen for boxes (12 in total)
            [  [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
            //totals
               [],
               //index
               [0]]
        ]
    ]
var playerCards = [
    // [crew],[private],[items],[ship upgr],[jobs]

    //0
    [ [    empty,
           z_broken_shuttle,
           z_cruiser_patrol,
           z_engine_room,
           z_minor_tech_diff,
           z_the_big_black
           
      ], [["empty"], ["empty"]], [4]  ],
    
    //1
    [ [    empty,
           z_broken_shuttle,
           z_cruiser_patrol,
           z_engine_room,
           z_minor_tech_diff,
           z_the_big_black
           
      ], [empty, empty], [4]  ],

    //2
    //crew
    [ [    [],
           [[z_broken_shuttle],["bazaar"],["item"]],
           [[z_cruiser_patrol],["tinker"],["item"]],
           [[z_engine_room],["london"],["item"]],
           [[z_broken_shuttle],["bazaar"],["item"]],
           [[z_cruiser_patrol],["tinker"],["item"]],
           [[z_engine_room],["london"],["item"]],
           [[z_broken_shuttle],["bazaar"],["item"]],
           [[z_cruiser_patrol],["tinker"],["item"]],
           [[z_engine_room],["london"],["item"]],
           [[z_engine_room],["london"],["item"]],
           [[empty],[],[]]
      ],
      //private
      [
          [],
          [[z_broken_shuttle],["bazaar"],["crew"]],
          [[z_cruiser_patrol],["tinker"],["shipUpgrade"]],
          [[z_cruiser_patrol],["tinker"],["crew"]],
          [[z_broken_shuttle],["bazaar"],["crew"]],
          [[z_cruiser_patrol],["tinker"],["shipUpgrade"]],
          [[z_cruiser_patrol],["tinker"],["crew"]],
          [[z_broken_shuttle],["bazaar"],["crew"]],
          [[z_cruiser_patrol],["tinker"],["shipUpgrade"]],
          [[z_cruiser_patrol],["tinker"],["crew"]],
          [[z_cruiser_patrol],["tinker"],["shipUpgrade"]],
          
      ],
      //items
      [[],
       [[z_broken_shuttle],["bazaar"],["item"]],
       [[z_minor_tech_diff],["tinker"],["item"]],
       [[z_engine_room],["london"],["item"]],
       [[z_broken_shuttle],["bazaar"],["item"]],
       [[z_minor_tech_diff],["tinker"],["item"]],
       [[z_the_big_black],["london"],["item"]],
       [[z_broken_shuttle],["bazaar"],["item"]],
       [[z_minor_tech_diff],["tinker"],["item"]],
       [[z_engine_room],["london"],["item"]],
       [[z_broken_shuttle],["bazaar"],["item"]],
       [[z_minor_tech_diff],["tinker"],["item"]],
       [[z_engine_room],["london"],["item"]]
      ],
      //ship upgrade
      [
          [],
          [[z_broken_shuttle],["bazaar"],["item"]],
          [[z_minor_tech_diff],["tinker"],["item"]],
          [[z_engine_room],["london"],["item"]],
          [[z_broken_shuttle],["bazaar"],["item"]]
      ],
      //jobs
      [[],
       [[z_broken_shuttle],["Harken"]],
       [[z_cruiser_patrol],["Mr.Universe"]],
       [[z_the_big_black],["Mr.Universe"]]
      ]
    ],
    
    //3
    [ [    empty,
           z_broken_shuttle,
           z_cruiser_patrol,
           z_engine_room,
           z_minor_tech_diff,
           z_the_big_black
           
      ], [empty, empty], [4] ],
    //shops
    [
        //draw
        [
            [],
            [[z_minor_tech_diff],["tinker"],["item"]],
            [[z_engine_room],["london"],["item"]],
            [[z_broken_shuttle],["bazaar"],["item"]]
        ],
        //discard
        [
            [],
            [[z_minor_tech_diff],["tinker"],["item"]],
            [[z_engine_room],["london"],["item"]],
            [[z_broken_shuttle],["bazaar"],["item"]]
        ],
        //considered
        [
            [],
            [[z_minor_tech_diff],["tinker"],["item"]],
            [[z_engine_room],["london"],["item"]],
            [[z_broken_shuttle],["bazaar"],["item"]]
        ]
    ],
    [
        //draw
        [
            [],
            [[z_minor_tech_diff],["tinker"],["item"]],
            [[z_engine_room],["london"],["item"]],
            [[z_broken_shuttle],["bazaar"],["item"]]
        ],
        //discard
        [
            [],
            [[z_minor_tech_diff],["tinker"],["item"]],
            [[z_engine_room],["london"],["item"]],
            [[z_broken_shuttle],["bazaar"],["item"]]
        ],
        //considered
        [
            [],
            [[z_minor_tech_diff],["tinker"],["item"]],
            [[z_engine_room],["london"],["item"]],
            [[z_broken_shuttle],["bazaar"],["item"]]
        ]
    ],
    [
        //draw
        [
            [],
            [[z_minor_tech_diff],["tinker"],["item"]],
            [[z_engine_room],["london"],["item"]],
            [[z_broken_shuttle],["bazaar"],["item"]]
        ],
        //discard
        [
            [],
            [[z_minor_tech_diff],["tinker"],["item"]],
            [[z_engine_room],["london"],["item"]],
            [[z_broken_shuttle],["bazaar"],["item"]]
        ],
        //considered
        [
            [],
            [[z_minor_tech_diff],["tinker"],["item"]],
            [[z_engine_room],["london"],["item"]],
            [[z_broken_shuttle],["bazaar"],["item"]]
        ]
    ],
    [
        //draw
        [
            [],
            [[z_minor_tech_diff],["tinker"],["item"]],
            [[z_engine_room],["london"],["item"]],
            [[z_broken_shuttle],["bazaar"],["item"]]
        ],
        //discard
        [
            [],
            [[z_minor_tech_diff],["tinker"],["item"]],
            [[z_engine_room],["london"],["item"]],
            [[z_broken_shuttle],["bazaar"],["item"]]
        ],
        //considered
        [
            [],
            [[z_minor_tech_diff],["tinker"],["item"]],
            [[z_engine_room],["london"],["item"]],
            [[z_broken_shuttle],["bazaar"],["item"]]
        ]
    ],
    [
        //draw
        [
            [],
            [[z_minor_tech_diff],["tinker"],["item"]],
            [[z_engine_room],["london"],["item"]],
            [[z_broken_shuttle],["bazaar"],["item"]]
        ],
        //discard
        [
            [],
            [[z_minor_tech_diff],["tinker"],["item"]],
            [[z_engine_room],["london"],["item"]],
            [[z_broken_shuttle],["bazaar"],["item"]]
        ],
        //considered
        [
            [],
            [[z_minor_tech_diff],["tinker"],["item"]],
            [[z_engine_room],["london"],["item"]],
            [[z_broken_shuttle],["bazaar"],["item"]]
        ]
    ]
];

var shipInv =
    [
        //[possible supply [[i],[n]], [[i],[n]] ]
        [
            [
                [ [empty], ["Empty Slot"] ],
                [ [empty], ["Empty Slot"] ],
                [ [cargo], ["Cargo"] ],
                [ [contraband], ["Contraband"] ],
                [ [fuel], ["Fuel"] ],
                [ [part], ["Part"] ],
                [ [passenger], ["Passenger"] ]
            ],
        ],
        //[player [total], [chosen 12boxes] ]
        //player1
        [
            //chosen for boxes (12 in total)
            [  [ [empty], ["Empty Slot"] ],
               [ [part], ["Part"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Passenger"] ],
               [ [empty], ["Part"] ],
               [ [empty], ["Part"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ]
            ],
            //totals
            [],
            //index
            [[1],
             [1],
             [1],
             [1],
             [1],
             [1],
             [1],
             [1],
             [1],
             [1],
             [1],
             [1]]
        ],
        
        //player2
        [  
            //chosen for boxes (12 in total)
            [  [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
            //totals
            [],
            //index
            [0]]
        ],//player3
        [  
            //chosen for boxes (12 in total)
            [  [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
            //totals
            [],
            //index
            [0]]
        ],//player4
        [
            //chosen for boxes (12 in total)
            [  [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
            //totals
            [],
            //index
            [0]]
        ]
    ]
var images = [
    z_broken_shuttle,
    z_cruiser_patrol,
    z_engine_room,
    z_minor_tech_diff,
    z_the_big_black
];

var chosenCard = [z_the_big_black];

var wallet1 = 300;

var wallet2 = 100;

var wallet3 = 100;

var wallet4 = 100;

var p1Inv = playerCards[0][0];
var p2Inv = playerCards[1][0];
var p3Inv = playerCards[2][0];
var p4Inv = playerCards[3][0];
var p1Chosen = playerCards[0][1];
var p2Chosen = playerCards[1][1];
var p3Chosen = playerCards[2][1];
var p4Chosen = playerCards[3][1];
var p1Index = playerCards[0][2];
var p2Index = playerCards[1][2];
var p3Index = playerCards[2][2];
var p4Index = playerCards[3][2];



function p1Picker() {
            var x = p1Index;
            p1Chosen = p1Inv[x];
}

function p2Picker() {
    var x = p2Index;
    p2Chosen = p2Inv[x];
    var val = p2Inv[x];
}

function p2Last() {

    p2Index = p2Inv.length - 1;
    p2Picker();
}

function p2Next() {
    p2Index++;
    p2Index = p2Index % p2Inv.length;
    p2Picker();
}

function p2Prev() {
    if (p2Index === 0) {
        p2Index = p2Inv.length
    }
    p2Index = p2Index - 1;
    p2Picker();
}

function p1Next() {
    p1Index++;
    p1Index = p1Index % p1Inv.length;
    p1Picker();
} 

function p1Prev() {
    if (p1Index === 0) {
                 p1Index = p1Inv.length
    }
    p1Index = p1Index - 1;
    p1Picker();
}

function p3c1giveToX(getting) {
    console.log("start giving = ", playerCards[2][0].length,
                "getting = ", getting.length);
    if (playerCards[2][0].length > 2) {
        
        getting.push(playerCards[2][0][1]);

        
        playerCards[2][0] = playerCards[2][0].filter(function(x) {
            return x !== (playerCards[2][0][1]);
        });
        console.log("end giving = ", playerCards[2][0].length,
                        "getting = ", getting.length);
    }
}

function p3c1giveToDiscard() {
    
    if (playerCards[2][0].length > 2) {

        
        if (playerCards[2][0][1][1] = "bazaar") {
            playerCards[4][1].push(playerCards[2][0][1]);
            console.log("discarded into bazaar",
                        "bazaar length = ", playerCards[4][1].length,
                        "tinker length = ", playerCards[5][1].length);
        };
        if (playerCards[2][0][1][1] = "tinker") {
            playerCards[5][1].push(playerCards[2][0][1]);
            console.log("discarded into tinker",
                        "bazaar length = ", playerCards[4][1].length,
                        "tinker length = ", playerCards[5][1].length);
        };
        playerCards[2][0] = playerCards[2][0].filter(function(x) {
            return x !== (playerCards[2][0][1]);
        });
    
    }
}

function p3c1PrivGiveToMain() {

    console.log("items start = ", playerCards[2][2].length);

    if (playerCards[2][0].length > 1) {
        
        
        if (playerCards[2][1][1][2] == "item") {
   
            playerCards[2][2].push(playerCards[2][1][1]);
            console.log("ITEM!!",
                        "items length = ", playerCards[2][2].length,
                        "crew length = ", playerCards[2][0].length,
                        "ship upgrade = ", playerCards[2][3].length,
                        "items left in private = ", playerCards[2][1].length);
        };
        if (playerCards[2][1][1][2] == "crew") {
            playerCards[2][0].push(playerCards[2][1][1]);
            console.log("CREW!!",
                        "items length = ", playerCards[2][2].length,
                        "crew length = ", playerCards[2][0].length,
                        "ship upgrade = ", playerCards[2][3].length,
                        "items left in private = ", playerCards[2][1].length);
        };
        if (playerCards[2][1][1][2] == "shipUpgrade") {
            playerCards[2][3].push(playerCards[2][1][1]);
            console.log("SHIP UPGRADE!!",
                        "items length = ", playerCards[2][2].length,
                        "crew length = ", playerCards[2][0].length,
                        "ship upgrade = ", playerCards[2][3].length,
                        "items left in private = ", playerCards[2][1].length);
        };
         playerCards[2][1] = playerCards[2][1].filter(function(x) {
            return x !== (playerCards[2][1][1]);
         });
    
    }
}


function swap(cardsArray, first, second){
    console.log(cardsArray);
    [cardsArray[first], cardsArray[second]] =
        [cardsArray[second], cardsArray[first]]
    console.log(cardsArray);
}

function swapPriv(cardsArray, first, second){
    console.log(cardsArray[0][first]);
    [cardsArray[0][first], cardsArray[1][second]] =
        [cardsArray[1][second], cardsArray[0][first]]
    console.log(cardsArray[0][first]);
}

function giveTemplate(group, giving, getting) {
    group[giving][1] = group[giving][0][ group[giving][2] ]
    
    console.log("giving player index = ",group[giving][2],
                "giving player chosen card at start of function = ",
                group[giving][1], "give temp was called");
    
    console.log("before push, giving player chosen = ",
                group[giving][1], "give temp was called");
    
    group[getting][0].push(group[giving][1]);
    
    if (group[giving][0].length === 0 && Array.isArray(group[giving][0])) {
                console.log("giving player inv is empty, you cannot give!");
            };

    var y = group[giving][0]
                .indexOf
    (group[giving][1]);
    
    group[giving][0]
        .splice
    (group[giving][0]
             .indexOf
             (group[giving][1]), 1);
    
    group[getting][2] = group[getting][0].length - 1;
    
    if (y === 0) {
                group[giving][1] =
                    group[giving][1][group[giving][0].length]
            };
    group[giving][1] = group[giving][0][y];
    
    group[getting][0] = group[getting][0].filter(function(x) {
                return x !== undefined;
            });
    
    if (group[giving][2] === 0) {
                group[giving][2] = [giving][0].length
            };
    
    group[giving][2] = group[giving][2] - 1;
    group[giving][1] = group[giving][0][ group[giving][2] ]
    group[giving][2] = Math.max(0, group[giving][2]);

    group[giving][2] = group[giving][2] || 0;
    
    
    console.log("giving player inv = ",
                        group[giving][0],
                        "getting player inv = ",
                        group[getting][0],
                        "giving player chosen = ",
                        group[giving][1],
                        "giving player index = ",
                group[giving][2], "give temp was called");
}



function countDup3(arrIn, arrOutOriginal) {
    
    arrIn = arrIn.filter( function( element ) {
        return element.length <= 50;
    });

    arrOut = [];
    
    var uniqueCount = arrIn.flat(Infinity);
    var uniqueChars = [];
    
    for (i of uniqueCount) {
        if (uniqueChars.indexOf(i) == -1) {
            uniqueChars.push(i);
        } 
    }
    
    for (x of uniqueChars) {
        let timesAppeared = 0;
        for (i of uniqueCount) {
            if (i == x) {timesAppeared++;}
        }
        arrOut.push(`${x} x ${timesAppeared},`);
        arrOut = arrOut.filter( function( element ) {
            return element.length <= 500;
        });
        arrOutOriginal[0] = arrOut;
        
    }
}
    

function prevTemplate(group,player) {
    if (group[player][2] === 0) {
        group[player][2] = group[player][0].length
    };
    group[player][2] = group[player][2] - 1;
    group[player][1] = group[player][0][ group[player][2] ]
    
    var x = group[player][2];
    group[player][1] = group[player][0][x]
}

function nextTemplate(group,player) {
    if (group[player][2] >= group[player][0].length - 1) {
        group[player][2] = 0
    };

    group[player][2] = group[player][2] + 1;
    group[player][1] = group[player][0][ group[player][2] ]
    
    var x = group[player][2];
    group[player][1] = group[player][0][x]
    
}

    
function nextSupplyTemplate(group, supIndex, supBox, player) {

      //shipInv[1][2][0]
    
    if (group[player][2][supIndex] >= group[0][0].length - 1) {
        group[player][2][supIndex] = 0

      //group[1][0][0]
        group[player][0][supBox] = group[0][0][group[player][2][supIndex]]
    };
    
    group[player][2][supIndex] = group[player][2][supIndex] * 1 + 1;
    group[player][0][supBox] = group[0][0][group[player][2][supIndex]];
    
    countDup3(group[player][0], group[player][1]);
    console.log("supIndex =", supIndex, "supBox =", supBox, "player =", player); 
    
}    

function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return 'data:image/jpeg;base64,' +
        Buffer.from(bitmap).toString('base64');
}

function base64_encodePNG(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return 'data:image/png;base64,' +
        Buffer.from(bitmap).toString('base64');
}

function base64_decode(base64str, file) {
    // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
    var bitmap = Buffer.from(base64str, 'base64');
    // write buffer to file
    fs.writeFileSync(file, bitmap);
    console.log('File created from base64 encoded string');
}

const nsp = Socketio.of('/my-namespace');

Socketio.on("connection", socket => {
    console.log("someone connected");
    socket.emit("position", position)
    socket.emit("position2", position2)
    socket.emit("position3", position3)
    socket.emit("position4", position4)
    socket.emit("wallet1", wallet1)
    socket.emit("wallet2", wallet2)
    socket.emit("wallet3", wallet3)
    socket.emit("wallet4", wallet4)
    socket.emit("chosenCard", chosenCard)
    socket.emit("images", images)
    socket.emit("playerCards", playerCards)
    socket.emit("travelCards", travelCards)
    socket.emit("shipCards", shipCards)
    socket.emit("shipInv", shipInv)
    socket.emit('noOfConnections', Object.keys(Socketio.sockets.connected).length)

    socket.on('disconnect', () => {
        console.log('disconnected')
        Socketio.emit('noOfConnections', Object.keys(Socketio.sockets.connected).length)
    });



    socket.on('chat-message', (msg) => {
        socket.broadcast.emit('chat-message', msg)
    });
    socket.on('playerNumberSet', (player) => {
        socket.broadcast.emit('playerNumberSet', player)
    });
    socket.on('joined', (name) => {
        socket.broadcast.emit('joined', name)
    });
    socket.on('left', (name) => {
        socket.broadcast.emit('left', name)
    });
    
    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data)
    });
    socket.on('stoptyping', () => {
        socket.broadcast.emit('stoptyping')
    });

    socket.on("chosenShip", changeShip => {
        switch(changeShip) {
        case "p3nextShip":

            nextSupplyTemplate(shipCards, 0, 0, 1);
            console.log("vue tried to change ship",shipCards[1][0][0][1]);

            Socketio.emit ("shipCards", shipCards);
            break;
    
        }
    });

                                           
    socket.on("supply", changeSupply => {
        switch(changeSupply) {
        case "1box1":

            nextSupplyTemplate(shipInv, 0, 0, 1);
            
            console.log("supply tried to change from socket");
            console.log("supIndex =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "1box2":
            
            nextSupplyTemplate(shipInv, 1, 1, 1);
            
            console.log("supply tried to change from socket");
            console.log("supIndex =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "1box3":
            
            nextSupplyTemplate(shipInv, 2, 2, 1);
            
            console.log("supply tried to change from socket");
            console.log("supIndex =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "1box4":
            
            nextSupplyTemplate(shipInv, 3, 3, 1);
            
            console.log("supply tried to change from socket");
            console.log("supIndex =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "1box5":
            
            nextSupplyTemplate(shipInv, 4, 4, 1);
            
            console.log("supply tried to change from socket");
            console.log("supIndex =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "1box6":
            
            nextSupplyTemplate(shipInv, 5, 5, 1);
            
            console.log("supply tried to change from socket");
            console.log("supIndex =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "1box7":
            
            nextSupplyTemplate(shipInv, 6, 6, 1);
            
            console.log("supply tried to change from socket");
            console.log("supIndex =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "1box8":
            
            nextSupplyTemplate(shipInv, 7, 7, 1);
            
            console.log("supply tried to change from socket");
            console.log("supIndex =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "1box9":
            
            nextSupplyTemplate(shipInv, 8, 8, 1);
            
            console.log("supply tried to change from socket");
            console.log("supIndex =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "1box10":
            
            nextSupplyTemplate(shipInv, 9, 9, 1);
            
            console.log("supply tried to change from socket");
            console.log("supIndex =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "1box11":
            
            nextSupplyTemplate(shipInv, 10, 10, 1);
            
            console.log("supply tried to change from socket");
            console.log("supIndex =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "1box12":
            
            nextSupplyTemplate(shipInv, 11, 11, 1);
            
            console.log("supply tried to change from socket");
            console.log("supIndex =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;

            
        }
    });

    socket.on ("giveManual", giveToManual => {
        switch(giveToManual) {
        case "p3Discard1":
            p3c1giveToDiscard()
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3Give1ToP1":

            p3c1giveToX
            //getting
            (playerCards[0][1],
             //doing giving and giving chosen weren't working,
             //so they are put in manually
             );
           
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3Priv1GiveMain":
            //p3Priv1SwitchMain1
            p3c1PrivGiveToMain();
            
            Socketio.emit ("playerCards", playerCards);
            break;

            //player 3 moving around crew
            
        case "p3Switch1To2":
            
            swap(playerCards[2][0],1,2);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3Switch2To3":
            
            swap(playerCards[2][0],2,3);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3Switch3To4":
            
            swap(playerCards[2][0],3,4);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3Switch4To5":
            
            swap(playerCards[2][0],4,5);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3Switch5To6":
            
            swap(playerCards[2][0],5,6);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3Switch6To7":
            
            swap(playerCards[2][0],6,7);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3Switch7To8":
            
            swap(playerCards[2][0],7,8);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3Switch8To9":
            
            swap(playerCards[2][0],8,9);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3Switch9To10":
            
            swap(playerCards[2][0],9,10);
            
            Socketio.emit ("playerCards", playerCards);
            break;

            //player 3 moving around items
            
        case "p3SwitchItems1To2":
            
            swap(playerCards[2][2],1,2);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3SwitchItems2To3":
            
            swap(playerCards[2][2],2,3);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3SwitchItems3To4":
            
            swap(playerCards[2][2],3,4);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3SwitchItems4To5":
            
            swap(playerCards[2][2],4,5);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3SwitchItems5To6":
            
            swap(playerCards[2][2],5,6);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3SwitchItems6To7":
            
            swap(playerCards[2][2],6,7);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3SwitchItems7To8":
            
            swap(playerCards[2][2],7,8);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3SwitchItems8To9":
            
            swap(playerCards[2][2],8,9);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3SwitchItems9To10":
            
            swap(playerCards[2][2],9,10);
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
            //player 3 moving between crew and private
            
        case "p3Switch1To1Priv":
            
            swapPriv(playerCards[2],1,1);
            
            Socketio.emit ("playerCards", playerCards);
        }
    });
    
    
    socket.on ("give", giveTo => {
        switch(giveTo) {
        case "p3Give1ToP1":

            giveTemplateManualChosen(playerCards, 1, 0, playerCards[2][0][0], 2)
            
            
            Socketio.emit ("playerCards", playerCards);
        case "1to2":

            giveTemplate(playerCards, 0, 1);

            console.log("dropdown tried to do something");
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "oneprev":
            
            console.log("at least you tried");
            
            prevTemplate(playerCards,0);
            
            console.log("pl indx = ", playerCards[0][2], "p1 viewing previous card", playerCards[0][1]);
            Socketio.emit ("playerCards", playerCards);
            break;
        
        case "onenext":
            
            console.log("at least you tried");
            
            nextTemplate(playerCards,0);
            
            console.log("pl indx = ", playerCards[0][2], "p1 viewing previous card", playerCards[0][1]);
            Socketio.emit ("playerCards", playerCards);
            break;
        }
    });

///end of give
    
    socket.on ("movingPicker", movingMove => {
        switch(movingMove) {
        case "alliance":

            for (var i = 0; i < travelCards[0].length; i++)
                var chosenImage = Array.from(sampleF2(1, travelCards[0].length));
            travelCards[1] =
                travelCards[0][chosenImage];
            var val =
                travelCards[0][chosenImage];
            
            travelCards[0].splice(chosenImage, [1]);

            console.log("cards left = ",
                        travelCards[0].length,
                       );
            Socketio.emit ("travelCards", travelCards);
            break;
        }
    });

  //  socket.on("shipPicker", chooseShip => {
  //      switch(chooseShip) {
  //      case "1choose"

  //      }
  //  });
    
    socket.on("moveMoney1", moneyData1 => {
        switch(moneyData1) {
        case "1add100":
            wallet1 += 100;
            Socketio.emit ("wallet1", wallet1);
            break;
        case "1add500":
            wallet1 += 500;
            Socketio.emit ("wallet1", wallet1);
            break;
        case "1add1000":
            wallet1 += 1000;
            Socketio.emit ("wallet1", wallet1);
            break;
        case "1add2000":
            wallet1 += 2000;
            Socketio.emit ("wallet1", wallet1);
            break;
        case "1minus100":
            wallet1 -= 100;
            Socketio.emit ("wallet1", wallet1);
            break;
        case "1minus500":
            wallet1 -= 500;
            Socketio.emit ("wallet1", wallet1);
            break;
        case "1minus1000":
            wallet1 -= 1000;
            Socketio.emit ("wallet1", wallet1);
            break;
        case "1minus2000":
            wallet1 -= 2000;
            Socketio.emit ("wallet1", wallet1);
            break;
        case "2add100":
            wallet2 += 100;
            Socketio.emit ("wallet2", wallet2);
            break;
        case "2add500":
            wallet2 += 500;
            Socketio.emit ("wallet2", wallet2);
            break;
        case "2add1000":
            wallet2 += 1000;
            Socketio.emit ("wallet2", wallet2);
            break;
        case "2add2000":
            wallet2 += 2000;
            Socketio.emit ("wallet2", wallet2);
            break;
        case "2minus100":
            wallet2 -= 100;
            Socketio.emit ("wallet2", wallet2);
            break;
        case "2minus500":
            wallet2 -= 500;
            Socketio.emit ("wallet2", wallet2);
            break;
        case "2minus1000":
            wallet2 -= 1000;
            Socketio.emit ("wallet2", wallet2);
            break;
        case "2minus2000":
            wallet2 -= 2000;
            Socketio.emit ("wallet2", wallet2);
            break;
        case "3add100":
            wallet3 += 100;
            Socketio.emit ("wallet3", wallet3);
            break;
        case "3add500":
            wallet3 += 500;
            Socketio.emit ("wallet3", wallet3);
            break;
        case "3add1000":
            wallet3 += 1000;
            Socketio.emit ("wallet3", wallet3);
            break;
        case "3add2000":
            wallet3 += 2000;
            Socketio.emit ("wallet3", wallet3);
            break;
        case "3minus100":
            wallet3 -= 100;
            Socketio.emit ("wallet3", wallet3);
            break;
        case "3minus500":
            wallet3 -= 500;
            Socketio.emit ("wallet3", wallet3);
            break;
        case "3minus1000":
            wallet3 -= 1000;
            Socketio.emit ("wallet3", wallet3);
            break;
        case "3minus2000":
            wallet3 -= 2000;
            Socketio.emit ("wallet3", wallet3);
            break;
        case "4add100":
            wallet4 += 100;
            Socketio.emit ("wallet4", wallet4);
            break;
        case "4add500":
            wallet4 += 500;
            Socketio.emit ("wallet4", wallet4);
            break;
        case "4add1000":
            wallet4 += 1000;
            Socketio.emit ("wallet4", wallet4);
            break;
        case "4add2000":
            wallet4 += 2000;
            Socketio.emit ("wallet4", wallet4);
            break;
        case "4minus100":
            wallet4 -= 100;
            Socketio.emit ("wallet4", wallet4);
            break;
        case "4minus500":
            wallet4 -= 500;
            Socketio.emit ("wallet4", wallet4);
            break;
        case "4minus1000":
            wallet4 -= 1000;
            Socketio.emit ("wallet4", wallet4);
            break;
        case "4minus2000":
            wallet4 -= 2000;
            Socketio.emit ("wallet4", wallet4);
            break;
        }
    });
    socket.on("move", data => {
        switch(data) {
        case "left":
            position.x -= 20;
            Socketio.emit ("position", position);
            break;
        case "right":
            position.x += 20;
            Socketio.emit ("position", position);
            break;
        case "up":
            position.y -= 20;
            Socketio.emit ("position", position);
            break;
        case "down":
            position.y += 20;
            Socketio.emit ("position", position);
            break;
        case "keepPosition":
            position.y += 0;
            Socketio.emit ("position", position);
            break;
        }
    });
    socket.on("move2", data2 => {
        switch(data2) {
        case "left2":
            position2.x -= 20;
            Socketio.emit ("position2", position2);
            break;
            case "right2":
            position2.x += 20;
            Socketio.emit ("position2", position2);
            break;
            case "up2":
            position2.y -= 20;
            Socketio.emit ("position2", position2);
            break;
            case "down2":
            position2.y += 20;
            Socketio.emit ("position2", position2);
            break;
        case "keepPosition2":
            position.y += 0;
            Socketio.emit ("position2", position);
            break;
        }
    });
    socket.on("move3", data3 => {
        switch(data3) {
        case "left3":
            position3.x -= 20;
            Socketio.emit ("position3", position3);
            break;
            case "right3":
            position3.x += 20;
            Socketio.emit ("position3", position3);
            break;
            case "up3":
            position3.y -= 20;
            Socketio.emit ("position3", position3);
            break;
            case "down3":
            position3.y += 20;
            Socketio.emit ("position3", position3);
            break;
        case "keepPosition3":
            position.y += 0;
            Socketio.emit ("position3", position);
            break;
        }
    });
    socket.on("move4", data4 => {
        switch(data4) {
        case "left4":
            position4.x -= 20;
            Socketio.emit ("position4", position4);
            break;
            case "right4":
            position4.x += 20;
            Socketio.emit ("position4", position4);
            break;
            case "up4":
            position4.y -= 20;
            Socketio.emit ("position4", position4);
            break;
            case "down4":
            position4.y += 20;
            Socketio.emit ("position4", position4);
            break;
            case "keepPosition4":
            position.y += 0;
            Socketio.emit ("position4", position);
            break;
        }
    });
});

Http.listen(3000, () => {
    console.log("Listening at :3000...");
    
    console.log();
});

//below this point is functions to help make the random pick faster


// return an integer in [0,i)
function randInt(i) {
  return Math.floor(Math.random() * i);
}

// return m values in the range [0,n)
function sampleS(m, n) {
   let s = new Set();
   while(s.size < m) {
      s.add(randInt(n));
   }
   return s;
}

// Use the "mix" approach, which goes like this:
//
// 1) l2 is the smallest value such that 2^l2 >= n
// 2) for each value x in the sequence 0..m-1 do this:
// 3) hash x, using a function similar to splitmix64,
//    which has no collision
// 4) if the hash is >= n, hash again, until < n
//
// This approach doesn't need a (bit-) set,
// as by design duplicates are avoided.
// The disadvantage is that it's a custom PRNG.
//
// See also:
// https://stackoverflow.com/questions/664014/what-integer-hash-function-are-good-that-accepts-an-integer-hash-key/12996028#12996028
// http://xorshift.di.unimi.it/splitmix64.c
//
// At step 4, we could also skip the value - but
// then the sequence can't be generated in parallel.

function mix(m, n) {
    m = m | 0;
    n = n | 0;
    var l2 = nextLog2(n) | 0;
    var shift = (l2 >> 1) | 0;
    var mask = ((1 << l2) - 1) | 0;
    let s = new Int32Array(m);
	  // var fbs = new FastBitSet();
    for (let j = 0; (j|0) < m; j = (j+1)|0) {
        s[j] = next(j, n, shift, mask);
        // let x = fbs.checkedAdd(s[j]);
        // assert(x == 1, "Bug in add at " + j);
    }
    return s;
}

function next(x, n, shift, mask) {
    x = x | 0;
    n = n | 0;
    while (true) {
        x = hash(x, shift, mask);
        if ((x|0) < n) {
            return x;
        }
    }
}

function nextLog2(x) {
    x = x | 0;
    let n = 1;
    while ((1 << n) < x) {
        n++;
    }
    return n | 0;
}

function hash(x, shift, mask) {
    x = x | 0;
    shift = shift | 0;
    mask = mask | 0;
    x = Math.imul((x >>> shift) ^ x, 0x45d9f3b);
    x = x & mask;
    x = Math.imul((x >>> shift) ^ x, 0x45d9f3b);
    x &= mask;
    x = x ^ (x >>> shift);
    x &= mask;
    return x | 0;
}

// return m values in the range [0,n)
// attributed to Floyd
function sampleF2(m, n) {
    let s = new Set();
    for (let j = n - m; j < n; j++) {
        const t = randInt(j);
        s.add( s.has(t) ? j : t );
    }
    return s;
};
