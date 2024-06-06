

function random(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}


const answer = ["Rock", "Paper", "Siccors"];
function submit() {
    const d = document.getElementById("demo");
    let bot = random(4, 1);
    var user = document.getElementById("you").value;
    var you = user;
    var userAnswer = answer[user - 1] || you;
    var botAnswer = answer[bot - 1];
    d.innerHTML = userAnswer + '<br>' + botAnswer;
    if ((botAnswer == "Rock" && userAnswer == "Paper") || (botAnswer == "Paper" && userAnswer == "Siccors") || (botAnswer == "Siccors" && userAnswer == "Rock")) {

        d.innerHTML += "<br> YOU WIN";
    }
    else if ((userAnswer == "Rock" && botAnswer == "Paper") || (userAnswer == "Paper" && botAnswer == "Siccors") || (userAnswer == "Siccors" && botAnswer == "Rock")) {
        d.innerHTML += "<br> YOU LOSE";
    }
    else {
        d.innerHTML += "<br> Draw";
    }

}






