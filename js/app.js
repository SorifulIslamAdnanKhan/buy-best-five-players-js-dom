
const myTeamPlayers = [];

function displaySelectedPlayers(){

    

}

function selectPlayer(element){

    //console.log(element.parentNode.children[0].innerText);

    const selectedPlayers = element.parentNode.children[0].innerText;
    
    //console.log(selectedPlayers);

    myTeamPlayers.push(selectedPlayers);

   //console.log(myTeamPlayers);

    if (myTeamPlayers.length >=6 ){

        alert('You can not select more than 5 players');
        return;
   }

    displaySelectedPlayers(myTeamPlayers);

}