let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")

let homePoints = 0
let guestPoints = 0


function homeOne() {
    homePoints += 1
    scoreHome.innerText = homePoints
}
function homeTwo() {
    homePoints += 2
    scoreHome.innerText = homePoints
}
function homeThree() {
    homePoints += 3
    scoreHome.innerText = homePoints
}

function guestOne() {
    guestPoints += 1
    scoreGuest.innerText = guestPoints
}
function guestTwo() {
    guestPoints += 2
    scoreGuest.innerText = guestPoints
}
function guestThree() {
    guestPoints += 3
    scoreGuest.innerText = guestPoints
}

let winTeam = document.getElementById("win-team-name")

function winningTeam() {
    if (homePoints > guestPoints) {
        let pointsDifference = homePoints - guestPoints + " points"
        winTeam.innerText = "Home Leads: " + pointsDifference    
    } else if (guestPoints > homePoints) {
        let pointsDifference = guestPoints - homePoints
        winTeam.innerText = "Guest Leads: " + pointsDifference + " points"
    } else {
        winTeam.innerText = "EQUAL PLAY"
    }
}

