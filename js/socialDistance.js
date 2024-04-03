
var config3 = {
    type: Phaser.AUTO,
    parent: game3,
    width: WIDTH,
    height: HEIGHT,
    physics: {
        default: 'arcade',
        gravity: { y: 200 },
        arcade: {
            debug: false,
        }
    },
    scene: {
        preload: preload,
        create: create3,
        update: update3,
    }
};
var game3 = "blah"
function run3(){
  if(game3 == "blah"){
    //console.log("running 3")
    game3 = new Phaser.Game(config3)
  }
}
var sickChance3 = 100
var day3 = 0;
var dead3 = 0;
var sick3 = 0;
var sickTotal3 = 0;
var recovered3 = 0;
var done3 = false
var circleGroup3
function infect3(person){
  setTimeout(function(){
    var sickRandom = Math.random()*100
    if(sickRandom < this.sickChance3 && person.name[0] == "normal"){
      person.setTexture("red");
      person.setScale(0.01)
      person.name[0] = "infected" 
      sick3++
      sickTotal3++;
      setTimeout(function(){
          checkDeath3(person);
      }, 4000)
    }
  }, 1000)
}
function checkInfection3(c1, c2){
  if(c1.name[0] == "infected" && c2.name[0] == "normal" && c2.name[2] != c1.name[1]){
    c2.name[2] = c1.name[1]
    infect3(c2)
  } else if (c1.name[0] == "normal" && c2.name[0] == "infected" && c1.name[2] != c1.name[2]){
    c1.name[2] = c2.name[1]
    infect3(c1) 
  }
}
var game3This
function create3(){
    game3This = this
    circleGroup3 = this.physics.add.group();
    circleGroup3.physicsBodyType = Phaser.Physics.ARCADE;
    circleGroup3.enableBody = true;
    
    for(var i=0; i<population; i++){
        
        var x = Math.random()*config3.width
        var y = Math.random()*config3.height
        var speed = 400;
        var velX = Math.random()*speed -speed/2
        var velY = Math.random()*speed -speed/2
        var circle = circleGroup3.create(x,y,"green")
        if(i < startNumHave){ 
          circle.name = ["infected", i, -1]
          circle.setTexture("red")
          circle.setScale(0.01)
          circle.setVelocity(speed/2, speed/2)
        } else if (i<population/1.7){//1.4
          circle.name = ["normal", i, -1]; 
          circle.setScale(0.01)
        } else {
          circle.name = ["normal", i, -1]; 
          circle.setScale(0.01)
          circle.setVelocity(velX, velY)
        }
        
        circle.setBounce(1);
        circle.setCollideWorldBounds(true);
    }
    this.physics.add.overlap(circleGroup3, circleGroup3, checkInfection3);
    //this.scene.pause();
}
function update3(){
  day3++
  //console.log(day3)
  if(day3<graphEndTime){
    //console.log(day3)
    addData(chart3, day3, dead3, sick3, sickTotal3, 1)
  }
  if(dead3+recovered3 >= population-startNumHave || day3 >= graphEndTime){
    //console.log("im still working")
    //window.alert("boo")
    //console.log(graphEndTime)
    //console.log(day3)
    circleGroup3.setVelocity(0,0)
    this.scene.pause()
  }
}

function checkDeath3(person){
    if(Math.random() > 0.6){
        person.name[0] = "dead"
        person.setTexture("gray")
        person.setVelocity(0,0)
        person.setImmovable(true);
        dead3 ++
    }else{
        person.name[0] = "recovered"
        recovered3++
        person.setTexture("orange")
    }
    sick3--
}

var ctx3 = document.getElementById(htmlchart3.substring(1)).getContext('2d');
var chart3 = new Chart(ctx3, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [],
        datasets: [

          {
            label: 'Sick',
            backgroundColor: sickColor,
            borderColor: sickColor,
            data: []
        },
        {
            label: 'Healthy',
            backgroundColor: healthyColor,
            borderColor: healthyColor,
            data: []
        }
        ]
    },

    // Configuration options go here
    options: {
      lineTension: 1
    }
});