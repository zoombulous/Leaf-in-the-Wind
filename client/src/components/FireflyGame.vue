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
   <div class="dice-wrapper">
      <div :class="getDice"></div>
      <button @click="setDice">Roll the dice!</button>
    </div>
  </div>
</template>
<link rel="stylesheet" href="vue-dice-roller/dist/vue-dice-roller.css"/>

<script src="vue.js"></script>
<script src="vue-dice-roller/dist/vue-dice-roller.browser.js"></script>

<script>
import io from "socket.io-client";
import "./dice_styles/dark.css";
import "./dice_styles/dice.css";

export default {
    name: "Firefly",
    data() {
        return {
            diceNum: {},
            socket: {},
            context: {},
            position: {
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
        this.socket.on("diceNum", this.diceNum);
        this.socket.on("position", data => {
            this.position = data;
            this.context.clearRect(0, 0, this.$refs.game.width,
                                   this.$refs.game.height);
            this.context.fillRect(this.position.x,
                                  this.position.y, 20, 20); 
        });
    },
    methods: {
        setRandomDiceData() {
            
                const randomDiceNum = Math.floor(Math.random() * 6) + 1;
                this.diceNum = randomDiceNum;
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
        move(direction) {
            this.socket.emit("move", direction);
        }
    },
    computed: {
        getDice() {
            this.setRandomDiceData();
      return `dice dice-${this.diceNum}`;
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
