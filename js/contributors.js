var club1 = document.querySelector('#club1');
var club2 = document.querySelector('#club2');
var club3 = document.querySelector('#club3');
var club4 = document.querySelector('#club4');
var club1Name = "HOSA-Future Health Professionals"
var club2Name = "Health Guardians of America"
var club3Name = "American Cancer Society"
var club4Name = "National Alliance on Mental Illness"

var club1Text = "is a career technical student organization that welcomes high school and junior high students! It is composed of two local HOSA chapters: (1) NOCROP at Oxford Academy and (2) NOCROP at Oxford Academy (Middle School). Both chapters are under the oversight of the North Orange County ROP Biotechnology Pathway and are affiliated with California HOSA and with HOSA, Inc. The mission of HOSA is to empower its members to become leaders in the global health community through education, collaboration, and experience. The purpose of HOSA is to develop leadership and technical skill competencies through a program of motivation, awareness, and recognition."
var club2Text = "educates general members on various health-related topics including exercise, nutrition, mental health, and wellness. In the past, HGA has hosted Zumba classes, cooking lessons, seasonal newsletters, and smoothie-making in the quad. In addition, HGA offers virtual volunteer opportunities for members who are looking to help humanitarian causes while earning volunteer hours. The purpose of HGA is to raise awareness of health and wellness through community service activities, seminars, and club events that advocate healthy living. The club is dedicated to educating its members and fostering environments that support healthy choices. HGA aims to promote and raise awareness of mental health, nutrition, and physical fitness."
var club3Text = "provides an opportunity for members to learn about the different types of cancers and the science behind them while spreading awareness towards detecting and preventing cancer as well as how to support those with cancer. Members of ACS can attend and volunteer at events and fundraisers that work towards spreading awareness and providing funding for cancer patients and research. Through care packages or messages of support, the American Cancer Society is dedicated to supporting those facing cancer and has worked to raise awareness about the dangers of cancer, by finding opportunities for members to actively fight against cancer and have in-depth learning about cancer."
var club4Text = "aims to inform students about various mental illnesses and positive self-care as well as creating a safe and supportive environment for all students. OA NAMI focuses on decreasing stigma to support students who are struggling and improve the overall mental health of Oxford Academy students. OA NAMI’s mission is to help introduce and educate Oxford students about various mental health disorders to create a more comfortable environment where students can easily find the support and help that they need."

var isCar = false
document.getElementById("club-text").innerText = club1Text
document.getElementById("club-name").innerText = club1Name

function clubChange(text, name) {
  $( "#club-text" ).fadeOut("fast", function() {
    document.getElementById("club-text").innerText = text
    $( "#club-text" ).fadeIn("fast");
  });
  $( "#club-name" ).fadeOut("fast", function() {
    document.getElementById("club-name").innerText = name
    $( "#club-name" ).fadeIn("fast");
  });
}

club1.addEventListener('mouseover', function(){
  //console.log(isCar)
  if(!isCar){clubChange(club1Text, club1Name)}
});
club2.addEventListener('mouseover', function(){
  if(!isCar){clubChange(club2Text, club2Name)}
});
club3.addEventListener('mouseover', function(){
  if(!isCar){clubChange(club3Text, club3Name)}
});
club4.addEventListener('mouseover', function(){
  if(!isCar){clubChange(club4Text, club4Name)}
});

$('#carouselExampleIndicators').on('slide.bs.carousel', function (e) {
  //console.log(e)
  if(e.to == 0){
    clubChange(club1Text, club1Name)
  } else if(e.to == 1){
    clubChange(club2Text, club2Name)
  } else if(e.to == 2){
    clubChange(club3Text, club3Name)
  } else if(e.to == 3){
    clubChange(club4Text, club4Name)
  } 
})
function isPhone(x) {
  if (x.matches) { // If media query matches
    $(".carousel").css("display", "block")
    $("#club-logo-car").css("display", "none")
    isCar = true
  } else {
    $(".carousel").css("display", "none")
    $("#club-logo-car").css("display", "flex")
    isCar = false
  }
  //console.log(isCar)
}

var x = window.matchMedia("(max-width: 725px)")
isPhone(x) // Call listener function at run time
x.addListener(isPhone) // Attach listener function on state changes