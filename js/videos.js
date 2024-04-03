var video1 = ["https://www.youtube.com/embed/c1XClDfZHH8", "Episode 1: The Human Body vs. SARS-CoV-2", "Uploaded: February 7, 2021", "This opening episode will focus on the human body’s defensive response against the coronavirus invasion. We will also learn about the different types of coronaviruses including SARS-CoV-2, the type of coronavirus that causes COVID-19. If you are an AUHSD student and would like a Certificate of Completion for this episode, please click <a href='https://docs.google.com/forms/d/e/1FAIpQLSeELKCMC8PWu0nJI6_bK1P8sBbGMVwf6eIZ0JbhWAaN57n8pw/viewform' target='_blank'>here</a>."
]
var video2 = ["https://www.youtube.com/embed/3ndkP-7goYs", "Episode 2: Understanding the Effects of COVID-19", "Uploaded: February 22, 2021", "In this episode, we will learn the effects of COVID-19 on the body--how it damages the tissues, the typical and the life-threatening signs and symptoms, the possible complications of the disease, and how it is particularly hostile to certain groups of people. If you are an AUHSD student and would like a Certificate of Completion for this episode, please click <a href='https://docs.google.com/forms/d/e/1FAIpQLSeELKCMC8PWu0nJI6_bK1P8sBbGMVwf6eIZ0JbhWAaN57n8pw/viewform' target='_blank'>here</a>."
]
var video3 = ["https://www.youtube.com/embed/9n8J6IB9Gb8", "Episode 3: Preventative Measures", "Uploaded: March 15, 2021", "This episode will focus on the science behind preventative measures to prevent the spread of COVID-19, such as the wearing of masks, physical distancing, handwashing, avoiding crowded places, etc. We will also learn the reasons behind implementation failures. If you are an AUHSD student and would like a Certificate of Completion for this episode, please click <a href='https://docs.google.com/forms/d/e/1FAIpQLSeELKCMC8PWu0nJI6_bK1P8sBbGMVwf6eIZ0JbhWAaN57n8pw/viewform' target='_blank'>here</a>."
]
var video4 = ["https://www.youtube.com/embed/mq0OFl1Ikdw", "Episode 4: Diagnostic Testing & Isolation Procedures", "Uploaded: March 21, 2021", "In this episode, we will learn about the importance of symptom recognition, diagnostic testing, quarantine and isolation procedures, as well as the challenges with access to testing, holidays, social inequities, and mass gatherings. If you are an AUHSD student and would like a Certificate of Completion for this episode, please click <a href='https://docs.google.com/forms/d/e/1FAIpQLSeELKCMC8PWu0nJI6_bK1P8sBbGMVwf6eIZ0JbhWAaN57n8pw/viewform' target='_blank'>here</a>."
]
var video5 = ["https://www.youtube.com/embed/GGpvv0ZbwIY", "Episode 5: Emergency & Intensive Care Management", "Uploaded: April 3, 2021", "This episode will bring us to the Emergency Departments and Intensive Care Units where  advanced treatment processes for COVID patients are provided. We will listen to health professionals as they talk about their challenges in their delivery of care. If you are an AUHSD student and would like a Certificate of Completion for this episode, please click <a href='https://docs.google.com/forms/d/e/1FAIpQLSeELKCMC8PWu0nJI6_bK1P8sBbGMVwf6eIZ0JbhWAaN57n8pw/viewform' target='_blank'>here</a>."
]
var video6 = ["https://www.youtube.com/embed/9FQDf0nN_aM", "Episode 6: Vaccination & Herd Immunity", "Uploaded: April 19, 2021", "In this episode, we will look at realistic ways of ending this pandemic. We will learn about the COVID vaccines--their safety and efficacy especially with the variant strains, the challenges of vaccine distribution, and the myths that get in the way. If you are an AUHSD student and would like a Certificate of Completion for this episode, please click <a href='https://docs.google.com/forms/d/e/1FAIpQLSeELKCMC8PWu0nJI6_bK1P8sBbGMVwf6eIZ0JbhWAaN57n8pw/viewform' target='_blank'>here</a>."
]
var video7 = ["https://www.youtube.com/embed/dcVJ9nxMXRY", "Episode 7: Physical, Mental, & Financial Impacts", "Uploaded: May 2, 2021", "This episode will look at the physical, mental and financial struggles that many have unfortunately endured.  We will listen to the struggles of those directly and indirectly affected by the pandemic and be inspired by their courage and persistence. If you are an AUHSD student and would like a Certificate of Completion for this episode, please click <a href='https://docs.google.com/forms/d/e/1FAIpQLSeELKCMC8PWu0nJI6_bK1P8sBbGMVwf6eIZ0JbhWAaN57n8pw/viewform' target='_blank'>here</a>."
]
var video8 = ["https://www.youtube.com/embed/r91CzzgdHHU", "Episode 8: Lessons Learned", "Uploaded: May 23, 2021", "In this last episode, we will reflect on what we have learned from this pandemic. This episode will hopefully bring some reassurance that no one is alone in this difficult journey and hope that all this shall pass. If you are an AUHSD student and would like a Certificate of Completion for this episode, please click <a href='https://docs.google.com/forms/d/e/1FAIpQLSeELKCMC8PWu0nJI6_bK1P8sBbGMVwf6eIZ0JbhWAaN57n8pw/viewform' target='_blank'>here</a>."
]

function changeVideo(index){
  var video = videos[index-1]
  //element.style.display = none;
  document.getElementById("topvideo").src = video[0]
  document.getElementById("topvideo-title").innerText = video[1]
  document.getElementById("topvideo-upload").innerText = video[2]
  document.getElementById("topvideo-description").innerHTML = video[3]
  $('html, body').animate({ scrollTop: 0 }, 'slow');

}

var videos = [video1, video2, video3, video4, video5, video6, video7, video8]
changeVideo(videos.length)