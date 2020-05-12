<template>
<div class="container">
  <h1>Firefly Game</h1>
  <div v-if="ready">
    <div class="row">
      <div class="col-md-4 col-lg-6 offset-lg-3 offset-md-4">
        
        <h4>{{name}}</h4>          
        <h5>{{connectionCount}} Connected, {{online.length}} Online</h5>
        
        <p v-for="item in info" :key="item">
          <small>{{item.name}} {{item.type}}</small>
        </p>
      </div>
    </div>
  </div>
  
  <div v-else>
    <div class="row">
      <div class="col">
        <form @submit.prevent="setName" class="mt-4">
          <div class="form-group row">
            <input type="text" class="form-control col" v-model="name" placeholder="Set Your Name First">
            <input type="submit" value="Add" class="btn btn-sm btn-info ml-1 col-2">
          </div>
        </form>
      </div>
    </div>
  </div>
    
  <div v-if="player === '1'">
    <div class="row">
      <div class="col">
        <h4>You Are Player {{player}}!</h4>
      </div>
    </div>
    
    <div class="row">
      <div class="col">
        <p>Money {{ wallet1 }}</p>
      </div>
    </div>
    
    <div class="row">
      <div class="col">
        <img src="./money/100Credits.jpg"
             v-on:click="moveMoney1('1add100')"
             height="100px"/>
      </div>
      <div class="col">
        <img src="./money/500Credits.jpg"
             v-on:click="moveMoney1('1add500')"
             height="100px"/>
      </div>
      <div class="col">
        <img src="./money/1000Credits.jpg"
             v-on:click="moveMoney1('1add1000')"
             height="100px"/>
      </div>
      <div class="col">
        <img src="./money/2000Credits.jpg"
             v-on:click="moveMoney1('1add2000')"
             height="100px"/>
      </div>
      <p>
        <button v-on:click="moveMoney1('1minus100')">minus 100</button>
        <button v-on:click="moveMoney1('1minus500')">minus 500</button>
        <button v-on:click="moveMoney1('1minus1000')">minus 1000</button>
        <button v-on:click="moveMoney1('1minus2000')">minus 2000</button>
      </p>
    </div>
    
    <div class="col">
      <p>
        <button v-on:click="move('left')">Left</button>
        <button v-on:click="move('right')">Right</button>
        <button v-on:click="move('up')">Up</button>
        <button v-on:click="move('down')">Down</button>
        <button v-on:click="move('keepPosition')">stay</button>
      </p>
    </div>
  </div>
  
  <div v-else-if="player === '2'">
    <div class="row">
      <div class="col">
        <h4>You Are Player {{player}}!</h4>
      </div>
    </div>
    
    <div class="row">
      <div class="col">
        <p>Money {{ wallet1 }}</p>
      </div>
    </div>
    
    <div class="row">
      <div class="col">
        <img src="./money/100Credits.jpg"
             v-on:click="moveMoney1('1add100')"
             height="100px"/>
      </div>
      <div class="col">
        <img src="./money/500Credits.jpg"
             v-on:click="moveMoney1('1add500')"
             height="100px"/>
      </div>
      <div class="col">
        <img src="./money/1000Credits.jpg"
             v-on:click="moveMoney1('1add1000')"
             height="100px"/>
      </div>
      <div class="col">
        <img src="./money/2000Credits.jpg"
             v-on:click="moveMoney1('1add2000')"
             height="100px"/>
      </div>
      <p>
        <button v-on:click="moveMoney1('1minus100')">minus 100</button>
        <button v-on:click="moveMoney1('1minus500')">minus 500</button>
        <button v-on:click="moveMoney1('1minus1000')">minus 1000</button>
        <button v-on:click="moveMoney1('1minus2000')">minus 2000</button>
      </p>
    </div>
    
    <div class="col">
      <p>
        <button v-on:click="move('left')">Left</button>
        <button v-on:click="move('right')">Right</button>
        <button v-on:click="move('up')">Up</button>
        <button v-on:click="move('down')">Down</button>
        <button v-on:click="move('keepPosition')">stay</button>
      </p>
    </div>
    
      </div>
  
  
  <div v-else-if="player === '3'">
    <div class="row">
      <div class="col">
        <h4>You Are Player {{player}}!</h4>
      </div>
    </div>
    <div>
      <button @click="supply('1box1')">change supply</button>
      <button @click="player2Prev">Previous</button>
      <button @click="player2Next">Next</button>
    </div>
    <div class="row">
      <div class="col">
        <ul id="example-1">
          <li v-for="item in shipInv[1][1][0]" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col">
        
        <div class="img-wrapper">
          <div class="img1">
               <p v-if="player2Chosen"> 
                 <img style="width:50%" :src="player2Chosen" alt=""></p>
          </div>
          <div class="img2">
            <img v-bind:src="shipInv[1][0][0][0]"
                 v-on:click="supply('1box1')"
                 height="50px"/>
          </div>
          <div class="img3">
            <img v-bind:src="shipInv[1][0][1][0]"
                 v-on:click="supply('1box2')"
                 height="50px"/>
          </div>
          
          
          
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col pt-5">
        <p></p>
      </div>
    </div>

    <div class="row">
      <div class="col pt-5 pb-5">
        <p></p>
      </div>
    </div>

    <div class="row">
      <div class="col pt-5">
        <p></p>
      </div>
    </div>

    <div class="row">
      <div class="col pt-5 pb-5">
        <p></p>
      </div>
    </div>
    
    
    <div class="row">
      <div class="col">
        <p>Money {{ wallet1 }}</p>
      </div>
    </div>
    
    <div class="row">
      <div class="col">
        <img src="./money/100Credits.jpg"
             v-on:click="moveMoney1('1add100')"
             height="100px"/>
      </div>
      <div class="col">
        <img src="./money/500Credits.jpg"
             v-on:click="moveMoney1('1add500')"
             height="100px"/>
      </div>
      <div class="col">
        <img src="./money/1000Credits.jpg"
             v-on:click="moveMoney1('1add1000')"
             height="100px"/>
      </div>
      <div class="col">
        <img src="./money/2000Credits.jpg"
             v-on:click="moveMoney1('1add2000')"
             height="100px"/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p>
          <button v-on:click="moveMoney1('1minus100')">minus 100</button>
          <button v-on:click="moveMoney1('1minus500')">minus 500</button>
          <button v-on:click="moveMoney1('1minus1000')">minus 1000</button>
          <button v-on:click="moveMoney1('1minus2000')">minus 2000</button>
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <p>
          <button v-on:click="move('left')">Left</button>
          <button v-on:click="move('right')">Right</button>
          <button v-on:click="move('up')">Up</button>
          <button v-on:click="move('down')">Down</button>
          <button v-on:click="move('keepPosition')">stay</button>
        </p>
      </div>
    </div>
    
  </div>
  
  <div v-else-if="player === '4'">
    <div class="row">
      <div class="col">
        <h4>You Are Player {{player}}!</h4>
      </div>
    </div>
    
    <div class="row">
      <div class="col">
        <p>Money {{ wallet1 }}</p>
      </div>
    </div>
    
    <div class="row">
      <div class="col">
        <img src="./money/100Credits.jpg"
             v-on:click="moveMoney1('1add100')"
             height="100px"/>
      </div>
      <div class="col">
        <img src="./money/500Credits.jpg"
             v-on:click="moveMoney1('1add500')"
             height="100px"/>
      </div>
      <div class="col">
        <img src="./money/1000Credits.jpg"
             v-on:click="moveMoney1('1add1000')"
             height="100px"/>
      </div>
      <div class="col">
        <img src="./money/2000Credits.jpg"
             v-on:click="moveMoney1('1add2000')"
             height="100px"/>
      </div>
      <p>
        <button v-on:click="moveMoney1('1minus100')">minus 100</button>
        <button v-on:click="moveMoney1('1minus500')">minus 500</button>
        <button v-on:click="moveMoney1('1minus1000')">minus 1000</button>
        <button v-on:click="moveMoney1('1minus2000')">minus 2000</button>
      </p>
    </div>
    
    <div class="col">
      <p>
        <button v-on:click="move('left')">Left</button>
        <button v-on:click="move('right')">Right</button>
        <button v-on:click="move('up')">Up</button>
        <button v-on:click="move('down')">Down</button>
        <button v-on:click="move('keepPosition')">stay</button>
      </p>
    </div>
    
  </div>
  
  
  <div v-else>
    <div class="row">
         <div class="col">
           <p>Please Pick a Player Number</p>
         </div>
    </div>
    
    <div class="row">
      <div class="col">
        <form @submit.prevent="setName" class="mt-4">
          <div class="form-group row">
            <select class="form-control col" v-model="player" label="Choose Your Player Number">
              <option value="null" disabled>Choose Your Number</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </form>
      </div>
    </div>

    <div v-if="ready">
      <div class="row">
        <div class="col">
          <ul id="chatbox">
            <table class="list-group text-right">
              <small v-if="typing" class="text-grey">
                <i>{{typing}} is typing</i>
              </small>
              <li class="list-group-item" v-for="message in messages" :key="message">
                <span :class="{'float-left':(message.type===1)}">
                  <small class="text-blue">:{{message.by}}</small>
                  {{message.message}}
                </span>
              </li>
            </table>
          </ul>
          <div class="card-body">
            <form @submit.prevent="send">
              <div class="form-group">
                <input type="text" class="form-control" v-model="newmessage" placeholder="Type Here">
              </div>
            </form>
          </div>
        </div>
      </div>  
    </div>
    
    <div class="row">
      <div class="col">
        <h5>{{travelCards[0].length}} Travel Cards Left</h5>
        <p v-if="travelCards[1]">
          <img style="width:25%" v-bind:src="travelCards[1]" alt=""></p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button @click="movingPicker('alliance')">Travel In Blue</button>
        
      </div>
    </div>
  </div>
    
  <div class="row">
    <div class="col">
      <div id="container" class="container">
        <div>
          <canvas ref="game1"
                  width="2500"
                  height="1000"
                  z-index="4"
                  style="border: 1px solid black; position: absolute;">
          </canvas>
        </div>
        <div>
          <canvas ref="game2"
                  width="2500"
                  height="1000"
                  z-index="3"
                  style="border: 1px solid black; position: absolute;">
          </canvas>
        </div>
        <div>
          <canvas ref="game3"
                  width="2500"
                  height="1000"
                  z-index="2"
                  style="border: 1px solid black; position: absolute;">
          </canvas>
        </div>
        <div>
          <canvas ref="game4"
                  width="2500"
                  height="1000"
                  z-index="1"
                  style="border: 1px solid black; position: absolute;">
          </canvas>
        </div>
        <div>
          <canvas ref="canvas"
                  id="canvas"
                  width="2500"
                  height="1000"
                  z-index="0"
                  style="border: 1px solid black position: relative;">
          </canvas>
        </div>
      </div>
    </div>
  </div>
  <div class="row map-padding" v-if="ready">
    <div class="col">
      <p></p>
    </div>
  </div>
  <div class="row" v-if="ready">
    <div class="col">
      <p>
        <button v-on:click="move('left')">Left</button>
        <button v-on:click="move('right')">Right</button>
        <button v-on:click="move('up')">Up</button>
        <button v-on:click="move('down')">Down</button>
        <button v-on:click="move('keepPosition')">stay</button>
      </p>
      
      <p>
        <button v-on:click="move2('left2')">Left2</button>
        <button v-on:click="move2('right2')">Right2</button>
        <button v-on:click="move2('up2')">Up2</button>
        <button v-on:click="move2('down2')">Down2</button>
      </p>
      
      <p>
        <button v-on:click="move3('left3')">Left3</button>
        <button v-on:click="move3('right3')">Right3</button>
        <button v-on:click="move3('up3')">Up3</button>
        <button v-on:click="move3('down3')">Down3</button>
      </p>
      
      <p>
        <button v-on:click="move4('left4')">Left4</button>
        <button v-on:click="move4('right4')">Right4</button>
        <button v-on:click="move4('up4')">Up4</button>
        <button v-on:click="move4('down4')">Down4</button>
      </p>
    </div>
  </div>
  
  <div class="row" v-if="ready">
    <div class="col">
      <p>Money {{ wallet1 }}</p>

      <img src="./money/100Credits.jpg"
           v-on:click="moveMoney1('1add100')"
           height="100px"/>

      <img src="./money/500Credits.jpg"
           v-on:click="moveMoney1('1add500')"
           height="100px"/>

      <img src="./money/1000Credits.jpg"
           v-on:click="moveMoney1('1add1000')"
           height="100px"/>

      <img src="./money/2000Credits.jpg"
           v-on:click="moveMoney1('1add2000')"
           height="100px"/>
      <p>
        <button v-on:click="moveMoney1('1minus100')">minus 100</button>
        <button v-on:click="moveMoney1('1minus500')">minus 500</button>
        <button v-on:click="moveMoney1('1minus1000')">minus 1000</button>
        <button v-on:click="moveMoney1('1minus2000')">minus 2000</button>
      </p>
    </div>
  </div>
  
  <div class="row" v-if="ready">
    <div class="col">
      <img style="width:20%" :src="test" alt="">
      <p> above this is a test loaded from client </p>
      <p> {{test}} </p>
      <p> above this is the name of the test image </p>
      <p> {{nestedImagesArray[1]}} </p>
      <p v-if="nestedImagesArray[1]">
        <img style="width:20%" v-bind:src="nestedImagesArray[1]" alt=""></p>
      <p> above this is the nested array random image! </p>
      {{nestedImagesArray[0].length}}
      <button @click="nestedPicker">Draw a Card!</button>

      <p v-if="chosenCard">
        <img style="width:20%" v-bind:src="chosenCard" alt=""></p>
      <p> above this is an image loading from base64 from socket.io without a working random function </p>
      {{images.length}}
      <p> images left in deck </p>
      <button @click="picker('alliance')">Draw a Card!</button>
      <button @click="reshuffle">Reshuffle Deck!</button>
      
      <p> {{travelCards[1]}} </p>
      <p v-if="travelCards[1]">
        <img style="width:100%" v-bind:src="travelCards[1]" alt=""></p>
      <p> above this is a nested array image run through random function from socket.io! </p>
      {{travelCards[0].length}}
      <button @click="movingPicker('alliance')">Draw move Card!</button>
    </div>
  </div>  
  
  <div class="row" v-if="ready">
    <div class="col">
      <p>---------------------------</p>
      <p> {{playerCards[0][1]}} </p>
      <p v-if="playerCards[0][1]">
        <img style="width:20%" :src="playerCards[0][1]" alt=""></p>
      <p>p1 inv length = </p>
      {{playerCards[0][0].length}}
      <p>p2 inv length = </p>
      <p> </p>
      {{playerCards[1][0].length}}
      <button @click="give('oneprev')">View Previous</button>
      <button @click="give('onenext')">Next</button>
      <button @click="give('1to2')">Give</button>
      
      <p>Above this is player 1 give to player 2</p>
    </div>`
  </div>
  
  <div class="row" v-if="ready">
    <div class="col">
      <p v-if="player1Chosen">
        <img style="width:50%" :src="player1Chosen" alt=""></p>
      <button @click="player1Prev">Previous</button>
      <button @click="player1Next">Next</button>
      <button @click="p1GiveP2">Give</button>
      
      
    </div>`
  </div>
  
  <div class="row" v-if="ready">
    <div class="col">
      <p v-if="player2Chosen">
        <img style="width:20%" :src="player2Chosen" alt=""></p>
      <button @click="player2Prev">Previous</button>
      <button @click="player2Next">Next</button>

    </div>`
  </div>
  
  <div class="row" v-if="ready">
    <div class="col">      
      
      <div class="dice-wrapper">
        <div :class="getDice"></div>
        <button @click="setDice">Roll the dice!</button>
      </div>
    </div>
  </div>
  </div>
 
</template>

<script src="vue.js"></script>
<script src="https://unpkg.com/vue-gallery-slideshow"></script>

<style>
@import './game_styles.css';
</style>

<script>
import io from "socket.io-client";
import "./dice_styles/dice.css";
import "./cards/alliance_closer_folder.css";
import "./z_broken_shuttle.jpg";
import "./z_cruiser_patrol.jpg";
import "./z_engine_room.jpg";
import "./z_minor_tech_diff.jpg";
import "./z_the_big_black.jpg";
import "./bonanza.png";
import "./bonniemae.png";
import VueGallerySlideshow from 'vue-gallery-slideshow';
import myImage from "./map-min.jpg";
import ship from "./ship.png";
var z_broken_shuttle = require("./z_broken_shuttle.jpg")
var z_cruiser_patrol = require("./z_cruiser_patrol.jpg")
var z_engine_room = require("./z_engine_room.jpg")
var z_minor_tech_diff = require("./z_minor_tech_diff.jpg")
var z_the_big_black = require("./z_the_big_black.jpg")
var bonanza = require("./bonanza.png")
var bonniemae = require("./bonniemae.png")
export default {
    name: "Firefly",
    data() {
        return {
            
            newmessage: null,
            messages: [],
            typing: false,
            online: [],
            name: null,
            ready: false,
            player: null,
            shipCards: [
                [bonanza], [bonniemae]],
            info: [],
            connectionCount: 0,
            nestedImagesArray: [
                [
                    z_broken_shuttle,
                    z_cruiser_patrol,
                    z_engine_room,
                    z_minor_tech_diff,
                    z_the_big_black
                ],
                []
            ],
            travelCards: [ [z_engine_room], [z_the_big_black] ],
            playerCards: [ [ [], [], [] ],
                           [ [], [], [] ],
                           [ [], [], [] ],
                           [ [], [], [] ]
                         ],
            images: [
                z_broken_shuttle,
                z_cruiser_patrol,
                z_engine_room,
                z_minor_tech_diff,
                z_the_big_black
                
            ],
            chosenCard:[],
            test:[z_broken_shuttle],
            diceNum: {},
            cardNum: {},
            shipInv: [
                require("./fuel.jpg"),
                require("./parts.jpg"),
                require("./cargo.jpg"),
                require("./contraband.jpg"),
                require("./passenger.jpg"),
                require("./fugitive.jpg")
            ],
            
            player1Inv: [
                require("./z_broken_shuttle.jpg"),
                require("./z_cruiser_patrol.jpg"),
                require("./z_engine_room.jpg"),
                require("./z_minor_tech_diff.jpg")
            ],
            player2Inv: [
                require("./bonanza.png"),
                require("./bonniemae.png")
            ],
            index: null,
            player1Chosen: {},
            player2Chosen: {},
            player1Index: [],
            player2Index: [],
            player3Inv: {},
            player4Inv: {},
            removedCards: {},
            socket: {},
            context: {},
            wallet1: 4,
            wallet2: 4,
            wallet3: 4,
            wallet4: 4,
            position: {
                x: 0,
                y: 0
            },
            position2: {
                x: 0,
                y: 0
            },
            position3: {
                x: 0,
                y: 0
            },
            position4: {
                x: 0,
                y: 0
            }
        }
    },
      created() {
        this.socket = io("http://localhost:3000");
this.socket.on('chat-message', (data) => {
            this.messages.push({ message: data.message, type: 1, by: data.user })
            this.typing = false
            this.$nextTick(() => {
            this.scrollToEnd();
            });
        })
        
        this.socket.on('typing', (data) => {
            console.log(data)
            this.typing = data
            
        })
this.socket.on('stoptyping', () => {
            this.typing = false
            this.$nextTick(() => {
                var messageBox = document.getElementByID('chatbox');
                messageBox.scrollTop = messageBox.scrollHeight;
            });
            this.scrollToEnd();
                })
this.socket.on('left', (name) => {
                    this.online.splice(this.online.indexOf(name))
                    this.info.push({ name: name, type: 'Left' })
                    setTimeout(() => {
                        this.info = []
                    }, 5000);
                })
        
        this.socket.on('joined', (name) => {
                    this.online.push(name)
                    this.info.push({ name: name, type: 'Joined' })
                    setTimeout(() => {
                        this.info = []
                    }, 5000);
                })
        },
    mounted() {
        this.func();
        this.context1 = this.$refs.game1.getContext("2d");
        this.context2 = this.$refs.game2.getContext("2d");
        this.context3 = this.$refs.game3.getContext("2d");
        this.context4 = this.$refs.game4.getContext("2d");
        this.socket.on("wallet1", moneyData1 => {
            this.wallet1 = moneyData1;
        });
 window.onbeforeunload = () => {
            this.socket.emit('left', this.name)
        }
        this.socket.on('noOfConnections', (count) => {
            this.connectionCount = count
        })
        this.socket.on("travelCards", movingMove => {
            console.log("socket on before travelCards connect");
            this.travelCards = movingMove;
            
        });
        this.socket.on ("playerCards", giveTo => {
            console.log("someone tried to give a card");
            this.playerCards = giveTo;
            console.log("playerCards should equal giveTo",
"player1 inv length = ", this.playerCards[0][0].length,
"player2 inv length = ", this.playerCards[1][0].length);
        });
        
this.socket.on ("shipInv", changeSupply => {
console.log("vue tried changing ship supply");
this.shipInv = changeSupply
});
        this.socket.on("position", data => {
            let img = new Image();
            img.src = ship;
            this.position = data;
            this.context1.fillStyle = 'green'
            this.context1.clearRect(0, 0, this.$refs.game1.width,
                                   this.$refs.game1.height);
            this.context1.drawImage(img, this.position.x,
                                    this.position.y, 200, 200
                                 );
            
        });
        this.socket.on("position2", data2 => {
            this.position2 = data2;
            this.context2.fillStyle = 'green'
            this.context2.clearRect(0, 0, this.$refs.game2.width,
                                   this.$refs.game2.height);
            this.context2.fillRect(this.position2.x,
                                  this.position2.y, 100, 100
                                  ); 
        });
        this.socket.on("position3", data3 => {
            this.position3 = data3;
            this.context3.fillStyle = 'green'
            this.context3.clearRect(0, 0, this.$refs.game3.width,
                                   this.$refs.game3.height);
            this.context3.fillRect(this.position3.x,
                                  this.position3.y, 100, 100
                                  ); 
        });
        this.socket.on("position4", data4 => {
            this.position4 = data4;
            this.context4.fillStyle = 'green'
            this.context4.clearRect(0, 0, this.$refs.game4.width,
                                   this.$refs.game4.height);
            this.context4.fillRect(this.position4.x,
                                  this.position4.y, 100, 100); 
        });
    },
    methods: {
  send() {
            this.socket.emit('chat-message', { message: this.newmessage, user: this.name })
            this.messages.push({ message: this.newmessage, type: 0, by: 'Me' })
            this.newmessage = null
            
            this.$nextTick(() => {
                this.scrollToEnd();
            });
},
 isTyping() {
            this.socket.emit('typing', this.name)
            
        },
        setName() {
            this.socket.emit('joined', this.name)
            this.ready = true
        },
        scrollToEnd: function() {
            var chatbox = this.$el.querySelector("#chatbox");
            chatbox.scrollTop = container.scrollHeight;
        },
        func: function() {
            let cvn = this.$refs.canvas;
            let ctx = cvn.getContext("2d");
            let bg = new Image();
            bg.src = myImage;
            bg.onload = function() {
                ctx.drawImage(bg, 0, 0, bg.width * 1  , bg.height * 1  );
            };
        },
        backuPicker: function() {
            var chosenImage = Math.floor(Math.random() * this.images.length);
            this.chosenCard = this.images[chosenImage];
            var val = this.images[chosenImage];
            
            this.images.splice(chosenImage, 1);
            
            return val;
            
        },
        movingPicker: function(allianceDirection) {
            
            this.socket.emit("movingPicker", allianceDirection);
            this.socket.emit("travelCards", travelCards);
            
            return val;
            
        },
        give: function(x) {
            this.socket.emit("give", x);
            this.socket.emit("playerCards", playerCards);
        },
supply: function(x) {
this.socket.emit("supply", x);
this.socket.emit("shipInv", shipInv);
},
        nestedPicker: function() {
            var chosenImage =
                Math.floor(Math.random() *
                           this.nestedImagesArray[0].length);
            this.nestedImagesArray[1] =
                this.nestedImagesArray[0][chosenImage];
            var val =
                this.nestedImagesArray[0][chosenImage];
            
            this.nestedImagesArray[0].splice(chosenImage, 1);
            
            return val;
            
        },
        player1Picker: function() {
            var x = this.player1Index;
            this.player1Chosen = this.player1Inv[x];
            var val = this.player1Inv[x];
        },
        p1GiveP2: function() {
            var x = Math.floor(this.player1Inv.length);
            this.player2Inv.push(this.player1Chosen);
            
            this.player1Chosen = this.player1Inv[x];
            this.player1Inv.splice(this.player1Chosen, 1);
            
            this.player2Last();
            this.player1Prev();
            
        },
        player2Picker: function() {
            var x = this.player2Index;
            this.player2Chosen = this.player2Inv[x];
            var val = this.player2Inv[x];
        },
        player2Last: function () {
            this.player2Index = this.player2Inv.length - 1;
            this.player2Picker();
        },
        player2Next: function () {
            this.player2Index++;
            this.player2Index = this.player2Index % this.player2Inv.length;
            this.player2Picker();
        },
        player2Prev: function () {
            if (this.player2Index === 0) {
                 this.player2Index = this.player2Inv.length
                  }
            this.player2Index = this.player2Index - 1;
            this.player2Picker();
        },
        player1Next: function () {
            this.player1Index++;
            this.player1Index = this.player1Index % this.player1Inv.length;
            this.player1Picker();
        }, 
        
        player1Prev: function () {
            if (this.player1Index === 0) {
                 this.player1Index = this.player1Inv.length
                  }
            this.player1Index = this.player1Index - 1;
            this.player1Picker();
        },
        
        p1ViewPrev: function () {
            console.log("tried to change to previous card");
            if (this.playerCards[0][2] === 0) {
                this.playerCards[0][2] = this.playerCards[0][0].length
            }
            this.playerCards[0][2] = this.playerCards[0][2] - 1;
            
            var x = this.playerCards[0][2];
            this.playerCards[0][1] = this.playerCards[0][0][x];
            console.log("was successful changing to previous card",
                        "player 1 inv = ",playerCards[0][0].length,
                        "player 2 inv = ",playerCards[1][0].length);
        },
        
        p1ViewNext: function () {
            this.playerCards[0][2]++;
            this.playerCards[0][2] = thisplayerCards[0][2] % this.playerCards[0][0].length;
            var x = this.playerCards[0][2];
            this.playerCards[0][1] = this.playerCards[0][0][x];
        }, 
        
        reshuffle: function() {
            
            this.images = [
                require("./z_broken_shuttle.jpg"),
                require("./z_cruiser_patrol.jpg"),
                require("./z_engine_room.jpg"),
                require("./z_minor_tech_diff.jpg"),
                require("./z_the_big_black.jpg")
            ];
            this.picker()
            console.log ("reshuffled");
        },
        
        setRandomDiceData() {            
            const randomDiceNum = Math.floor(Math.random() * 6) + 1;
            this.diceNum = randomDiceNum;
        },
        
        setRandomCardData() {            
            const randomCardNum = Math.floor(Math.random() * 6) + 1;
            this.cardNum = randomCardNum;
        },
        
        setDice() {
            let count = 0;
            const timer = setInterval(() => {
                this.setRandomDiceData();
                if (count >= 6) {
                    clearInterval(timer);
                }
                count += 1;
            }, 150);
        },
        setCard() {
            let count = 0;
            const timer = setInterval(() => {
                this.setRandomCardData();
                if (count >= 6) {
                    clearInterval(timer);
                }
                count += 1;
            }, 150);
        },
        
        move(direction) {
            this.socket.emit("move", direction);
            console.log(JSON.stringify(this.position))
            console.log(JSON.stringify(this.position2))
            console.log(JSON.stringify(this.position3))
            console.log(JSON.stringify(this.position4))
        },
        
        move2(direction2) {
            this.socket.emit("move2", direction2);
        },
        move3(direction3) {
            this.socket.emit("move3", direction3);
        },
        move4(direction4) {
            this.socket.emit("move4", direction4);
        },
        moveMoney1(amount1) {
            this.socket.emit("moveMoney1", amount1)
        },
        picker(allianceDirection) {
            var chosenImage = Math.floor(Math.random() * this.images.length);
            this.chosenCard = this.images[chosenImage];
            var val = this.images[chosenImage];
            
            this.images.splice(chosenImage, 1);
            this.socket.emit("picker", allianceDirection);
            this.socket.emit("chosenCard", chosenCard);
            this.socket.emit("images", images);
        }
    },
    beforeMount(){
        
        this.player1Next(),
        this.player2Next()
        
    },
    computed: {
        
        getDice() {
            this.setRandomDiceData();
            return `dice dice-${this.diceNum}`;
        },
        getCard() {
            this.setRandomCardData();
            return `card card-${this.cardNum}`;
        },
        
        
    },
    
    
    
    
    watch: {
        
        diceNum() {
            console.log("Dice rolled!", this.test);
        },
 newmessage(value) {
            value ? this.socket.emit('typing', this.name) : socket.emit('stoptyping')
        }
    }
}
</script>
