
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

        selectedPlayersList.appendChild(playerList);

    }
}

function selectPlayer(element){

    element.disabled = true;

    const selectedPlayers = element.parentNode.children[0].innerText;

    myTeamPlayers.push(selectedPlayers);

    if (myTeamPlayers.length >=6 ){

        alert('You can not select more than 5 players');
        return;
   }

    displaySelectedPlayers(myTeamPlayers);
}

document.getElementById('btn-calculate').addEventListener('click', function (){

    const budgetElement = document.getElementById('budget-element');
    const budgetElementString = budgetElement.value;
    const budget = parseFloat(budgetElementString);

    if (isNaN(budget) === true || budget <= 0 || budget === ''){
        
        alert ('Please provide a valid number.');
        return;
    }

    const selectedPlayersList = document.getElementById('selected-players-list').childNodes.length;

    const totalPlayerCost = budget * selectedPlayersList;

    const totalPlayerExpense = document.getElementById('total-player-expense');
    totalPlayerExpense.innerText = totalPlayerCost;
})
