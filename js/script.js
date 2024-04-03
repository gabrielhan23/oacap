var open = false
function openNav(x) {
  x.classList.toggle("change");
  if (open){
    $("#nav").css("height", "75px")
    //$("#nav-left").css("margin-top", "20px")
    //$("#nav-right").css("display", "none")
    open = false
  } else {
    $("#nav").css("height", "300px")
    //$("#nav-right").css("display", "block")
    $("#nav-left").css("margin-top", "0px")
    open = true
  }
}
function isInViewport(element) {
  var hT = $(element).offset().top,
       hH = $(window).height()/5,
       wH = $(window).height(),
       wS = $(this).scrollTop();
  if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
      $(element).addClass("is-visible");
  }
}
function checkScrollIn(){
  for(var x = 0; x<scrollToElements.length; x++){
    isInViewport(scrollToElements[x])
  }
}

var scrollToElements = document.querySelectorAll(".fade-in-section");

checkScrollIn()
$(window).scroll(function() {
  checkScrollIn()
});