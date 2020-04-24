const Express = require ("express")();
const Http = require ("http").Server(Express);
const Socketio = require ("socket.io")(Http);
var fs = require('fs');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

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

var z_broken_shuttle = base64_encode('./z_broken_shuttle.jpg');
                        
var z_cruiser_patrol = base64_encode('./z_cruiser_patrol.jpg');
                       
var z_engine_room = base64_encode('./z_engine_room.jpg');
                     
var z_minor_tech_diff = base64_encode('./z_minor_tech_diff.jpg');
                         
var z_the_big_black = base64_encode('./z_the_big_black.jpg')



var travelCards = [
    [
        z_broken_shuttle,
        z_cruiser_patrol,
        z_engine_room,
        z_minor_tech_diff,
        z_the_big_black
    ],
    [z_the_big_black]
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

Socketio.on("connection", socket => {
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
    socket.emit("travelCards", travelCards)
    socket.on ("movingPicker", movingMove => {
        switch(movingMove) {
        case "alliance":
            var chosenImage =
                Math.floor(Math.random() *
                           travelCards[0].length);
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
    socket.on ("picker", chosenMove => {
        switch(chosenMove) {
        case "alliance":
            var chosenImage = Math.floor(Math.random() * images.length);
            chosenCard = images[chosenImage];
            var val = images[chosenImage];
            
            images.splice(chosenImage, 1);
            
            console.log (images);
            return val;
            
            Socketio.emit ("chosenCard", chosenCard);
            Socketio.emit ("images", images);
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
    console.log("Listening at :3000...");
});
