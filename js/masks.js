

var config4 = {
    type: Phaser.AUTO,
    parent: game4,
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
        create: create4,
        update: update4,
    }
};
var sickChance4 = 25
var day4 = 0;
var dead4 = 0;
var sick4 = 0;
var sickTotal4 = 0;
var recovered4 = 0;
var done4 = false

var game4 = "blah"
function run4(){
  if(game4 == "blah"){
    //console.log("running 4")
    game4 = new Phaser.Game(config4)
  }
}var circleGroup4
function infect4(person){
  setTimeout(function(){
    var sickRandom = Math.random()*100
    if(sickRandom < this.sickChance4 && person.name[0] == "normal"){
      person.setTexture("red");
      person.setScale(0.01)
      person.name[0] = "infected" 
      sick4++
      sickTotal4++
      setTimeout(function(){
          checkDeath4(person);
      }, 4000)
    }
  }, 1000)
}
function checkInfection4(c1, c2){
  if(c1.name[0] == "infected" && c2.name[0] == "normal" && c2.name[2] != c1.name[1]){
    c2.name[2] = c1.name[1]
    infect4(c2)
  } else if (c1.name[0] == "normal" && c2.name[0] == "infected" && c1.name[2] != c1.name[2]){
    c1.name[2] = c2.name[1]
    infect4(c1) 
  }
}
var game4This
function create4(){
    game4This = this
    circleGroup4 = this.physics.add.group();
    circleGroup4.physicsBodyType = Phaser.Physics.ARCADE;
    circleGroup4.enableBody = true;
    
    for(var i=0; i<population; i++){
        
        var x = Math.random()*config4.width
        var y = Math.random()*config4.height
        var speed = 500;
        var velX = Math.random()*speed -speed/2
        var velY = Math.random()*speed -speed/2
        var circle = circleGroup4.create(x,y,"green")
        if(i < startNumHave){ 
          circle.name = ["infected", i, -1]
          circle.setTexture("red")
          circle.setScale(0.01)
          circle.setVelocity(speed/2, speed/2)
        } else if (i<population/1.6){
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
    this.physics.add.overlap(circleGroup4, circleGroup4, checkInfection4);
    //this.scene.pause();
    
}
function update4(){
  day4++
  if(day4<graphEndTime){
    addData(chart4, day4, dead4, sick4, sickTotal4, 2)
  }
  if(dead4+recovered4 >= population-startNumHave  || day4 >= graphEndTime){
    //console.log(graphEndTime)
    //console.log(day4)
    circleGroup4.setVelocity(0,0)
    this.scene.pause()
  }
}

function checkDeath4(person){
    if(Math.random() > 0.6){
        person.name[0] = "dead"
        person.setTexture("gray")
        person.setVelocity(0,0)
        person.setImmovable(true);
        dead4 ++
    }else{
        person.name[0] = "recovered"
        recovered4++
        person.setTexture("orange")
    }
    sick4--
}

var ctx4 = document.getElementById(htmlchart4.substring(1)).getContext('2d');
var chart4 = new Chart(ctx4, {
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