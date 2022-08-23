
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

    const budget = getInputFiledvalueById('budget-element');

    if (isNaN(budget) === true || budget <= 0 || budget === ''){
        
        alert ('Please provide a valid number.');
        return;
    }

    const selectedPlayersList = document.getElementById('selected-players-list').childNodes.length;

    const totalPlayerCost = budget * selectedPlayersList;

    setTextElement('total-player-expense', totalPlayerCost);

})


document.getElementById('btn-calculate-total').addEventListener('click', function(){

    const managerCost = getInputFiledvalueById('manager-cost');

    if (isNaN(managerCost) === true || managerCost <= 0 || managerCost === '') {

        alert('Please insert a valid number.');
        return;
    }
    
    const coachCost = getInputFiledvalueById('coach-cost');

    if (isNaN(coachCost) === true || coachCost <= 0 || coachCost === '') {

        alert('Please give a valid number.');
        return;
    }

    const totalPlayerExpense = getTextElementById('total-player-expense');

    const totalTeamCost = totalPlayerExpense + managerCost + coachCost;

    setTextElement('total-team-cost', totalTeamCost);
})

