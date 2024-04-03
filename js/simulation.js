var previousScroll = 0
var scroll = 0

var htmlisphone = false
var game1 = "game1"
var game2 = "game2"
var game3 = "game3"
var game4 = "game4"

var htmlchart1 = "#chart1"
var htmlchart2 = "#chart2"
var htmlchart3 = "#chart3"
var htmlchart4 = "#chart4"

var htmlchart = "#chart"

var graphEndTime = 400
var firstSection = "first-section"
var secondSection = "second-section"
var thirdSection = "third-section"
var fourthSection = "fourth-section"



function checkSizeChange(){
  if(htmlisphone){
    if(window.innerWidth >= 970){
      //console.log("reload")
      location.reload();
    }
  } else {
    if(window.innerWidth < 970){
      //console.log("reload")
      location.reload()
    }
  }
}
//$(".woosh-title").css("font-size", h1start)
//$(".woosh-body").css("font-size", pstart)
//rheas amazing function
function scrollWoosh(scroll, x, y){
  // var h1speed = ((h1start-h1end)/(x-y))
  // var h1pos = h1start + (scroll - x )*h1speed
  if(scroll>x ){
		/*$(".woosh-title").css("font-size", Math.round((h1start + (scroll - x )*((h1start-h1end)/(x-y)))))
    $(".woosh-title").css("margin-top", (scroll-x)*1.5)
		$(".woosh-body").css("font-size", Math.round((pend - (scroll - x )*((pend-pstart)/(x-y)))))*/
    //console.log("smaller")
    $("#woosh-title").addClass("woosh-smaller-title")
	} else {
    $("#woosh-title").removeClass("woosh-smaller-title")
  }
}


