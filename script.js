// Variaveis Gerais
let teamData;
let newPlayer = {
    id: 12345,
    name: "Pedrito Perez",
    age: 25,
    number: 45,
    position: "Forward",
    photo: "https://media.api-sports.io/football/players/12345.png"
  };

let newData = {
    name: "Pedrito Perez",
    age: 25,
    number: 45,
    position: "Forward",
    photo: "https://media.api-sports.io/football/players/12345.png"
}

// FUNÇAO faz a requisiçao para a API e almacena na variavel geral teamData
function getData() {
  fetch('https://v3.football.api-sports.io/players/squads?team=127', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': '83303917d80ac4e0dad6d309eabe233e'
    }
  })
    .then(response => response.json())
    .then(data => {
      teamData = data;
      console.log(teamData);
      showSquad();
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
 
// FUNÇAO QUE CRIA OS DIV E MOSTRA OS DADOS
function showSquad() {
  const playerListDiv = document.getElementById('teamList');

  teamData.response[0].players.forEach(player => {
    const playerDiv = document.createElement('div');
    playerDiv.classList.add('player');

    const playerName = document.createElement('p');
    playerName.textContent = `Name: ${player.name}`;

    const playerAge = document.createElement('p');
    playerAge.textContent = `Age: ${player.age}`;

    const playerNumber = document.createElement('p');
    playerNumber.textContent = `Number: ${player.number || 'N/A'}`;

    const playerPosition = document.createElement('p');
    playerPosition.textContent = `Position: ${player.position}`;

    const playerPhoto = document.createElement('img');
    playerPhoto.src = player.photo;
    playerPhoto.alt = player.name;

    playerDiv.appendChild(playerName);
    playerDiv.appendChild(playerAge);
    playerDiv.appendChild(playerNumber);
    playerDiv.appendChild(playerPosition);
    playerDiv.appendChild(playerPhoto);

    playerListDiv.appendChild(playerDiv);
  });
}


// FUNÇAO que faz o POST para criar un novo jogador 
function sendPlayer(newPlayer) {
  fetch('https://v3.football.api-sports.io/players', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': '83303917d80ac4e0dad6d309eabe233e'
    },
    body: JSON.stringify(newPlayer)
  })
    .then(response => response.json())
    .then(data => {
        if (newPlayer.id === 0 || teamData.some(player => player.id === newPlayer.id)) {
        let newID;
        do {
          newID = Math.floor(Math.random() * 10000);
        } while (teamData.some(player => player.id === nuevoID));
        newPlayer.id = newID;
      } 
        teamData.push(newPlayer);
        return teamData;
    });
    console.log("O Novo jogador do time é:",teamData.find(player => player.id === newPlayer.id))
}


// FUNÇAO que modifica com o metodo PUT a um jogador
function updatePlayer(playerID, newData) {
fetch(`https://v3.football.api-sports.io/players/?id=${playerId}`, {
method: 'PUT',
headers: {
  'Content-Type': 'application/json',
  'x-rapidapi-host': 'v3.football.api-sports.io',
  'x-rapidapi-key': '83303917d80ac4e0dad6d309eabe233e'
},
body: JSON.stringify(newData)
})
.then(response => response.json())
.then(data => {  
    let playerIndex = teamData.findIndex(player => player.id === playerID);
    if (playerIndex !== -1) {
      teamData[playerIndex] = {
        ...teamData[playerIndex],
        ...newData
      };
      console.log("O Jogador alterado foi:",teamData.find(player => player.id === PlayerID))   
      return teamData;
    } else {
      console.log("ID inexistente");
      return teamData;
    }
})
}


// FUNÇAO que apaga o jogador usando DELETE
function deletePlayer(playerID) {
fetch(`https://v3.football.api-sports.io/players/?id=${playerID}`, {
method: 'DELETE',
headers: {
  'x-rapidapi-host': 'v3.football.api-sports.io',
  'x-rapidapi-key': '83303917d80ac4e0dad6d309eabe233e'
}
})
.then(response => response.json())
.then(data => {
    let playerIndex = teamData.findIndex(player => player.id === playerID);
    if (playerIndex !== -1) {
      teamData.splice(playerIndex, 1);
      console.log("Jogador apagado com sucesso.");
    } else {
      console.log("ID inexistente.");
    }
    return teamData
  }
)}

// Eventos de escuta que salva os dados de jogador novo
document.getElementById('submitBtn').addEventListener('click', function () {
  let playerName = document.getElementById('name').value;
  let playerAge = document.getElementById('age').value;
  let playerNumber = document.getElementById('number').value;
  let playerPosition = document.getElementById('position').value;
  let playerPhoto = document.getElementById('photo').value;
  console.log(playerData);
});