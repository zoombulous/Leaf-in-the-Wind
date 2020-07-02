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
        <button @click="chosenShip('p3nextShip')">change ship</button>
        <div class="p3h2">
          <p v-if="playerCards[0][1]"> 
            <img style="width:50%" :src="playerCards[2][0]" alt=""></p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-1-4">
        
        <div class="img-wrapper">
          <div class="container">
            <div class="img1">
            <p v-if="shipCards[1][0][0][0]"> 
              <img height="500px" :src="shipCards[1][0][0][0]" alt=""></p>
          </div>
          <div class="img2">
          <img v-bind:src="shipInv[1][0][0][0]"
               v-on:click="supply('1box1')"
               height="88px"/>
        </div>
        <div class="img3">
          <img v-bind:src="shipInv[1][0][1][0]"
               v-on:click="supply('1box2')"
               height="88px"/>
        </div>
        <div class="img4">
          <img v-bind:src="shipInv[1][0][2][0]"
               v-on:click="supply('1box3')"
               height="88px"/>
        </div>
        <div class="img5">
          <img v-bind:src="shipInv[1][0][3][0]"
                 v-on:click="supply('1box4')"
                 height="88px"/>
        </div>
        <div class="img6">
            <img v-bind:src="shipInv[1][0][4][0]"
                 v-on:click="supply('1box5')"
                 height="88px"/>
          </div>
          <div class="img7">
            <img v-bind:src="shipInv[1][0][5][0]"
                 v-on:click="supply('1box6')"
                 height="88px"/>
          </div>
          <div class="img8">
            <img v-bind:src="shipInv[1][0][6][0]"
                 v-on:click="supply('1box7')"
                 height="88px"/>
          </div>
          <div class="img9">
            <img v-bind:src="shipInv[1][0][7][0]"
                 v-on:click="supply('1box8')"
                 height="88px"/>
          </div>
          <div class="img10">
            <img v-bind:src="shipInv[1][0][8][0]"
                 v-on:click="supply('1box9')"
                 height="88px"/>
          </div>
          <div class="img11">
            <img v-bind:src="shipInv[1][0][9][0]"
                 v-on:click="supply('1box10')"
                 height="88px"
                 />
          </div>
          <div class="img12">
            <img v-bind:src="shipInv[1][0][10][0]"
                 v-on:click="supply('1box11')"
                 height="88px"/>
          </div>
          <div class="img13">
            <img v-bind:src="shipInv[1][0][11][0]"
                 v-on:click="supply('1box12')"
                 height="88px"/>
          </div>
          
          <div class="job1">
            <p v-if="playerCards[2][4][1][0]"> 
              <img height="350px" :src="playerCards[2][4][1][0]" alt=""></p>
          </div>
          <div class="job2">
            <p v-if="playerCards[2][4][1][0]"> 
              <img height="350px" :src="playerCards[2][4][2][0]" alt=""></p>
          </div>
          <div class="job3">
            <p v-if="playerCards[2][4][1][0]"> 
              <img height="350px" :src="playerCards[2][4][3][0]" alt=""></p>
          </div>
          
          <div>
            <button width="50px" class="3give1" @click="giveManual('p3Give1ToP1')">give</button>
          </div>
         
          <div>
            <button width="50px" class="3give1"  @click="giveManual('p3Switch1To1Priv')">switch private</button>
          </div>
          <div>
            <button width="50px" class="3give1"  @click="giveManual('p3Discard1')">discard</button>
          </div>
          <div class="p3h1">
            <p v-if="playerCards[2][0][1][0]">
              <img class="p3h1" height="350px" :src="playerCards[2][0][1][0]" alt="playerCards[0][0]"></p>
          </div>
          
          <div class="p3h1Switch2">
            <button width="200px" class="3give1"  @click="giveManual('p3Switch1To2')">&#11138;</button>
          </div>
          
          <div class="p3h2">
            <p v-if="playerCards[2][0][2][0]"> 
              <img class="p3h2" height="350px" :src="playerCards[2][0][2][0]" alt="playerCards[0][0]"></p>
          </div>

          <div class="p3h2Switch3">
            <button width="200px" class="3give1"  @click="giveManual('p3Switch2To3')">&#11138;</button>
          </div>
          
          <div class="p3h3">
            <p v-if="playerCards[2][0][3][0]"> 
              <img class="p3h3" height="350px" :src="playerCards[2][0][3][0]" alt="playerCards[0][0]"></p>
          </div>

          <div class="p3h3Switch4">
            <button width="200px" class="3give1"  @click="giveManual('p3Switch3To4')">&#11138;</button>
          </div>
          
          <div class="p3h4">
            <p v-if="playerCards[2][0][4][0]"> 
              <img class="p3h4" height="350px" :src="playerCards[2][0][4][0]" alt="playerCards[0][0]"></p>
          </div>

          <div class="p3h4Switch5">
            <button width="200px" class="3give1"  @click="giveManual('p3Switch4To5')">&#11138;</button>
          </div>
          
          <div class="p3h5">
            <p v-if="playerCards[2][0][5][0]"> 
              <img class="p3h5" height="350px" :src="playerCards[2][0][5][0]" alt="playerCards[0][0]"></p>
          </div>

          <div class="p3h5Switch6">
            <button width="200px" class="3give1"  @click="giveManual('p3Switch5To6')">&#11138;</button>
          </div>
          
          <div class="p3h6">
            <p v-if="playerCards[2][0][6][0]"> 
              <img class="p3h6" height="350px" :src="playerCards[2][0][6][0]" alt="playerCards[0][0]"></p>
          </div>

          <div class="p3h6Switch7">
            <button width="200px" class="3give1"  @click="giveManual('p3Switch6To7')">&#11138;</button>
          </div>
          
          <div class="p3h7">
            <p v-if="playerCards[2][0][7][0]"> 
              <img class="p3h7" height="350px" :src="playerCards[2][0][7][0]" alt="playerCards[0][0]"></p>
          </div>

          <div class="p3h7Switch8">
            <button width="200px" class="3give1"  @click="giveManual('p3Switch7To8')">&#11138;</button>
          </div>
          
          <div class="p3h8">
            <p v-if="playerCards[2][0][8][0]"> 
              <img class="p3h8" height="350px" :src="playerCards[2][0][8][0]" alt="playerCards[0][0]"></p>
          </div>

          <div class="p3h8Switch9">
            <button width="200px" class="3give1"  @click="giveManual('p3Switch8To9')">&#11138;</button>
          </div>
          
          <div class="p3h9">
            <p v-if="playerCards[2][0][9][0]"> 
              <img class="p3h9" height="350px" :src="playerCards[2][0][9][0]" alt="playerCards[0][0]"></p>
          </div>

          <div class="p3h9Switch10">
            <button width="200px" class="3give1"  @click="giveManual('p3Switch9To10')">&#11138;</button>
          </div>
          
          <div class="p3h10">
            <p v-if="playerCards[2][0][10][0]"> 
              <img class="p3h10" height="350px" :src="playerCards[2][0][10][0]" alt="playerCards[0][0]"></p>
          </div>
          
          <div class="p3pr1">
            <p v-if="playerCards[2][1][1][0]">
              <img class="p3pr1" height="350px" :src="playerCards[2][1][1][0]" alt=""></p>
          </div>
          <div class="p3pr2">
            <p v-if="playerCards[2][1][2][0]">
              <img class="p3pr2" height="350px" :src="playerCards[2][1][2][0]" alt=""></p>
          </div>
          <div class="p3pr3">
            <p v-if="playerCards[2][1][3][0]">
              <img class="p3pr3" height="350px" :src="playerCards[2][1][3][0]" alt=""></p>
          </div>
          <div class="p3pr4">
            <p v-if="playerCards[2][1][4][0]">
              <img class="p3pr4" height="350px" :src="playerCards[2][1][4][0]" alt=""></p>
          </div>
          <div class="p3pr5">
            <p v-if="playerCards[2][1][5][0]">
              <img class="p3pr5" height="350px" :src="playerCards[2][1][5][0]" alt=""></p>
          </div>
          <div class="p3pr6">
            <p v-if="playerCards[2][1][6][0]">
              <img class="p3pr6" height="350px" :src="playerCards[2][1][6][0]" alt=""></p>
          </div>
          <div class="p3pr7">
            <p v-if="playerCards[2][1][7][0]">
              <img class="p3pr7" height="350px" :src="playerCards[2][1][7][0]" alt=""></p>
          </div>
          <div class="p3pr8">
            <p v-if="playerCards[2][1][8][0]">
              <img class="p3pr8" height="350px" :src="playerCards[2][1][8][0]" alt=""></p>
          </div>
          <div class="p3pr9">
            <p v-if="playerCards[2][1][9][0]">
              <img class="p3pr9" height="350px" :src="playerCards[2][1][9][0]" alt=""></p>
          </div>
          <div class="p3pr10">
            <p v-if="playerCards[2][1][10][0]">
              <img class="p3pr10" height="350px" :src="playerCards[2][1][10][0]" alt=""></p>
          </div>
          <div class="p3i1">
            <p v-if="playerCards[2][2][1][0]">
              <img height="350px" :src="playerCards[2][2][1][0]" alt=""></p>
          </div>

          <div class="p3i1Switch2">
            <button width="200px" class="3give1"  @click="giveManual('p3SwitchItems1To2')">&#11138;</button>
          </div>
          
          <div class="p3i2">
            <p v-if="playerCards[2][2][2][0]">
              <img height="350px" :src="playerCards[2][2][2][0]" alt=""></p>
          </div>

          <div class="p3i2Switch3">
            <button width="200px" class="3give1"  @click="giveManual('p3SwitchItems2To3')">&#11138;</button>
          </div>
          
          <div class="p3i3">
            <p v-if="playerCards[2][2][3][0]">
              <img height="350px" :src="playerCards[2][2][3][0]" alt=""></p>
          </div>

          <div class="p3i3Switch4">
            <button width="200px" class="3give1"  @click="giveManual('p3SwitchItems3To4')">&#11138;</button>
          </div>
          
          <div class="p3i4">
            <p v-if="playerCards[2][2][4][0]">
              <img height="350px" :src="playerCards[2][2][4][0]" alt=""></p>
          </div>

          <div class="p3i4Switch5">
            <button width="200px" class="3give1"  @click="giveManual('p3SwitchItems4To5')">&#11138;</button>
          </div>
          
          <div class="p3i5">
            <p v-if="playerCards[2][2][5][0]">
              <img height="350px" :src="playerCards[2][2][5][0]" alt=""></p>
          </div>

          <div class="p3i5Switch6">
            <button width="200px" class="3give1"  @click="giveManual('p3SwitchItems5To6')">&#11138;</button>
          </div>
          
          <div class="p3i6">
            <p v-if="playerCards[2][2][6][0]">
              <img height="350px" :src="playerCards[2][2][6][0]" alt=""></p>
          </div>

          <div class="p3i6Switch7">
            <button width="200px" class="3give1"  @click="giveManual('p3SwitchItems6To7')">&#11138;</button>
          </div>
          
          <div class="p3i7">
            <p v-if="playerCards[2][2][7][0]">
              <img height="350px" :src="playerCards[2][2][7][0]" alt=""></p>
          </div>

          <div class="p3i7Switch8">
            <button width="200px" class="3give1"  @click="giveManual('p3SwitchItems7To8')">&#11138;</button>
          </div>
          
          <div class="p3i8">
            <p v-if="playerCards[2][2][8][0]">
              <img height="350px" :src="playerCards[2][2][8][0]" alt=""></p>
          </div>

          <div class="p3i8Switch9">
            <button width="200px" class="3give1"  @click="giveManual('p3SwitchItems8To9')">&#11138;</button>
          </div>
          
          <div class="p3i9">
            <p v-if="playerCards[2][2][9][0]">
              <img height="350px" :src="playerCards[2][2][9][0]" alt=""></p>
          </div>

          <div class="p3i9Switch10">
            <button width="200px" class="3give1"  @click="giveManual('p3SwitchItems9To10')">&#11138;</button>
          </div>
          
          <div class="p3i10">
            <p v-if="playerCards[2][2][10][0]">
              <img height="350px" :src="playerCards[2][2][10][0]" alt=""></p>
          </div>
          <div class="p3su1">
            <p v-if="playerCards[2][3][1][0]">
              <img height="350px" :src="playerCards[2][3][1][0]" alt=""></p>
          </div>
          <div class="p3su2">
            <p v-if="playerCards[2][3][2][0]">
              <img height="350px" :src="playerCards[2][3][2][0]" alt=""></p>
          </div>
          <div class="p3su3">
            <p v-if="playerCards[2][3][3][0]">
              <img height="350px" :src="playerCards[2][3][3][0]" alt=""></p>
          </div>
          <div class="p3su4">
            <p v-if="playerCards[2][3][4][0]">
              <img height="350px" :src="playerCards[2][3][4][0]" alt=""></p>
          </div>

          <div class="shopSelect">
            <select class="form-control col" v-model="shop" label="Choose Shop">
              <option value="null" disabled>Choose Shop</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          
          <div v-if="shop === '1'">
            
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
        <button @click="chosenShip('p3nextShip')">change ship</button>
        <div class="p3h2">
          <p v-if="playerCards[0][1]"> 
            <img style="width:50%" :src="playerCards[2][0]" alt=""></p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-1-4">
        
        <div class="img-wrapper">
          <div class="container">
            <div class="img1">
            <p v-if="shipCards[1][0][0][0]"> 
              <img height="500px" :src="shipCards[1][0][0][0]" alt=""></p>
          </div>
          <div class="img2">
          <img v-bind:src="shipInv[1][0][0][0]"
               v-on:click="supply('1box1')"
               height="88px"/>
        </div>
        <div class="img3">
          <img v-bind:src="shipInv[1][0][1][0]"
               v-on:click="supply('1box2')"
               height="88px"/>
        </div>
        <div class="img4">
          <img v-bind:src="shipInv[1][0][2][0]"
               v-on:click="supply('1box3')"
               height="88px"/>
        </div>
        <div class="img5">
          <img v-bind:src="shipInv[1][0][3][0]"
                 v-on:click="supply('1box4')"
                 height="88px"/>
        </div>
        <div class="img6">
            <img v-bind:src="shipInv[1][0][4][0]"
                 v-on:click="supply('1box5')"
                 height="88px"/>
          </div>
          <div class="img7">
            <img v-bind:src="shipInv[1][0][5][0]"
                 v-on:click="supply('1box6')"
                 height="88px"/>
          </div>
          <div class="img8">
            <img v-bind:src="shipInv[1][0][6][0]"
                 v-on:click="supply('1box7')"
                 height="88px"/>
          </div>
          <div class="img9">
            <img v-bind:src="shipInv[1][0][7][0]"
                 v-on:click="supply('1box8')"
                 height="88px"/>
          </div>
          <div class="img10">
            <img v-bind:src="shipInv[1][0][8][0]"
                 v-on:click="supply('1box9')"
                 height="88px"/>
          </div>
          <div class="img11">
            <img v-bind:src="shipInv[1][0][9][0]"
                 v-on:click="supply('1box10')"
                 height="88px"
                 />
          </div>
          <div class="img12">
            <img v-bind:src="shipInv[1][0][10][0]"
                 v-on:click="supply('1box11')"
                 height="88px"/>
          </div>
          <div class="img13">
            <img v-bind:src="shipInv[1][0][11][0]"
                 v-on:click="supply('1box12')"
                 height="88px"/>
          </div>
          
          <div class="job1">
            <p v-if="playerCards[2][4][1][0]"> 
              <img height="350px" :src="playerCards[2][4][1][0]" alt=""></p>
          </div>
          
          <div>
            <button width="200px" class="p3h1JobComplete btn btn-success btn-sm" @click="giveManual('p3DiscardJob1')">Complete</button>
          </div>
          
          
          <div>
            <button width="200px" class="p3h1DiscardJob btn btn-danger btn-sm" @click="giveManual('p3DiscardJob1')">Discard</button>
          </div>
          
          <div class="job2">
            <p v-if="playerCards[2][4][1][0]"> 
              <img height="350px" :src="playerCards[2][4][2][0]" alt=""></p>
          </div>
          
          <div>
            <button width="200px" class="p3h2JobComplete btn btn-success btn-sm" @click="giveManual('p3DiscardJob2')">Complete</button>
          </div>
          
          
          <div>
            <button width="200px" class="p3h2DiscardJob btn btn-danger btn-sm" @click="giveManual('p3DiscardJob2')">Discard</button>
          </div>
          
          <div class="job3">
            <p v-if="playerCards[2][4][1][0]"> 
              <img height="350px" :src="playerCards[2][4][3][0]" alt=""></p>
          </div>

          <div>
            <button width="200px" class="p3h3JobComplete btn btn-success btn-sm" @click="giveManual('p3DiscardJob3')">Complete</button>
          </div>
          
          
          <div>
            <button width="200px" class="p3h3DiscardJob btn btn-danger btn-sm" @click="giveManual('p3DiscardJob3')">Discard</button>
          </div>

          <div>
            <button width="50px" @click="giveManual('p3Priv1SwitchMain')">private to crew or items</button>
          </div>
          
          <div>
            <button width="50px" class="3give1" @click="giveManual('p3Give1ToP1')">give</button>
          </div>
         
          <div>
            <button width="50px" class="3give1"  @click="giveManual('p3Switch1To1Priv')">switch private</button>
          </div>
          <div>
            <button width="50px" class="3give1"  @click="giveManual('p3Discard1')">discard</button>
          </div>
          <div class="p3h1">
            <p v-if="playerCards[2][0][1][0]">
              <img height="350px" :src="playerCards[2][0][1][0]" alt="playerCards[0][0]"></p>
          </div>
          
          <div class="p3h1Switch2">
            <button width="200px" class="3give1"  @click="giveManual('p3Switch1To2')">&#11138;</button>
          </div>

          <div>
            <button width="200px" class="p3h1GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p3CrewC1P1')">Give P1</button>
          </div>

          <div>
            <button width="200px" class="p3h1GiveP2Crew btn btn-success btn-sm"  @click="giveManual('p3CrewC1P2')">Give P2</button>
          </div>

          <div>
            <button width="200px" class="p3h1GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p3CrewC1P4')">Give P4</button>
          </div>

          <div>
            <button width="200px" class="p3h1DiscardCrew btn btn-danger btn-sm" @click="giveManual('p3DiscardCrew1')">Discard</button>
          </div>
          
          <div class="p3h2">
            <p v-if="playerCards[2][0][2][0]"> 
              <img height="350px" :src="playerCards[2][0][2][0]" alt="playerCards[0][0]"></p>
          </div>

          <div class="p3h2Switch3">
            <button width="200px" class="3give1"  @click="giveManual('p3Switch2To3')">&#11138;</button>
          </div>

          <div>
            <button width="200px" class="p3h2GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p3CrewC2P1')">Give P1</button>
          </div>

          <div>
            <button width="200px" class="p3h2GiveP2Crew btn btn-success btn-sm"  @click="giveManual('p3CrewC2P2')">Give P2</button>
          </div>

          <div>
            <button width="200px" class="p3h2GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p3CrewC2P4')">Give P4</button>
          </div>

          <div>
            <button width="200px" class="p3h2DiscardCrew btn btn-danger btn-sm" @click="giveManual('p3DiscardCrew2')">Discard</button>
          </div>
          
          <div class="p3h3">
            <p v-if="playerCards[2][0][3][0]"> 
              <img height="350px" :src="playerCards[2][0][3][0]" alt="playerCards[0][0]"></p>
          </div>

          <div class="p3h3Switch4">
            <button width="200px" class="3give1"  @click="giveManual('p3Switch3To4')">&#11138;</button>
          </div>

          <div>
            <button width="200px" class="p3h3GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p3CrewC3P1')">Give P1</button>
          </div>

          <div>
            <button width="200px" class="p3h3GiveP2Crew btn btn-success btn-sm"  @click="giveManual('p3CrewC3P2')">Give P2</button>
          </div>

          <div>
            <button width="200px" class="p3h3GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p3CrewC3P4')">Give P4</button>
          </div>

          <div>
            <button width="200px" class="p3h3DiscardCrew btn btn-danger btn-sm" @click="giveManual('p3DiscardCrew3')">Discard</button>
          </div>
          
          <div class="p3h4">
            <p v-if="playerCards[2][0][4][0]"> 
              <img height="350px" :src="playerCards[2][0][4][0]" alt="playerCards[0][0]"></p>
          </div>

          <div class="p3h4Switch5">
            <button width="200px" class="3give1"  @click="giveManual('p3Switch4To5')">&#11138;</button>
          </div>

          <div>
            <button width="200px" class="p3h4GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p3CrewC4P1')">Give P1</button>
          </div>

          <div>
            <button width="200px" class="p3h4GiveP2Crew btn btn-success btn-sm"  @click="giveManual('p3CrewC4P2')">Give P2</button>
          </div>

          <div>
            <button width="200px" class="p3h4GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p3CrewC4P4')">Give P4</button>
          </div>

          <div>
            <button width="200px" class="p3h4DiscardCrew btn btn-danger btn-sm" @click="giveManual('p3DiscardCrew4')">Discard</button>
          </div>
          
          <div class="p3h5">
            <p v-if="playerCards[2][0][5][0]"> 
              <img height="350px" :src="playerCards[2][0][5][0]" alt="playerCards[0][0]"></p>
          </div>

          <div class="p3h5Switch6">
            <button width="200px" class="3give1"  @click="giveManual('p3Switch5To6')">&#11138;</button>
          </div>

          <div>
            <button width="200px" class="p3h5GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p3CrewC5P1')">Give P1</button>
          </div>

          <div>
            <button width="200px" class="p3h5GiveP2Crew btn btn-success btn-sm"  @click="giveManual('p3CrewC5P2')">Give P2</button>
          </div>

          <div>
            <button width="200px" class="p3h5GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p3CrewC5P4')">Give P4</button>
          </div>

          <div>
            <button width="200px" class="p3h5DiscardCrew btn btn-danger btn-sm" @click="giveManual('p3DiscardCrew5')">Discard</button>
          </div>
          
          <div class="p3h6">
            <p v-if="playerCards[2][0][6][0]"> 
              <img height="350px" :src="playerCards[2][0][6][0]" alt="playerCards[0][0]"></p>
          </div>

          <div class="p3h6Switch7">
            <button width="200px" class="3give1"  @click="giveManual('p3Switch6To7')">&#11138;</button>
          </div>

          <div>
            <button width="200px" class="p3h6GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p3CrewC6P1')">Give P1</button>
          </div>

          <div>
            <button width="200px" class="p3h6GiveP2Crew btn btn-success btn-sm"  @click="giveManual('p3CrewC6P2')">Give P2</button>
          </div>

          <div>
            <button width="200px" class="p3h6GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p3CrewC6P4')">Give P4</button>
          </div>

          <div>
            <button width="200px" class="p3h6DiscardCrew btn btn-danger btn-sm" @click="giveManual('p3DiscardCrew6')">Discard</button>
          </div>
          
          <div class="p3h7">
            <p v-if="playerCards[2][0][7][0]"> 
              <img height="350px" :src="playerCards[2][0][7][0]" alt="playerCards[0][0]"></p>
          </div>

          <div class="p3h7Switch8">
            <button width="200px" class="3give1"  @click="giveManual('p3Switch7To8')">&#11138;</button>
          </div>

          <div>
            <button width="200px" class="p3h7GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p3CrewC7P1')">Give P1</button>
          </div>

          <div>
            <button width="200px" class="p3h7GiveP2Crew btn btn-success btn-sm"  @click="giveManual('p3CrewC7P2')">Give P2</button>
          </div>

          <div>
            <button width="200px" class="p3h7GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p3CrewC7P4')">Give P4</button>
          </div>

          <div>
            <button width="200px" class="p3h7DiscardCrew btn btn-danger btn-sm" @click="giveManual('p3DiscardCrew7')">Discard</button>
          </div>
          
          <div class="p3h8">
            <p v-if="playerCards[2][0][8][0]"> 
              <img height="350px" :src="playerCards[2][0][8][0]" alt="playerCards[0][0]"></p>
          </div>

          <div class="p3h8Switch9">
            <button width="200px" class="3give1"  @click="giveManual('p3Switch8To9')">&#11138;</button>
          </div>

          <div>
            <button width="200px" class="p3h8GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p3CrewC8P1')">Give P1</button>
          </div>

          <div>
            <button width="200px" class="p3h8GiveP2Crew btn btn-success btn-sm"  @click="giveManual('p3CrewC8P2')">Give P2</button>
          </div>

          <div>
            <button width="200px" class="p3h8GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p3CrewC8P4')">Give P4</button>
          </div>

          <div>
            <button width="200px" class="p3h8DiscardCrew btn btn-danger btn-sm" @click="giveManual('p3DiscardCrew8')">Discard</button>
          </div>
          
          <div class="p3h9">
            <p v-if="playerCards[2][0][9][0]"> 
              <img height="350px" :src="playerCards[2][0][9][0]" alt="playerCards[0][0]"></p>
          </div>

          <div class="p3h9Switch10">
            <button width="200px" class="3give1"  @click="giveManual('p3Switch9To10')">&#11138;</button>
          </div>

          <div>
            <button width="200px" class="p3h9GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p3CrewC9P1')">Give P1</button>
          </div>

          <div>
            <button width="200px" class="p3h9GiveP2Crew btn btn-success btn-sm"  @click="giveManual('p3CrewC9P2')">Give P2</button>
          </div>

          <div>
            <button width="200px" class="p3h9GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p3CrewC9P4')">Give P4</button>
          </div>

          <div>
            <button width="200px" class="p3h9DiscardCrew btn btn-danger btn-sm" @click="giveManual('p3DiscardCrew9')">Discard</button>
          </div>
          
          <div class="p3h10">
            <p v-if="playerCards[2][0][10][0]"> 
              <img height="350px" :src="playerCards[2][0][10][0]" alt="playerCards[0][0]"></p>
          </div>

          <div>
            <button width="200px" class="p3h10GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p3CrewC10P1')">Give P1</button>
          </div>

          <div>
            <button width="200px" class="p3h10GiveP2Crew btn btn-success btn-sm"  @click="giveManual('p3CrewC10P2')">Give P2</button>
          </div>

          <div>
            <button width="200px" class="p3h10GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p3CrewC10P4')">Give P4</button>
          </div>

          <div>
            <button width="200px" class="p3h10DiscardCrew btn btn-danger btn-sm" @click="giveManual('p3DiscardCrew10')">Discard</button>
          </div>
          
          <div class="p3pr1">
            <p v-if="playerCards[2][1][1][0]">
              <img height="350px" :src="playerCards[2][1][1][0]" alt=""></p>
          </div>

          <div>
            <button width="200px" class="p3pr1SwitchDown btn btn-info btn-sm" @click="giveManual('p3Priv1SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
          </div>

          <div>
            <button width="200px" class="p3h1DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p3DiscardPrivate1')">Discard</button>
          </div>
          
          <div class="p3pr2">
            <p v-if="playerCards[2][1][2][0]">
              <img height="350px" :src="playerCards[2][1][2][0]" alt=""></p>
          </div>

          <div>
            <button width="200px" class="p3pr2SwitchDown btn btn-info btn-sm" @click="giveManual('p3Priv2SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
          </div>

          <div>
            <button width="200px" class="p3h2DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p3DiscardPrivate2')">Discard</button>
          </div>
          
          <div class="p3pr3">
            <p v-if="playerCards[2][1][3][0]">
              <img height="350px" :src="playerCards[2][1][3][0]" alt=""></p>
          </div>

          <div>
            <button width="200px" class="p3pr3SwitchDown btn btn-info btn-sm" @click="giveManual('p3Priv3SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
          </div>

          <div>
            <button width="200px" class="p3h3DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p3DiscardPrivate3')">Discard</button>
          </div>
          
          <div class="p3pr4">
            <p v-if="playerCards[2][1][4][0]">
              <img height="350px" :src="playerCards[2][1][4][0]" alt=""></p>
          </div>

          <div>
            <button width="200px" class="p3pr4SwitchDown btn btn-info btn-sm" @click="giveManual('p3Priv4SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
          </div>

          <div>
            <button width="200px" class="p3h4DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p3DiscardPrivate4')">Discard</button>
          </div>
          
          <div class="p3pr5">
            <p v-if="playerCards[2][1][5][0]">
              <img height="350px" :src="playerCards[2][1][5][0]" alt=""></p>
          </div>

          <div>
            <button width="200px" class="p3pr5SwitchDown btn btn-info btn-sm" @click="giveManual('p3Priv5SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
          </div>

          <div>
            <button width="200px" class="p3h5DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p3DiscardPrivate5')">Discard</button>
          </div>
          
          <div class="p3pr6">
            <p v-if="playerCards[2][1][6][0]">
              <img height="350px" :src="playerCards[2][1][6][0]" alt=""></p>
          </div>

          <div>
            <button width="200px" class="p3pr6SwitchDown btn btn-info btn-sm" @click="giveManual('p3Priv6SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
          </div>

          <div>
            <button width="200px" class="p3h6DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p3DiscardPrivate6')">Discard</button>
          </div>
          
          <div class="p3pr7">
            <p v-if="playerCards[2][1][7][0]">
              <img height="350px" :src="playerCards[2][1][7][0]" alt=""></p>
          </div>
          
          <div>
            <button width="200px" class="p3pr7SwitchDown btn btn-info btn-sm" @click="giveManual('p3Priv7SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
          </div>

          <div>
            <button width="200px" class="p3h7DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p3DiscardPrivate7')">Discard</button>
          </div>
          
          <div class="p3pr8">
            <p v-if="playerCards[2][1][8][0]">
              <img height="350px" :src="playerCards[2][1][8][0]" alt=""></p>
          </div>

          <div>
            <button width="200px" class="p3pr8SwitchDown btn btn-info btn-sm" @click="giveManual('p3Priv8SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
          </div>

          <div>
            <button width="200px" class="p3h8DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p3DiscardPrivate8')">Discard</button>
          </div>
          
          <div class="p3pr9">
            <p v-if="playerCards[2][1][9][0]">
              <img height="350px" :src="playerCards[2][1][9][0]" alt=""></p>
          </div>

          <div>
            <button width="200px" class="p3pr9SwitchDown btn btn-info btn-sm" @click="giveManual('p3Priv9SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
          </div>

          <div>
            <button width="200px" class="p3h9DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p3DiscardPrivate9')">Discard</button>
          </div>
          
          <div class="p3pr10">
            <p v-if="playerCards[2][1][10][0]">
              <img height="350px" :src="playerCards[2][1][10][0]" alt=""></p>
          </div>

          <div>
            <button width="200px" class="p3pr10SwitchDown btn btn-info btn-sm" @click="giveManual('p3Priv10SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
          </div>

          <div>
            <button width="200px" class="p3h10DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p3DiscardPrivate10')">Discard</button>
          </div>
          
          <div class="p3i1">
            <p v-if="playerCards[2][2][1][0]">
              <img height="350px" :src="playerCards[2][2][1][0]" alt=""></p>
          </div>

          <div class="p3i1Switch2">
            <button width="200px" class="3give1"  @click="giveManual('p3SwitchItems1To2')">&#11138;</button>
          </div>

          <div>
            <button width="200px" class="p3h1GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p3ItemsC1P1')">Give P1</button>
          </div>

          <div>
            <button width="200px" class="p3h1GiveP2Items btn btn-success btn-sm"  @click="giveManual('p3ItemsC1P2')">Give P2</button>
          </div>

          <div>
            <button width="200px" class="p3h1GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p3ItemsC1P4')">Give P4</button>
          </div>

          <div>
            <button width="200px" class="p3h1DiscardItems btn btn-danger btn-sm" @click="giveManual('p3DiscardItems1')">Discard</button>
          </div>
          
          <div class="p3i2">
            <p v-if="playerCards[2][2][2][0]">
              <img height="350px" :src="playerCards[2][2][2][0]" alt=""></p>
          </div>

          <div class="p3i2Switch3">
            <button width="200px" class="3give1"  @click="giveManual('p3SwitchItems2To3')">&#11138;</button>
          </div>

          <div>
            <button width="200px" class="p3h2GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p3ItemsC2P1')">Give P1</button>
          </div>

          <div>
            <button width="200px" class="p3h2GiveP2Items btn btn-success btn-sm"  @click="giveManual('p3ItemsC2P2')">Give P2</button>
          </div>

          <div>
            <button width="200px" class="p3h2GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p3ItemsC2P4')">Give P4</button>
          </div>

          <div>
            <button width="200px" class="p3h2DiscardItems btn btn-danger btn-sm" @click="giveManual('p3DiscardItems2')">Discard</button>
          </div>
          
          <div class="p3i3">
            <p v-if="playerCards[2][2][3][0]">
              <img height="350px" :src="playerCards[2][2][3][0]" alt=""></p>
          </div>

          <div class="p3i3Switch4">
            <button width="200px" class="3give1"  @click="giveManual('p3SwitchItems3To4')">&#11138;</button>
          </div>

          <div>
            <button width="200px" class="p3h3GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p3ItemsC3P1')">Give P1</button>
          </div>

          <div>
            <button width="200px" class="p3h3GiveP2Items btn btn-success btn-sm"  @click="giveManual('p3ItemsC3P2')">Give P2</button>
          </div>

          <div>
            <button width="200px" class="p3h3GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p3ItemsC3P4')">Give P4</button>
          </div>

          <div>
            <button width="200px" class="p3h3DiscardItems btn btn-danger btn-sm" @click="giveManual('p3DiscardItems3')">Discard</button>
          </div>
          
          <div class="p3i4">
            <p v-if="playerCards[2][2][4][0]">
              <img height="350px" :src="playerCards[2][2][4][0]" alt=""></p>
          </div>

          <div class="p3i4Switch5">
            <button width="200px" class="3give1"  @click="giveManual('p3SwitchItems4To5')">&#11138;</button>
          </div>

          <div>
            <button width="200px" class="p3h4GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p3ItemsC4P1')">Give P1</button>
          </div>

          <div>
            <button width="200px" class="p3h4GiveP2Items btn btn-success btn-sm"  @click="giveManual('p3ItemsC4P2')">Give P2</button>
          </div>

          <div>
            <button width="200px" class="p3h4GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p3ItemsC4P4')">Give P4</button>
          </div>

          <div>
            <button width="200px" class="p3h4DiscardItems btn btn-danger btn-sm" @click="giveManual('p3DiscardItems4')">Discard</button>
          </div>
          
          <div class="p3i5">
            <p v-if="playerCards[2][2][5][0]">
              <img height="350px" :src="playerCards[2][2][5][0]" alt=""></p>
          </div>

          <div class="p3i5Switch6">
            <button width="200px" class="3give1"  @click="giveManual('p3SwitchItems5To6')">&#11138;</button>
          </div>

          <div>
            <button width="200px" class="p3h5GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p3ItemsC5P1')">Give P1</button>
          </div>

          <div>
            <button width="200px" class="p3h5GiveP2Items btn btn-success btn-sm"  @click="giveManual('p3ItemsC5P2')">Give P2</button>
          </div>

          <div>
            <button width="200px" class="p3h5GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p3ItemsC5P4')">Give P4</button>
          </div>

          <div>
            <button width="200px" class="p3h5DiscardItems btn btn-danger btn-sm" @click="giveManual('p3DiscardItems5')">Discard</button>
          </div>
          
          <div class="p3i6">
            <p v-if="playerCards[2][2][6][0]">
              <img height="350px" :src="playerCards[2][2][6][0]" alt=""></p>
          </div>

          <div class="p3i6Switch7">
            <button width="200px" class="3give1"  @click="giveManual('p3SwitchItems6To7')">&#11138;</button>
          </div>

          <div>
            <button width="200px" class="p3h6GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p3ItemsC6P1')">Give P1</button>
          </div>

          <div>
            <button width="200px" class="p3h6GiveP2Items btn btn-success btn-sm"  @click="giveManual('p3ItemsC6P2')">Give P2</button>
          </div>

          <div>
            <button width="200px" class="p3h6GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p3ItemsC6P4')">Give P4</button>
          </div>

          <div>
            <button width="200px" class="p3h6DiscardItems btn btn-danger btn-sm" @click="giveManual('p3DiscardItems6')">Discard</button>
          </div>
          
          <div class="p3i7">
            <p v-if="playerCards[2][2][7][0]">
              <img height="350px" :src="playerCards[2][2][7][0]" alt=""></p>
          </div>

          <div class="p3i7Switch8">
            <button width="200px" class="3give1"  @click="giveManual('p3SwitchItems7To8')">&#11138;</button>
          </div>

          <div>
            <button width="200px" class="p3h7GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p3ItemsC7P1')">Give P1</button>
          </div>

          <div>
            <button width="200px" class="p3h7GiveP2Items btn btn-success btn-sm"  @click="giveManual('p3ItemsC7P2')">Give P2</button>
          </div>

          <div>
            <button width="200px" class="p3h7GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p3ItemsC7P4')">Give P4</button>
          </div>

          <div>
            <button width="200px" class="p3h7DiscardItems btn btn-danger btn-sm" @click="giveManual('p3DiscardItems7')">Discard</button>
          </div>
          
          <div class="p3i8">
            <p v-if="playerCards[2][2][8][0]">
              <img height="350px" :src="playerCards[2][2][8][0]" alt=""></p>
          </div>

          <div class="p3i8Switch9">
            <button width="200px" class="3give1"  @click="giveManual('p3SwitchItems8To9')">&#11138;</button>
          </div>

          <div>
            <button width="200px" class="p3h8GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p3ItemsC8P1')">Give P1</button>
          </div>

          <div>
            <button width="200px" class="p3h8GiveP2Items btn btn-success btn-sm"  @click="giveManual('p3ItemsC8P2')">Give P2</button>
          </div>

          <div>
            <button width="200px" class="p3h8GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p3ItemsC8P4')">Give P4</button>
          </div>

          <div>
            <button width="200px" class="p3h8DiscardItems btn btn-danger btn-sm" @click="giveManual('p3DiscardItems8')">Discard</button>
          </div>
          
          <div class="p3i9">
            <p v-if="playerCards[2][2][9][0]">
              <img height="350px" :src="playerCards[2][2][9][0]" alt=""></p>
          </div>

          <div class="p3i9Switch10">
            <button width="200px" class="3give1"  @click="giveManual('p3SwitchItems9To10')">&#11138;</button>
          </div>

          <div>
            <button width="200px" class="p3h9GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p3ItemsC9P1')">Give P1</button>
          </div>

          <div>
            <button width="200px" class="p3h9GiveP2Items btn btn-success btn-sm"  @click="giveManual('p3ItemsC9P2')">Give P2</button>
          </div>

          <div>
            <button width="200px" class="p3h9GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p3ItemsC9P4')">Give P4</button>
          </div>

          <div>
            <button width="200px" class="p3h9DiscardItems btn btn-danger btn-sm" @click="giveManual('p3DiscardItems9')">Discard</button>
          </div>
          
          <div class="p3i10">
            <p v-if="playerCards[2][2][10][0]">
              <img height="350px" :src="playerCards[2][2][10][0]" alt=""></p>
          </div>

          <div>
            <button width="200px" class="p3h10GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p3ItemsC10P1')">Give P1</button>
          </div>

          <div>
            <button width="200px" class="p3h10GiveP2Items btn btn-success btn-sm"  @click="giveManual('p3ItemsC10P2')">Give P2</button>
          </div>

          <div>
            <button width="200px" class="p3h10GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p3ItemsC10P4')">Give P4</button>
          </div>

          <div>
            <button width="200px" class="p3h10DiscardItems btn btn-danger btn-sm" @click="giveManual('p3DiscardItems10')">Discard</button>
          </div>
          
          <div class="p3su1">
            <p v-if="playerCards[2][3][1][0]">
              <img height="350px" :src="playerCards[2][3][1][0]" alt=""></p>
          </div>

          <div>
            <button width="200px" class="p3h1DiscardUpgrades btn btn-danger btn-sm" @click="giveManual('p3DiscardUpgrades1')">Discard</button>
          </div>
          
          <div class="p3su2">
            <p v-if="playerCards[2][3][2][0]">
              <img height="350px" :src="playerCards[2][3][2][0]" alt=""></p>
          </div>

          <div>
            <button width="200px" class="p3h2DiscardUpgrades btn btn-danger btn-sm" @click="giveManual('p3DiscardUpgrades2')">Discard</button>
          </div>
          
          <div class="p3su3">
            <p v-if="playerCards[2][3][3][0]">
              <img height="350px" :src="playerCards[2][3][3][0]" alt=""></p>
          </div>

          <div>
            <button width="200px" class="p3h3DiscardUpgrades btn btn-danger btn-sm" @click="giveManual('p3DiscardUpgrades3')">Discard</button>
          </div>
          
          <div class="p3su4">
            <p v-if="playerCards[2][3][4][0]">
              <img height="350px" :src="playerCards[2][3][4][0]" alt=""></p>
          </div>

          <div>
            <button width="200px" class="p3h4DiscardUpgrades btn btn-danger btn-sm" @click="giveManual('p3DiscardUpgrades4')">Discard</button>
          </div>

          <div class="shopSelect">
            <select class="form-control col" v-model="shop" label="Choose Shop">
              <option value="null" disabled>Choose Shop</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          
          <div v-if="shop === '1'">
            <div class="shop1Draw">
              <p v-if="playerCards[4][0][3][0]">
                <img height="350px" :src="playerCards[4][0][3][0]" alt=""></p>
            </div>
            <div class="shop1Discard">
              <p v-if="playerCards[4][0][1][0][0]">
                <img height="350px" :src="playerCards[4][0][1][0][0]" alt=""></p>
            </div>
            <div>
             <button width="200px" class="shop1Chosen1" @click="giveManual('shop1RotateDiscard')">Rotate Discard</button> 
            </div>
            <div class="shop1Chosen1">
              <p v-if="playerCards[4][2][2][0]">
                <img height="350px" :src="playerCards[4][2][2][0]" alt=""></p>
            </div>
            <div class="shop1Chosen2">
              <p v-if="playerCards[4][2][2][0]">
                <img height="350px" :src="playerCards[4][2][2][0]" alt=""></p>
            </div>
            <div class="shop1Chosen3">
              <p v-if="playerCards[4][2][2][0]">
                <img height="350px" :src="playerCards[4][2][2][0]" alt=""></p>
            </div>
          </div>
          
          </div>
        </div>
      </div>
      <div>
        
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
      <div class="col pt-5 pb-5">
        <p></p>
      </div>
    </div>

    <div class="row">
      <div class="col pt-5 pb-5">
        <p></p>
      </div>
    </div>

    <div class="row">
      <div class="col pt-5 pb-5">
        <p></p>
      </div>
    </div>

    <div class="row">
      <div class="col pt-5 pb-5">
        <p></p>
      </div>
    </div>

    <div class="row">
      <div class="col pt-5 pb-5">
        <p></p>
      </div>
    </div>

    <div class="row">
      <div class="col pt-5 pb-5">
        <p></p>
      </div>
    </div>

    <div class="row">
      <div class="col pt-5 pb-5">
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
shop: null,
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
this.socket.on ("playerCards", giveToManual => {
            console.log("someone tried to give a card");
            this.playerCards = giveToManual;
            console.log("playerCards should equal giveTo",
                        "player1 inv length = ", this.playerCards[0][0].length,
                        "player2 inv length = ", this.playerCards[1][0].length);
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
        this.socket.on ("shipCards", changeShip => {
            console.log("vue tried changing the ship");
            this.shipCards = changeShip
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
        
        giveManual: function(x) {
            this.socket.emit("giveManual", x);
            this.socket.emit("playerCards", playerCards);
        },
        supply: function(x) {
            this.socket.emit("supply", x);
            this.socket.emit("shipInv", shipInv);
        },
        chosenShip: function(x) {
            this.socket.emit("chosenShip", x);
            this.socket.emit("shipCards", shipCards);
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



