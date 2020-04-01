<template>
<div class="container">
  <h1>Firefly Game</h1>
  <div class="row">
    <div class="col">
         <div style="position: relative;">
           <canvas ref="game1"
                   width="1121"
                   height="448"
                   z-index="0"
                   style="border: 1px solid black; position: absolute;">
           </canvas>
           <canvas ref="game2"
                   width="1121"
                   height="448"
                   z-index="1"
                   style="border: 1px solid black; position: absolute;">
           </canvas>
           <canvas ref="game3"
                      width="1121"
                   height="448"
                   z-index="2"
                   style="border: 1px solid black; position: absolute;">
           </canvas>
           <canvas ref="game4"
                   width="1121"
                   height="448"
                   z-index="3"
                   style="border: 1px solid black; position: absolute;">
           </canvas>
           <canvas ref="canvas"
                   id="canvas"
                   width="1121"
                   height="448"
                   z-index="4"
                   style="border: 1px solid black; position: absolute;">
           </canvas>
         </div>
    </div>
  </div>
  <div class="row map-padding">
    <div class="col">
      <p></p>
    </div>
  </div>
  
  <div class="row">
    <div class="col">
      <p v-if="chosenCard">
        <img style="width:20%" :src="chosenCard" alt=""></p>
      <button @click="picker">Draw a Card!</button>
      <button @click="reshuffle">Reshuffle Deck!</button>
    </div>
  </div>  

  
  <div class="row">
    <div class="col">
      <p v-if="player1Chosen">
        <img style="width:20%" :src="player1Chosen" alt=""></p>
      <button @click="player1Prev">Previous</button>
      <button @click="player1Next">Next</button>
      <button @click="p1GiveP2">Give</button>
      

    </div>`
  </div>

  <div class="row">
    <div class="col">
      <p v-if="player2Chosen">
        <img style="width:20%" :src="player2Chosen" alt=""></p>
      <button @click="player2Prev">Previous</button>
      <button @click="player2Next">Next</button>

    </div>`
  </div>
  
  <div class="row">
    <div class="col">
      <p>
        <button v-on:click="move('left')">Left</button>
        <button v-on:click="move('right')">Right</button>
        <button v-on:click="move('up')">Up</button>
        <button v-on:click="move('down')">Down</button>
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
      
      <div class="card-wrapper">
        <div :class="getCard"></div>
        <button @click="setCard">draw card</button>
      </div>
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
import VueGallerySlideshow from 'vue-gallery-slideshow';
import myImage from "./map.jpg"

export default {
    name: "Firefly",
    data() {
        return {
            imagesLocked: [
                require("./z_broken_shuttle.jpg"),
                require("./z_cruiser_patrol.jpg"),
                require("./z_engine_room.jpg"),
                require("./z_minor_tech_diff.jpg"),
                require("./z_the_big_black.jpg")
            ],
            images: [
                require("./z_broken_shuttle.jpg"),
                require("./z_cruiser_patrol.jpg"),
                require("./z_engine_room.jpg"),
                require("./z_minor_tech_diff.jpg"),
                require("./z_the_big_black.jpg")
            ],
            chosenCard:{},
            uniqueRandoms: {},
            selectedImage: null,
            discard: {},
            diceNum: {},
            cardNum: {},
            player1Inv: [
                require("./z_broken_shuttle.jpg"),
                require("./z_cruiser_patrol.jpg"),
                require("./z_engine_room.jpg"),
                require("./z_minor_tech_diff.jpg")
            ],
            player2Inv: [
                require("./z_the_big_black.jpg")
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
        },
    mounted() {
        this.func();
        this.context1 = this.$refs.game1.getContext("2d");
        this.context2 = this.$refs.game2.getContext("2d");
        this.context3 = this.$refs.game3.getContext("2d");
        this.context4 = this.$refs.game4.getContext("2d");
        
        this.socket.on("position", data => {
            this.position = data;
            this.context1.clearRect(0, 0, this.$refs.game1.width,
                                   this.$refs.game1.height);
            this.context1.fillRect(this.position.x,
                                  this.position.y, 20, 20
                                 );
            
        });
        this.socket.on("position2", data2 => {
            this.position2 = data2;
            this.context2.clearRect(0, 0, this.$refs.game2.width,
                                   this.$refs.game2.height);
            this.context2.fillRect(this.position2.x,
                                  this.position2.y, 20, 20
                                  ); 
        });
        this.socket.on("position3", data3 => {
            this.position3 = data3;
            this.context3.clearRect(0, 0, this.$refs.game3.width,
                                   this.$refs.game3.height);
            this.context3.fillRect(this.position3.x,
                                  this.position3.y, 20, 20
                                  ); 
        });
        this.socket.on("position4", data4 => {
            this.position4 = data4;
            this.context4.clearRect(0, 0, this.$refs.game4.width,
                                   this.$refs.game4.height);
            this.context4.fillRect(this.position4.x,
                                  this.position4.y, 20, 20); 
        });
    },
    methods: {

        func: function() {
            let cvn = this.$refs.canvas;
            let ctx = cvn.getContext("2d");
            let bg = new Image();
            bg.src = myImage;
            bg.onload = function() {
                ctx.drawImage(bg, 0, 0, bg.width * .225, bg.height * .225);
            };
        },

        picker: function() {
            var chosenImage = Math.floor(Math.random() * this.images.length);
            this.chosenCard = this.images[chosenImage];
            var val = this.images[chosenImage];
            
            this.images.splice(chosenImage, 1);
            
            console.log (this.images);
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
            
            console.log("TWEET 1");
            console.log("TWEET 2");
            console.log("TWEET 3");
            console.log("TWEET 4");
            this.player2Last();
            this.player1Prev();
            console.log("player1Inv = ", this.player1Inv,
                        "player2Inv = ", this.player2Inv,
                        "player1Chosen = ",this.player1Chosen,
                        "TWEET 5");
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

        

        reshuffle: function() {
            
            this.images = [
                require("./z_broken_shuttle.jpg"),
                require("./z_cruiser_patrol.jpg"),
                require("./z_engine_room.jpg"),
                require("./z_minor_tech_diff.jpg"),
                require("./z_the_big_black.jpg")
            ];
            this.picker()
            console.log (this.images);
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
        }
    },
    beforeMount(){
        this.picker(),
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
            console.log("Dice rolled!");
        }
    }
}
</script>






