// navigation bar
function expandMenu() {
    var x = document.getElementById("main-nav-bar");
    if (x.className == "main-nav") {
        x.className += " responsive";
    }
    else {
        x.className = "main-nav";
    }
}

// 2020 projects
let avalon2Button = document.getElementById('avalon-2-button');
let robotArm2Button = document.getElementById('robot-arm-2-button');

avalon2Button.onclick = function () {
    window.open("projects/avalon-rov-2.html", "_self");
}

robotArm2Button.onclick = function () {
    window.open("projects/robot-arm-2.html", "_self");
}

// 2019 projects
let robotArmInterfaceButton = document.getElementById('robot-arm-interface-button');
let avalonButton = document.getElementById('avalon-button');
let marsworksButton = document.getElementById('marsworks-button');
let robotArmAppButton = document.getElementById('robot-arm-app-button');
let robotArmButton = document.getElementById('robot-arm-button');

robotArmInterfaceButton.onclick = function () {
    window.open("projects/robot-arm-interface.html", "_self");
}

avalonButton.onclick = function () {
    window.open("projects/avalon-rov.html", "_self");
}

marsworksButton.onclick = function () {
    window.open("projects/marsworks.html", "_self");
}

robotArmAppButton.onclick = function () {
    window.open("projects/robot-arm-app.html", "_self");
}

robotArmButton.onclick = function () {
    window.open("projects/robot-arm.html", "_self");
}

// 2018 projects
let siemensChallengeButton = document.getElementById('siemens-challenge-button');
let moonworksButton = document.getElementById('moonworks-button');

siemensChallengeButton.onclick = function () {
    window.open("projects/siemens-challenge.html", "_self");
}

moonworksButton.onclick = function () {
    window.open("projects/moonworks.html", "_self");
}

// 2017 projects
let fanControllerButton = document.getElementById('fan-controller-button');

fanControllerButton.onclick = function () {
    window.open("projects/fan-controller.html", "_self");
}

// 2016 projects
let boostPedalButton = document.getElementById('boost-pedal-button');
let pedalBoardButton = document.getElementById('pedal-board-button');

boostPedalButton.onclick = function () {
    window.open("projects/boost-pedal.html", "_self");
}

pedalBoardButton.onclick = function () {
    window.open("projects/pedal-board.html", "_self");
}
