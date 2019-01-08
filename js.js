var btn = document.querySelector(".btn");
var userScoreHTML = document.getElementById("userScore");
var cpuScoreHTML = document.getElementById("cpuScore");
var tieScoreHTML = document.getElementById("tieScore");
var resetBtn = document.querySelector(".reset");
var options = ["rock", "paper", "scissors"];
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var rockCpu = document.getElementById("rockCpu");
var paperCpu = document.getElementById("paperCpu");
var scissorsCpu = document.getElementById("scissorsCpu");
var userName = document.getElementById("userName");
var userScore = 0;
var cpuScore = 0;
var tieScore = 0;


function clearCpu() {
    rockCpu.classList.remove("shadow");
    paperCpu.classList.remove("shadow");
    scissorsCpu.classList.remove("shadow");
}

function result(enterOption) {
    var userOption = enterOption;
    var cpuOption = options[Math.floor(Math.random() * options.length)];
    clearCpu();
    if(userOption !== cpuOption) {
        if(userOption === "rock" && cpuOption === "scissors") {
            userScore++;
            userScoreHTML.innerHTML = userScore;
            userScoreHTML.classList.add("animation");
            setTimeout(() => { userScoreHTML.classList.remove("animation"); }, 500);
            scissorsCpu.classList.add("shadow");
        } else if(userOption === "rock" && cpuOption === "paper") {
            cpuScore++;
            cpuScoreHTML.innerHTML = cpuScore;
            cpuScoreHTML.classList.add("animation");
            setTimeout(() => { cpuScoreHTML.classList.remove("animation"); }, 500);   
            
            paperCpu.classList.add("shadow");
        } else if(userOption === "paper" && cpuOption === "scissors") {
            cpuScore++;
            cpuScoreHTML.innerHTML = cpuScore;
            cpuScoreHTML.classList.add("animation");
            setTimeout(() => { cpuScoreHTML.classList.remove("animation"); }, 500);
            scissorsCpu.classList.add("shadow");
        } else if(userOption === "paper" && cpuOption === "rock") {
            userScore++;
            userScoreHTML.innerHTML = userScore;
            userScoreHTML.classList.add("animation");
            setTimeout(() => { userScoreHTML.classList.remove("animation"); }, 500);
            rockCpu.classList.add("shadow");
        } else if(userOption === "scissors" && cpuOption === "paper") {
            userScore++;
            userScoreHTML.innerHTML = userScore;
            userScoreHTML.classList.add("animation");
            setTimeout(() => { userScoreHTML.classList.remove("animation"); }, 500);
            paperCpu.classList.add("shadow");
        } else if(userOption === "scissors" && cpuOption === "rock") {
            cpuScore++;
            cpuScoreHTML.innerHTML = cpuScore;
            cpuScoreHTML.classList.add("animation");
            setTimeout(() => { cpuScoreHTML.classList.remove("animation"); }, 500);
            rockCpu.classList.add("shadow");
        }
    } else {
        tieScore++;
        tieScoreHTML.innerHTML = tieScore;
        tieScoreHTML.classList.add("animation");
        setTimeout(() => { tieScoreHTML.classList.remove("animation"); }, 500);
        if(userOption === "rock") {
            rockCpu.classList.add("shadow");
        } else if(userOption === "paper") {
            paperCpu.classList.add("shadow");
        } else if(userOption === "scissors") {
            scissorsCpu.classList.add("shadow");
        }
    }
}

rock.addEventListener("click", function() { result("rock"); })
paper.addEventListener("click", function() {result("paper"); })
scissors.addEventListener("click", function() { result("scissors"); })

userName.addEventListener("click", function() {
    var name = prompt("Please enter your name:", "Max input 6 characters");

    if(name === "" || name == null || name.length > 6) {
        userName.innerHTML = "Player";
    } else {
        userName.innerHTML = name;
    }    
})

resetBtn.addEventListener("click", function() {
    clearCpu();
    userScoreHTML.innerHTML = "0";
    cpuScoreHTML.innerHTML = "0";
    tieScoreHTML.innerHTML = "0";
    window.userScore = 0;
    window.cpuScore = 0;
    window.tieScore = 0;
})
