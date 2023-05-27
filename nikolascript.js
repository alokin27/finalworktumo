var size_arr = 50;
var num = Math.random();
var season = prompt("Enter the season")

var matrix = [];
function sezonii(){
  season = prompt("Enter the season")
  testSetup();
}

var arrgrasseater = [];
var arrhunter = [];
var arrkiller = [];
var arralien = [];
var arrb = [];
var side = 10;
var arrg = [];
var ndaloje;
function ndalo(){
   alert("Click ok if u want to unpause")
}

function testSetup() {
  console.log(season)
  if(season == 'winter'){
    matrix = [];
    for(var n = 0;n<size_arr;n++){
        matrix.push([])
        for(var m = 0;m<50;m++){
            var randomnumber = Math.random();
            if(randomnumber*7 == 5){
              matrix[n].push(0);
            }
            else if(randomnumber < 0.20){
                matrix[n].push(2);
            }
            else{
                matrix[n].push(Math.floor(Math.random()*7));
            }
        }
     }
    }
  else if(season == 'summer'){
    matrix = [];
    for(var n = 0;n<size_arr;n++){
        matrix.push([])
        for(var m = 0;m<50;m++){
            var randomnumber = Math.random();
            if(randomnumber*7 == 5){
              matrix[n].push(0);
            }
            else if(randomnumber < 0.20){
                matrix[n].push(4);
            }
            else{
                matrix[n].push(Math.floor(Math.random()*6));
            }
        }
     }
    }
  else if(season == 'spring'){
    matrix = [];
    for(var n = 0;n<size_arr;n++){
        matrix.push([])
        for(var m = 0;m<50;m++){
            var randomnumber = Math.random();
            if(randomnumber*7 == 5){
              matrix[n].push(0);
            }
            else if(randomnumber < 0.20){
                matrix[n].push(1);
            }
            else{
                matrix[n].push(Math.floor(Math.random()*6));
            }
        }
     }
    }
  else if(season == 'autumn'){
    matrix = [];
    for(var n = 0;n<size_arr;n++){
        matrix.push([])
        for(var m = 0;m<50;m++){
            var randomnumber = Math.random();
            if(randomnumber*7 == 5){
              matrix[n].push(0);
            }
            else if(randomnumber < 0.20){
                matrix[n].push(3);
            }
            else{
                matrix[n].push(Math.floor(Math.random()*6));
            }
        }
     }
    }
  else{
    alert("!!!Season not found!!!")
  }
  createCanvas(matrix[0].length * side, matrix.length * side);
  background('#acacac');

  for (var e = 0; e < matrix.length; e++) {
    for (var q = 0; q < matrix[e].length; q++) {
      if (matrix[e][q] == 1) {
        var gr = new Grass(q, e, 1, 0, 1, arrg);
        arrg.push(gr);
      } else if (matrix[e][q] == 2) {
        var Gre = new GrassEater(q, e, 2, 1, 5, arrgrasseater);
        arrgrasseater.push(Gre);
      } else if (matrix[e][q] == 3) {
        var hntr = new hunter(q, e, 3, 2, 5, arrhunter);
        arrhunter.push(hntr);
      } else if (matrix[e][q] == 4) {
        var kll = new Killer(q, e, 4, 3, 5, arrkiller);
        arrkiller.push(kll);
      } else if (matrix[e][q] == 5) {
        var al = new Alien(q, e, 5, 4, 5, arralien);
        arralien.push(al);
      }
      else if(matrix[e][q] == 6){
        var bmb = new Bomb(q,e,6,0,5,arrb)
        arrb.push(bmb);
      }
    }
  }
}
function setup() {
  console.log(season)
  frameRate(5);
  testSetup();
  updateStatistic();

  setInterval(updateStatistic, 500);
}

function draw() {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        fill("green");
      } else if (matrix[y][x] == 0) {
        fill("#acacac");
      } else if (matrix[y][x] == 2) {
        fill("yellow");
      } else if (matrix[y][x] == 3) {
        fill("red");
      } else if (matrix[y][x] == 4) {
        fill("blue");
      } else if (matrix[y][x] == 5) {
        fill("white");
      } 
      else if(matrix[y][x]==6){
        fill("black");
      }
      rect(x * side, y * side, side, side);
    }
  }

  for (var i in arrg) {
    arrg[i].mul();
  }
  for (var i in arrgrasseater) {
   
    arrgrasseater[i].move();
    arrgrasseater[i].eat();
   // arrgrasseater[i].mul();
  }

  for (var i in arrhunter) {
    arrhunter[i].eat();
   // arrhunter[i].move();
    //arrhunter[i].mul();
  }
  for (var i in arrkiller) {
    arrkiller[i].move();
    //arrkiller[i].mul();
    arrkiller[i].eat();
  }
  for (var i in arralien) {
    
    arralien[i].eat();
    arralien[i].move();
    //arralien[i].mul();
  }
  for(var i in arrb){
    arrb[i].move();
    arrb[i].eat();
    
    

  }
}
function illnes(array){
  for(var i in array){
      array[i].die()
  }
}
function Illnes_conditons(){
  var choose_ch_for_illnes = prompt("Enter the character ");
  if(choose_ch_for_illnes=="grass"){
      illnes(arrg);
  }else if(choose_ch_for_illnes == "grasseater"){
      illnes(array=arrgrasseater);
  }else if(choose_ch_for_illnes=="hunter"){
      illnes(array=arrhunter);
  }else if(choose_ch_for_illnes=="killer"){
      illnes(array=arrkiller);
  }else if(choose_ch_for_illnes=="alien"){
      illnes(array=arralien);
  }
  else if(choose_ch_for_illnes=="bomb"){
    illnes(array=arrb);
  }else{
      alert("Character is not found! Try again. \n Possible Characters: \nGrass\nGrasseater\nhunter\nKiller\nAlien")
  }
}

function bomb_conditions(){
  var random_ch = prompt("Enter character that is going to explode");
  if(random_ch=="grass"){
      bomb(index=1);
  }
  else if(random_ch=="grasseater"){
      bomb(index=2);
  }
  else if(random_ch=="hunter"){
      bomb(index=3);
  }
  else if(random_ch=="killer"){
      bomb(index=4);
  }
  else if(random_ch=="alien"){
     bomb(index=5);
}
else if (random_ch=="bomb"){
     bomb(index=6);
}
  else{
      alert("!!Character not found!!")
  }
}
function bomb(){
  for(var y_cordinates =0;y_cordinates<matrix.length;y_cordinates++){
    for(var x_cordinates=0;x_cordinates<matrix[y_cordinates].length;x_cordinates++){
        matrix[y_cordinates][x_cordinates] = index;
    }
}


}
function updateStatistic() {
  var grassCount = document.getElementById("grassCount");
  var grassEaterCount = document.getElementById("grassEaterCount");
  var hunterCount = document.getElementById("hunterCount");
  var killerCount = document.getElementById("killerCount");
  var alienCount = document.getElementById("alienCount");
  var bombCount = document.getElementById("bombCount");

  grassCount.textContent = arrg.length;
  grassEaterCount.textContent = arrgrasseater.length;
  hunterCount.textContent = arrhunter.length;
  killerCount.textContent = arrkiller.length;
  alienCount.textContent = arralien.length;
  bombCount.textContent = arrb.length;
}




