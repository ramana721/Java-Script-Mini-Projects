const form = document.querySelector(".main_form");
const inputs = document.querySelectorAll(".main_form > input");
// console.log(inputs, form);
const errorPrompt = document.querySelector(".main_error-prompter");
const scoreBoardWrapper = document.querySelector(".main_scoreboard-wrapper");



document.querySelector("form").addEventListener("submit", (e)=> {
    e.preventDefault();
    // Take the user information.
    // Update the data on UI as well

    // validation
    const [firstName, lastName, Country, Score] = Array.from(inputs).map((player) => player.value.trim())
    if (!firstName || !lastName || !Country || !Score){
        errorPrompt.style.display = "block";
        return ;
    }
    errorPrompt.style.display = 'none';
    const playerDetails = {
        fullName: `${firstName} ${lastName}`,
        Country: Country,
        Score: Score,
        timeStamp: generateDateAndTime()
    }
    updateUI(playerDetails);
    sortScoreBoard();
    // making the place holders empty
    inputs.forEach((record) => record.value = '');
    // activateBtnEventListener();
});

function updateUI(playerDetails){
    let newPlayer = document.createElement('div');
    newPlayer.classList.add('main_scoreboard');
    newPlayer.innerHTML = `
                <div>
                    <p class="main_player-name">${playerDetails.fullName}</p>
                    <p class="main_time-stamp">${playerDetails.timeStamp}</p>
                </div>
                <p class="main_player-country">${playerDetails.Country}</p>
                <p class="main_player-score">${playerDetails.Score}</p>
                <div class="main_scoreboard-btn-container">
                    <button class="delete">&#x1f5d1;</button>
                    <button class="incScore">+5</button>
                    <button class="decScore">-5</button>
                </div>
                `
    scoreBoardWrapper.appendChild(newPlayer);
    
    // sortScoreBoard();

}

// Debug testing
// const delButton = document.querySelectorAll('.delete');
// // console.log(delButton);
// delButton.forEach((del) => {
//     del.addEventListener('click', (event) => deleteRecord(event));
// });

// function deleteRecord(event) {
   
//     const playerElement = event.target.closest('.main_scoreboard');
//     scoreBoardWrapper.removeChild(playerElement);
// }


// let body = document.getElementsByTagName("body")[0];
// body.addEventListener('click', (event) => activateBtnEventListener(event));

// Event Delegation to dynamically accomodidate the newly added Div's as well.
scoreBoardWrapper.addEventListener('click', (event) => activateBtnEventListener(event));

function activateBtnEventListener(event) {
    // Using Event Delegation instead of adding events for each and every button.
    const buttonType = event.target.className;
    const playerElement = event.target.closest('.main_scoreboard');
    let playerScore = playerElement.querySelector('.main_player-score');
    switch (buttonType){
        case 'delete':
            deleteRecord(event);
            break;
        
        case 'incScore':
            incScore(event);
            break;
        
        case 'decScore':
            decScore(event);
            break;
    }

    // Functionalities 
    
    function deleteRecord(event) {
        scoreBoardWrapper.removeChild(playerElement);
    }

    function incScore(){
        let score = parseInt(playerScore.innerText);
        score += 5;
        playerScore.innerText = score;
    }
    
    function decScore(){
        let score = parseInt(playerScore.innerText);
        score -= 5;
        playerScore.innerText = score;
    }

    // Sorting the Board again after applied changes
    sortScoreBoard();

}

function sortScoreBoard() {

    const players = Array.from(document.querySelectorAll('.main_scoreboard'));
    players.sort((play1, play2) => parseInt(play1.querySelector('.main_player-score').innerText) - parseInt(play2.querySelector('.main_player-score').innerText));
    scoreBoardWrapper.innerHTML = '';
    // console.log(players);
    players.forEach((info) => scoreBoardWrapper.appendChild(info));
}

function generateDateAndTime() {
    // Generate Date and Time
    const now = new Date();
    // const day = String(now.getDate()).padStart(2, '0');
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    const month = monthNames[now.getMonth()]; // Months are 0-indexed
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const formatted = `${month} ${year}: ${hours}:${minutes}:${seconds}`;
    
    return formatted;
}