function checkChartPhone(chart, heightStart, heightEnd, topChart, gameThis, color){
  //console.log(chart)
  if(scroll>=heightStart){
    if(gameThis == game1This){
      run1()
    } else if (gameThis == game3This){
      
      run3()
    } else if(gameThis == game4This){
      run4()
    } else if(gameThis == game2This){
      run2()
    }
  }
}
function checkChart(chart, heightStart, heightEnd, topChart, gameThis, color){
  if(scroll>=heightEnd){
    $(chart).removeClass("currentchart")
    $(chart).addClass(topChart).addClass("topChart")
    $(chart).css("transition", "1s")
    $(chart).css("border-bottom-width", "5px")
  } else if(scroll>=heightStart){
    $(chart).addClass("currentchart")
    $(chart).css("border-bottom", "5px solid "+color)
    $("#info-bar").css("background-color",color)
    $(chart).removeClass(topChart).removeClass("topChart")
    if(gameThis == game1This){
      run1()
    } else if (gameThis == game3This){
      run3()
    } else if(gameThis == game4This){
      run4()
    } else if(gameThis == game2This){
      run2()
    }
  } else {
    $(chart).removeClass("currentchart")
    $(chart).removeClass(topChart).removeClass("topChart")
    $(chart).css("border-bottom", "60px solid "+color)
    $(chart).css("transition", "border-bottom-width 1.7s cubic-bezier(1,-0.05,.47,.87), top 1s, left 1s, width 1s")
  }
}
function getPosition(element) {
    var yPosition = 0;

    while(element) {
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return yPosition;
}

var chartWidth = Math.max($(window).width()/2, 600)
var windowWidthChart = $(window).width()/2-chartWidth/2

function setS() {
  var windowHeight = $(window).height()
  var windowWidth = $(window).width()
  scroll = $(this).scrollTop()
  var chart1HeightStart = getPosition(document.getElementById(firstSection))-windowHeight*0.7
  var chart12 = getPosition(document.getElementById(secondSection))-windowHeight*0.7
  var chart23 = getPosition(document.getElementById(thirdSection))-windowHeight*0.7
  var chart34 = getPosition(document.getElementById(fourthSection))-windowHeight*0.7
  var chart4HeightEnd = getPosition(document.getElementById("footer"))-windowHeight
  if(scroll>windowHeight){
    //$("#woosh-content").addClass("woosh-content-static")
  } else {
    //$("#woosh-content").removeClass("woosh-content-static")
  }
  scrollWoosh(scroll, windowHeight/2, windowHeight)
  if(moveCharts){
    if(scroll>windowHeight*2){
      $("#graph-bar").css("background-color", "rgb(202, 202, 202)")
      $(htmlchart).css("left", "0").css("opacity", "1")
      $("#info-bar").addClass("move-right")
      //$("#info-bar").css("right", "0")
      //$("#chart").addClass("main-chart-end")
      //$("#chart").removeClass("main-chart-start")
    } else {
      $(htmlchart).css("left", "-30vw").css("opacity", "0")
      $("#info-bar").removeClass("move-right")
      //$("#chart").css("position", "static")
      //$("#chart").removeClass("main-chart-end")
      //$("#chart").addClass("main-chart-start")
      $("#graph-bar").css("background-color", "#dae6cf")
      $("#info-bar").css("background-color", "#dae6cf")
    }
    checkChart(htmlchart1, chart1HeightStart, chart12, "topChart1", game1This, "#dae6cf")
    checkChart(htmlchart3, chart12, chart23, "topChart2", game3This, "#cfe6d2")
    checkChart(htmlchart4, chart23, chart34, "topChart3", game4This, "#cfe6e2")
    checkChart(htmlchart2, chart34, chart4HeightEnd, "topChart4", game2This, "#cfdae6")
  } else {
    checkChartPhone(htmlchart1, chart1HeightStart, chart12, "topChart1", game1This, "#dae6cf")
    checkChartPhone(htmlchart3, chart12, chart23, "topChart2", game3This, "#cfe6d2")
    checkChartPhone(htmlchart4, chart23, chart34, "topChart3", game4This, "#cfe6e2")
    checkChartPhone(htmlchart2, chart34, chart4HeightEnd, "topChart4", game2This, "#cfdae6")
  }
  previousScroll = scroll
}


var population = 150;
var WIDTH = 600;
var HEIGHT = 400;
var moveCharts = true
if(window.innerWidth < 970){
  htmlisphone = true
  game1 = "game1phone"
  game2 = "game2phone"
  game3 = "game3phone"
  game4 = "game4phone"
  htmlchart1 = "#chart1phone"
  htmlchart2 = "#chart2phone"
  htmlchart3 = "#chart3phone"
  htmlchart4 = "#chart4phone"
  htmlchart = "#chartphone"
  graphEndTime = 600
  //window.alert(htmlchart.substring(1))
  firstSection = "first-section-phone"
  secondSection = "second-section-phone"
  thirdSection = "third-section-phone"
  fourthSection = "fourth-section-phone"
  if(window.innerWidth < 725){
    WIDTH = 300;
    HEIGHT = 200
    population = population/4
  }
  moveCharts = false
}
$(window).scroll(function (){
  setS()
});
var config1 = {
    type: Phaser.AUTO,
    parent: game1,
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
        create: create1,
        update: update1
    }
};
var game1 = "blah"
function run1(){
  if(game1 == "blah"){
    //console.log("running 1")
    game1 = new Phaser.Game(config1)
  }
}
var sickChance1 = 95
var day1 = 0;
var dead1 = 0;
var sick1 = 0;
var sickTotal1 = 0;
var recovered1 = 0;
var done1 = false
var circleGroup1;
var finishTime = 400
var startNumHave = 2
var maxDay = 0
const healthyColor = "#69bd45";
const sickColor = "#ef4538"


function preload(){
    this.load.image("gray", "pictures/gray.png")
    this.load.image("blue", "pictures/blue.png")
    this.load.image("green", "pictures/green.png")
    this.load.image("red", "pictures/red.png")
    this.load.image("orange", "pictures/orange.png")
}

