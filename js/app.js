
const myTeamPlayers = [];

function displaySelectedPlayers(players){

    const selectedPlayersList = document.getElementById('selected-players-list');
    
    selectedPlayersList.innerHTML = '';

    for(let i = 0; i < players.length; i++){

        const myPlayers = myTeamPlayers[i];
       
        const playerList = document.createElement('p');

        playerList.innerHTML = `
            <span>${i + 1}.</span>
            <span>${myPlayers}</span>

        `;

        console.log(myPlayers);
        selectedPlayersList.appendChild(playerList);
    }
}

function selectPlayer(element){

    const selectedPlayers = element.parentNode.children[0].innerText;

    myTeamPlayers.push(selectedPlayers);

    if (myTeamPlayers.length >=6 ){

        alert('You can not select more than 5 players');
        return;
   }

    displaySelectedPlayers(myTeamPlayers);
}