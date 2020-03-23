<template>
<div>
  <h1>Firefly Game</h1>
  <canvas ref="game"
          width="640"
          height="480"
          style="border: 1px solid black;">
  </canvas>
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
</template>

<script src="vue.js"></script>

<script>
import io from "socket.io-client";
import "./dice_styles/dice.css";
import "./cards/alliance_closer_folder.css";

export default {
    name: "Firefly",
    data() {
        return {
            diceNum: {},
            cardNum: {},
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
        this.context = this.$refs.game.getContext("2d");
        
        this.socket.on("position", data => {
            this.position = data;
            this.context.clearRect(0, 0, this.$refs.game.width,
                                   this.$refs.game.height);
            this.context.fillRect(this.position.x,
                                  this.position.y, 20, 20); 
        });
        this.socket.on("position2", data2 => {
            this.position2 = data2;
            this.context.clearRect(0, 0, this.$refs.game.width,
                                   this.$refs.game.height);
            this.context.fillRect(this.position2.x,
                                  this.position2.y, 20, 20); 
        });
        this.socket.on("position3", data3 => {
            this.position3 = data3;
            this.context.clearRect(0, 0, this.$refs.game.width,
                                   this.$refs.game.height);
            this.context.fillRect(this.position3.x,
                                  this.position3.y, 20, 20); 
        });
        this.socket.on("position4", data4 => {
            this.position4 = data4;
            this.context.clearRect(0, 0, this.$refs.game.width,
                                   this.$refs.game.height);
            this.context.fillRect(this.position4.x,
                                  this.position4.y, 20, 20); 
        });
    },
    methods: {
        
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
    computed: {
        
        getDice() {
            this.setRandomDiceData();
            return `dice dice-${this.diceNum}`;
        },

        getCard() {
            this.setRandomCardData();
            return `card card-${this.cardNum}`;
        }
    },
    watch: {
        
        diceNum() {
            console.log("Dice rolled!");
        }
    }
}
  </script>


<style scoped>

</style>
