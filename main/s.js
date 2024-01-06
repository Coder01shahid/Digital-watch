let Hrs = document.getElementById("Hrs");
let mins = document.getElementById("mins");
let sec = document.getElementById("sec");




setInterval(()=>{
    
let currentTime = new Date();

Hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();

mins.innerHTML = currentTime.getMinutes();

sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
},1000)