function infect1(person){
  setTimeout(function(){
    var sickRandom = Math.random()*100
    if(sickRandom < this.sickChance1 && person.name == "normal"){
      person.setTexture("red");
      person.setScale(0.01)
      person.name = "infected" 
      sick1++
      sickTotal1++
      setTimeout(function(){
          checkDeath1(person);
      }, 3000)
    }
    
  }, 500)
}
function checkInfection1(c1, c2){
  if(c1.name == "infected" && c2.name == "normal"){
    infect1(c2)
  } else if (c1.name == "normal" && c2.name == "infected"){
    infect1(c1) 
  }
}
var game1This 
function create1(){
    game1This = this
    circleGroup1 = this.physics.add.group();
    circleGroup1.physicsBodyType = Phaser.Physics.ARCADE;
    circleGroup1.enableBody = true;
    
    for(var i=0; i<population; i++){
        
        var x = Math.random()*config1.width
        var y = Math.random()*config1.height
        var speed = 1000;
        var velX = Math.random()*speed -speed/2
        var velY = Math.random()*speed -speed/2
        var circle = circleGroup1.create(x,y,"green")
        if(i < startNumHave){ 
          circle.name = "infected"
          circle.setTexture("red")
          circle.setScale(0.01)
          circle.setVelocity(speed, speed)
        } else {
          circle.name = "normal"; 
          circle.setScale(0.01)
          circle.setVelocity(velX, velY)
        } 
        
        
        circle.setBounce(1);
        circle.setCollideWorldBounds(true);
    }
    //this.scene.pause()
    this.physics.add.overlap(circleGroup1, circleGroup1, checkInfection1);
}

function update1(){
  day1++
  //console.log(day1)
  if(day1<graphEndTime){
    addData(chart1, day1, dead1, sick1, sickTotal1, 0)
  }
  if(dead1+recovered1 >= population-startNumHave || day1 >= graphEndTime){
    //done1 = true
    //addAfterDeath(chart1, day1, dead1, sick1)
    circleGroup1.setVelocity(0,0)
    this.scene.pause()
    // this.scene.restart()
  }
}

function addData(c, day, dead, sick, sickTotal, num) {
  //console.log(num+" - "+sick)
  c.data.labels.push(day);
  if(!htmlisphone){
    c.data.datasets[0].data.push(sickTotal) //sick
  } else {
    c.data.datasets[0].data.push(sick) 
  }
  c.data.datasets[1].data.push(population) 
  //population
  
  //console.log("THE CHART IM USING IS ")
  //console.log(c)
  if(!htmlisphone){
    if(day > maxDay){
      chart.data.labels.push(day)
      maxDay = day 
    }
    chart.data.datasets[num].data.push(sick)
    //console.log(chart.data.datasets[num].data.length)
    chart.update()
  }
  c.update();
}
function checkDeath1(person){
    if(Math.random() > 0.6){
        person.name = "dead"
        person.setTexture("gray")
        person.setVelocity(0,0)
        person.setImmovable(true);
        dead1 ++
    }else{
        person.name = "recovered"
        recovered1++
        person.setTexture("orange")
    }
    sick1--
}



var ctx1 = document.getElementById(htmlchart1.substring(1)).getContext('2d');
var chart1 = new Chart(ctx1, {
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
//window.alert(htmlchart.substring(1))
var ctx = document.getElementById(htmlchart.substring(1)).getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [],
        datasets: [
        {
            label: 'Chart 1',
            borderColor: '#97cc66',
            data: [],
            order: 2
        },
          {
            label: 'Chart 2',
            borderColor: '#66cc74',
            data: [],
            order: 3
        },
        {
            label: 'Chart 3',
            borderColor: '#66ccbb',
            data: [],
            order: 4
        },
        {
            label: 'Chart 4',
            borderColor: '#6697cc',
            data: [],
            order: 5
        }
        ]
    },

    // Configuration options go here
    options: {
      lineTension: 1
    }
});