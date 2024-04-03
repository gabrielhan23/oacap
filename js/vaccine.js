

var config2 = {
    type: Phaser.AUTO,
    parent: game2,
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
        create: create2,
        update: update2,
    }
};
var sickChance2 = 25
var day2 = 0;
var dead2 = 0;
var sick2 = 0;
var sickTotal2 = 0;
var recovered2 = 0;
var done2 = false
var game2 = "blah"
function run2(){
  if(game2 == "blah"){
    //console.log("running 2")
    game2 = new Phaser.Game(config2)
  }
}var circleGroup2
var vacinated2 = 0
var vacinatedPerson = 2

function infect2(person){
  setTimeout(function(){
    var sickRandom = Math.random()*100
    if(sickRandom < this.sickChance2 && person.name[0] == "normal"){
      person.setTexture("red");
      person.setScale(0.01)
      person.name[0] = "infected" 
      sick2++
      sickTotal2++
      setTimeout(function(){
          checkDeath2(person);
      }, 4000)
    }
  }, 1000)
}
function checkInfection2(c1, c2){
  if(c1.name[0] == "infected" && c2.name[0] == "normal" && c2.name[2] != c1.name[1]){
    c2.name[2] = c1.name[1]
    infect2(c2)
  } else if (c1.name[0] == "normal" && c2.name[0] == "infected" && c1.name[2] != c1.name[2]){
    c1.name[2] = c2.name[1]
    infect2(c1) 
  }
}
var game2This
function create2(){
    game2This = this
    circleGroup2 = this.physics.add.group();
    circleGroup2.physicsBodyType = Phaser.Physics.ARCADE;
    circleGroup2.enableBody = true;
    
    for(var i=0; i<population; i++){
        
        var x = Math.random()*config2.width
        var y = Math.random()*config2.height
        var speed = 500;
        var velX = Math.random()*speed -speed/2
        var velY = Math.random()*speed -speed/2
        var circle = circleGroup2.create(x,y,"green")
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
    this.physics.add.overlap(circleGroup2, circleGroup2, checkInfection2);
    vacinate2(250)
    //this.scene.pause();
    
}
function update2(){
  day2++
  if(day2<graphEndTime){
    addData(chart2, day2, dead2, sick2, sickTotal2, 3)
  }
  if(dead2+recovered2 >= population-startNumHave  || day2 >= graphEndTime){
    circleGroup2.setVelocity(0,0)
    this.scene.pause()
  }
}

function checkDeath2(person){
    if(Math.random() > 0.6){
        person.name[0] = "dead"
        person.setTexture("gray")
        person.setVelocity(0,0)
        person.setImmovable(true);
        dead2 ++
    }else{
        person.name[0] = "recovered"
        recovered2++
        person.setTexture("orange")
    }
    sick2--
}

var ctx2 = document.getElementById(htmlchart2.substring(1)).getContext('2d');
var chart2 = new Chart(ctx2, {
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
function vacinate2(speed){
  setTimeout(function(){
    var finished = true 
    while(finished){
      var person = circleGroup2.getChildren()[vacinatedPerson]
      vacinatedPerson ++
      if(vacinatedPerson >= population || person == undefined){
        game2This.scene.stop()
      }
      if(person.name[0] != "dead"){
        person.name = "vacinated"
        person.setTexture("blue")
        vacinated2 ++
        finished = false;
      } 
    }
    vacinate2(speed)
  }, speed)
}