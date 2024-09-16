let userScore = 0;
let turinganScore = 0;
const userScore_span = document.getElementById("user-score");
const turinganScore_span = document.getElementById("turingan-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rockid");
const paper_div = document.getElementById("paperid");
const scissors_div = document.getElementById("scissorsid");

function getTuringanChoice() {
    const choices = ['rockid', 'paperid', 'scissorsid'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function convertWord(word) {
    if (word == "rockid") return "Rock";
    if (word == "paperid") return "Paper";
    return "Scissors";
}

function win(userChoice, turinganChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    turinganScore_span.innerHTML = turinganScore;
    result_p.innerHTML = convertWord(userChoice) + "&nbspBeats " + convertWord(turinganChoice) + ". You win!";
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 300);
}

function lose(userChoice, turinganChoice) {
    turinganScore++;
    userScore_span.innerHTML = userScore;
    turinganScore_span.innerHTML = turinganScore;
    result_p.innerHTML = convertWord(userChoice) + "&nbspLoses " + convertWord(turinganChoice) + ". You lose!";
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow') }, 300);
}

function draw(userChoice, turinganChoice) {
    result_p.innerHTML = convertWord(userChoice) + "&nbspEquals " + convertWord(turinganChoice) + ". Sheesh it's a draw!";
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('grey-glow') }, 300);
}

function game(userChoice) {
    const turinganChoice = getTuringanChoice();
    switch (userChoice + turinganChoice) {
        case "rockidpaperid":
        case "paperidrockid":
        case "scissorsidpaperid":
            win(userChoice, turinganChoice);
            break;
        case "rockidpaperid":
        case "paperidscissorsid":
        case "scissorsidrockid":
            lose(userChoice, turinganChoice);
            break;
        case "rockidrockid":
        case "paperidpaperid":
        case "scissorsidscissorsid":
            draw(userChoice, turinganChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("rockid"));

    paper_div.addEventListener('click', () => game("paperid"));

    scissors_div.addEventListener('click', () => game("scissorsid"));
}

main();

    var fish = document.getElementById('fish');
    var bubble = document.getElementById('speech');

        fish.onclick = function() {
            if (bubble.style.display === 'none' || bubble.style.display === '') {
                bubble.style.display = 'block';  
            } else {
                bubble.style.display = 'none';   
            }
        };

    var rockimg = document.getElementById('rockid')
    var sus = document.getElementById('sound')

    rockimg.onclick = function() {
        if (rockimg.src.includes('Dwayne__The_Rock__Johnson_Visits_the_Pentagon_(41)_(cropped).jpg')) {
            rockimg.src = 'sus.jpg';
            sus.play();
        } else {
            rockimg.src = 'Dwayne__The_Rock__Johnson_Visits_the_Pentagon_(41)_(cropped).jpg';
        }
    };