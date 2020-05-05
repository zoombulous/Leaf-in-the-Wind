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



var travelCards = [
    [
        z_broken_shuttle,
        z_cruiser_patrol,
        z_engine_room,
        z_minor_tech_diff,
        z_the_big_black,
        z_broken_shuttle,
        z_cruiser_patrol,
        z_engine_room,
        z_minor_tech_diff,
        z_the_big_black,
        z_broken_shuttle,
        z_cruiser_patrol,
        z_engine_room,
        z_minor_tech_diff,
        z_the_big_black,
        z_broken_shuttle,
        z_cruiser_patrol,
        z_engine_room,
        z_minor_tech_diff,
        z_the_big_black,
        z_broken_shuttle,
        z_cruiser_patrol,
        z_engine_room,
        z_minor_tech_diff,
        z_the_big_black,
        z_broken_shuttle,
        z_cruiser_patrol,
        z_engine_room,
        z_minor_tech_diff,
        z_the_big_black,
        z_broken_shuttle,
        z_cruiser_patrol,
        z_engine_room,
        z_minor_tech_diff,
        z_the_big_black,
        z_broken_shuttle,
        z_cruiser_patrol,
        z_engine_room,
        z_minor_tech_diff,
        z_the_big_black,
        z_broken_shuttle,
        z_cruiser_patrol,
        z_engine_room,
        z_minor_tech_diff,
        z_the_big_black,
        z_broken_shuttle,
        z_cruiser_patrol,
        z_engine_room,
        z_minor_tech_diff,
        z_the_big_black
    ],
    [z_the_big_black]
];


var playerCards = [
    // [inventory], [chosen], [index]
    [ [    "z_broken_shuttle",
           "z_cruiser_patrol",
           "z_engine_room",
           "z_minor_tech_diff",
           "z_the_big_black"
           
           
      ], [], [4] ],
    [ [], [], [0] ],
    [ [], [], [0] ],
    [ [], [], [0] ]
];

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

function giveTemplate(giving, getting) {
    playerCards[giving][1] = playerCards[giving][0][ playerCards[giving][2] ]
    
    console.log("giving player index = ",playerCards[giving][2],
                "giving player chosen card at start of function = ",
                        playerCards[giving][1]);
    
    console.log("before push, giving player chosen = ",
                        playerCards[giving][1]);
    
    playerCards[getting][0].push(playerCards[giving][1]);
    
    if (playerCards[giving][0].length === 0 && Array.isArray(playerCards[giving][0])) {
                console.log("giving player inv is empty, you cannot give!");
            };

    var y = playerCards[giving][0]
                .indexOf
    (playerCards[giving][1]);
    
    playerCards[giving][0]
        .splice
    (playerCards[giving][0]
             .indexOf
             (playerCards[giving][1]), 1);
    
    playerCards[getting][2] = playerCards[getting][0].length - 1;
    
    if (y === 0) {
                playerCards[giving][1] =
                    playerCards[giving][1][playerCards[giving][0].length]
            };
    playerCards[giving][1] = playerCards[giving][0][y];
    
    playerCards[getting][0] = playerCards[getting][0].filter(function(x) {
                return x !== undefined;
            });
    
    if (playerCards[giving][2] === 0) {
                playerCards[giving][2] = [giving][0].length
            };
    
    playerCards[giving][2] = playerCards[giving][2] - 1;
    playerCards[giving][1] = playerCards[giving][0][ playerCards[giving][2] ]
    playerCards[giving][2] = Math.max(0, playerCards[giving][2]);

    playerCards[giving][2] = playerCards[giving][2] || 0;
    
    
    console.log("giving player inv = ",
                        playerCards[giving][0],
                        "getting player inv = ",
                        playerCards[getting][0],
                        "giving player chosen = ",
                        playerCards[giving][1],
                        "giving player index = ",
                        playerCards[giving][2]);
}

function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return 'data:image/jpeg;base64,' +
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
    socket.emit('noOfConnections', Object.keys(Socketio.sockets.connected).length)

    socket.on('disconnect', () => {
        console.log('disconnected')
        Socketio.emit('noOfConnections', Object.keys(Socketio.sockets.connected).length)
    });



    socket.on('chat-message', (msg) => {
        socket.broadcast.emit('chat-message', msg)
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
    
    
    socket.on ("give", giveTo => {
        switch(giveTo) {
        case "1to2":

            giveTemplate(0, 1);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "oneprev":

            console.log("at least you tried");
            
            if (playerCards[0][2] === 0) {
                playerCards[0][2] = p1Inv.length
            };
            playerCards[0][2] = playerCards[0][2] - 1;
            playerCards[0][1] = playerCards[0][0][ playerCards[0][2] ]
            p1Picker();
            
            console.log("pl indx = ", playerCards[0][2], "p1 viewing previous card", playerCards[0][1]);
            Socketio.emit ("playerCards", playerCards);
            break;
        }
    });

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
        case "1add5000":
            wallet1 += 5000;
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
    playerCards[0][1] = playerCards[0][0][ playerCards[0][2] ]
    console.log("Listening at :3000...");
    console.log("player 1 inventory length = ",
                playerCards[0][0].length,
                "player 1 inventory = ",
                playerCards[0][0],
                "player 1 chosen = ",
                playerCards[0][1]
               );
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
