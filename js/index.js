function getPosition(element) {
    var yPosition = 0;

    while(element) {
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return yPosition;
}
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}
function SVS_B(eAmt, where) {
    if(where == "center" || where == "")
        window.scrollBy(0, eAmt / 2);
    if (where == "top")
        window.scrollBy(0, eAmt);
}
function SmoothVerticalScrolling(e, time, where) {
    var eTop = e.getBoundingClientRect().top-100;
    var eAmt = eTop / 100;
    var curTime = 0;
    while (curTime <= time) {
        window.setTimeout(SVS_B, curTime, eAmt, where);
        curTime += time / 100;
    }
}
var windowHeight = $(window).height()

var dropNav = windowHeight*1.5 -100

$(window).scroll(function setS() {
  windowHeight = $(window).height()
  var windowWidth = $(window).width()
  var scroll = $(this).scrollTop()
  var finishHeight = windowHeight/1.5
  var startHeight = windowHeight/100*70
  var imageRightWidth = windowWidth/100*40
  var imageLeftWidth = windowWidth/100*30
  var rightOffset = windowWidth/100*35
  var leftOffset = windowWidth/100*16

  var finishEndHeight = getPosition(document.getElementById("footer")) - windowHeight*0.6//windowHeight*4
  var endHeight = windowHeight/1.5
  
  if (scroll > dropNav ) {
    $("#nav").addClass("nav-show");
  } else {
    $("#nav").removeClass("nav-show");
  }
  if(scroll > startHeight && scroll < finishHeight+startHeight){
    $("#left-arrow").css("left",((windowWidth/2 - imageLeftWidth) - ((windowWidth/2 - imageLeftWidth + leftOffset)/(finishHeight))*(scroll-startHeight)));
    $("#right-arrow").css("right",((windowWidth/2 - imageRightWidth) - ((windowWidth/2 - imageRightWidth + rightOffset)/(finishHeight))*(scroll-startHeight)+windowWidth/10));
    $("#right-arrow").addClass("position-fixed-right")
    $("#left-arrow").addClass("position-fixed-left")
  } else if(scroll <= startHeight){
    $("#left-arrow").css("left","calc(50vw - "+imageLeftWidth+"px)").css("top", (windowHeight*1.2 - windowWidth*0.01)+"px");
    $("#right-arrow").css("right","calc(50vw - "+(imageRightWidth-windowWidth/10)+"px)").css("top", (windowHeight*1.2)+"px");
    $("#right-arrow").removeClass("position-fixed-right")
    $("#left-arrow").removeClass("position-fixed-left")
  } else if(scroll >= finishHeight+startHeight && scroll < finishEndHeight){
    $("#left-arrow").css("left",-leftOffset);
    $("#right-arrow").css("right",-rightOffset+windowWidth/10);
    $("#right-arrow").addClass("position-fixed-right")
    $("#left-arrow").addClass("position-fixed-left")
  } else if(scroll >= finishEndHeight && scroll < finishEndHeight+endHeight){
    $("#left-arrow").css("left",(((windowWidth/2 - imageLeftWidth + leftOffset)/(endHeight))*(scroll-finishEndHeight)-leftOffset));
    $("#right-arrow").css("right",(((windowWidth/2 - imageRightWidth + rightOffset)/(endHeight))*(scroll-finishEndHeight)-rightOffset+windowWidth/10));
    $("#right-arrow").addClass("position-fixed-right")
    $("#left-arrow").addClass("position-fixed-left")
  } else if(scroll >= finishEndHeight+endHeight){
    $("#left-arrow").css("left","calc(50vw - "+imageLeftWidth+"px)")
    $("#right-arrow").css("right","calc(50vw - "+(imageRightWidth-windowWidth/10)+"px)")
  }

  if(scroll > windowHeight/10){
    $("#scroll-down").addClass("vanish")
  } else {
    $("#scroll-down").removeClass("vanish")
  }
  if(scroll > windowHeight/5){
    $("#scroll-down").addClass("vanish-display-gone")
  } else {
    $("#scroll-down").removeClass("vanish-display-gone")
  }
  
  if(scroll > windowHeight*3){
    $("#content").addClass("grey-back")
  } else {
    $("#content").removeClass("grey-back")
  }
});

//setS();
window.addEventListener('resize', () => { 
  setS();
});

function isPhone(x) {
  if (x.matches) { // If media query matches
    dropNav = windowHeight*1 -300
  } else {
    dropNav = windowHeight*1.5 -100
  }
}

var x = window.matchMedia("(max-width: 725px)")
isPhone(x) // Call listener function at run time
x.addListener(isPhone) // Attach listener function on state changes