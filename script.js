// Variaveis Gerais
let teamData;
let newData;

// FUNÇAO faz a requisiçao para a API e al macena na variavel geral teamData
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
  console.log(teamData);
  let teamListDiv = document.getElementById('teamList');
  teamListDiv.innerHTML = '';
  teamData.response[0].players.forEach(player => {

      let playerCardDiv = document.createElement('div');
      playerCardDiv.classList.add('playerCardDiv');
      playerCardDiv.setAttribute("id", `${player.id}`);

      let playerImagesDiv = document.createElement('div')

      let playerPhoto = document.createElement('img');
      playerPhoto.src = player.photo;
      playerPhoto.alt = player.name;

      let playerTeam = document.createElement('img')
      playerTeam.src = 'img/logoFlamengo.png'
      playerTeam.alt='Flamengo'

      let playerName = document.createElement('p');
      playerName.textContent = `${player.name}`;
      playerName.classList.add('playerName');


      let playerAge = document.createElement('p');
      playerAge.textContent = `Age: ${player.age}`;

      let playerNumber = document.createElement('p');
      playerNumber.textContent = `Number: ${player.number || 'N/A'}`;

      let playerPosition = document.createElement('p');
      playerPosition.textContent = `Position: ${player.position}`;

      let playerUpdateButton = document.createElement('button');
      playerUpdateButton.setAttribute("id", "updateButton");
      playerUpdateButton.classList.add('playerButton');
      playerUpdateButton.textContent = `Atualizar Dados`;
      playerUpdateButton.setAttribute("onclick", `atualizarFormulario(${player.id})`);


      let playerDeleteButton = document.createElement('button');
      playerDeleteButton.setAttribute("id", "deleteButton");
      playerDeleteButton.classList.add('playerButton');
      playerDeleteButton.textContent = `Apagar Jogador`;
      playerDeleteButton.setAttribute("onclick", `deletePlayer(${player.id})`);

      playerCardDiv.appendChild(playerName);
      playerCardDiv.appendChild(playerImagesDiv);
    //playerImagesDivappendChild(playerTeam);
    playerImagesDiv.appendChild(playerPhoto);
      playerCardDiv.appendChild(playerAge);
      playerCardDiv.appendChild(playerNumber);
      playerCardDiv.appendChild(playerPosition);
      playerCardDiv.appendChild(playerUpdateButton);
      playerCardDiv.appendChild(playerDeleteButton);


      teamListDiv.appendChild(playerCardDiv);
    });
  };


//FUNÇAO que cria um formulario no site, sempre que precise atualizar um jogador
function atualizarFormulario(playerId) {
    let playerToken = playerId
    let formUpdate = document.getElementById('formUpdate');
    if (formUpdate.firstChild) {
        formUpdate.removeChild(formUpdate.firstChild);
      }
    let player = teamData.response[0].players.find((player) => player.id === playerId);

  
    if (!player) {
      console.log('Jugador no encontrado');
      return;
    }
  
    const form = document.createElement('form');
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Nome:';
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    nameInput.value =player.name;
  
    const ageLabel = document.createElement('label');
    ageLabel.textContent = 'Edade:';
    const ageInput = document.createElement('input');
    ageInput.setAttribute('type', 'number');
    ageInput.setAttribute('name', 'age');
    ageInput.value = player.age; 
  
    const numberLabel = document.createElement('label');
    numberLabel.textContent = 'Número:';
    const numberInput = document.createElement('input');
    numberInput.setAttribute('type', 'number');
    numberInput.setAttribute('name', 'number');
    numberInput.value = player.number;
  
    const positionLabel = document.createElement('label');
    positionLabel.textContent = 'Posição:';
    const positionInput = document.createElement('input');
    positionInput.setAttribute('type', 'text');
    positionInput.setAttribute('name', 'position');
    positionInput.value = player.position; 
  
    const submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Enviar');


    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(ageLabel);
    form.appendChild(ageInput);
    form.appendChild(numberLabel);
    form.appendChild(numberInput);
    form.appendChild(positionLabel);
    form.appendChild(positionInput);
    form.appendChild(submitButton);
    formUpdate.appendChild(form);
  
    //Event listener que se activa no click do submit 
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      let name = form.elements.name.value;
      let age = form.elements.age.value;
      let number = form.elements.number.value;
      let position = form.elements.position.value;

      newData = {
        name: name,
        age: age,
        number: number,
        position: position
      };
      updatePlayer(playerToken,newData)
    });
  }

  // FUNÇÃO que modifica com o método PUT a um jogador
function updatePlayer(playerID, newData) {
    let playerIndex = teamData.response[0].players.findIndex((player) => player.id === playerID);
  
    if (playerIndex !== -1) {
      teamData.response[0].players[playerIndex] = {
        ...teamData[0].players[playerIndex],
        ...newData
      };
      console.log("O Jogador alterado foi:", teamData[0].players[playerIndex]);
      showSquad();

      const apiUrl = `https://v3.football.api-sports.io/players/${playerID}`;
  
      fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-rapidapi-key': '83303917d80ac4e0dad6d309eabe233e'
        },
        body: JSON.stringify(newData)
      })
      .then((response) => response.json())
      .then((data) => {
        console.log("O Jogador alterado foi:", teamData[0].players[playerIndex]);
      })
      .catch((error) => {
        console.error('Error al actualizar el jugador:', error);
      });
    } else {
      console.log("ID inexistente");
    }
  }
function createPlayer(){




}


// // FUNÇAO que faz o POST para criar un novo jogador 
// function sendPlayer(newPlayer) {
//   fetch('https://v3.football.api-sports.io/players', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'x-rapidapi-host': 'v3.football.api-sports.io',
//       'x-rapidapi-key': '83303917d80ac4e0dad6d309eabe233e'
//     },
//     body: JSON.stringify(newPlayer)
//   })
//     .then(response => response.json())
//     .then(data => {
//         if (newPlayer.id === 0 || teamData.some(player => player.id === newPlayer.id)) {
//         let newID;
//         do {
//           newID = Math.floor(Math.random() * 10000);
//         } while (teamData.some(player => player.id === nuevoID));
//         newPlayer.id = newID;
//       } 
//         teamData.push(newPlayer);
//         return teamData;
//     });
//     console.log("O Novo jogador do time é:",teamData.find(player => player.id === newPlayer.id))
// }


// FUNÇAO que apaga o jogador usando DELETE
function deletePlayer(playerID) {
    let playerIndex = teamData.response[0].players.findIndex((player) => player.id === playerID);
    if (playerIndex !== -1) {
      teamData.response[0].players.splice(playerIndex, 1);
      showSquad()
  
      const apiUrl = `https://v3.football.api-sports.io/players/${playerID}`;
  
      fetch(apiUrl, {
        method: 'DELETE',
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-rapidapi-key': '83303917d80ac4e0dad6d309eabe233e'
        }
      })
      .then((response) => response.json())
      .then((data) => {
        console.log("Jogador apagado com sucesso.");
        showSquad();
      })
      .catch((error) => {
        console.error('Error al eliminar el jugador:', error);
      });
    } else {
      console.log("ID inexistente.");
    }
  }

// // Eventos de escuta que salva os dados de jogador novo
// document.getElementById('submitBtn').addEventListener('click', function () {
//   let playerName = document.getElementById('name').value;
//   let playerAge = document.getElementById('age').value;
//   let playerNumber = document.getElementById('number').value;
//   let playerPosition = document.getElementById('position').value;
//   let playerPhoto = document.getElementById('photo').value;
//   console.log(playerData);
// })
