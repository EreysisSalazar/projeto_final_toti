// Variaveis Gerais
let teamData;
let newData;
let newPlayer;
let fixtureData = {
    "get": "fixtures",
    "parameters": {
        "team": "127",
        "next": "1"
    },
    "errors": [],
    "results": 1,
    "paging": {
        "current": 1,
        "total": 1
    },
    "response": [
        {
            "fixture": {
                "id": 1005869,
                "referee": null,
                "timezone": "UTC",
                "date": "2023-09-14T00:30:00+00:00",
                "timestamp": 1694651400,
                "periods": {
                    "first": null,
                    "second": null
                },
                "venue": {
                    "id": null,
                    "name": "Estádio Kleber José de Andrade",
                    "city": "Cariacica, Espírito Santo"
                },
                "status": {
                    "long": "Not Started",
                    "short": "NS",
                    "elapsed": null
                }
            },
            "league": {
                "id": 71,
                "name": "Serie A",
                "country": "Brazil",
                "logo": "https://media-2.api-sports.io/football/leagues/71.png",
                "flag": "https://media-1.api-sports.io/flags/br.svg",
                "season": 2023,
                "round": "Regular Season - 23"
            },
            "teams": {
                "home": {
                    "id": 127,
                    "name": "Flamengo",
                    "logo": "https://media-3.api-sports.io/football/teams/127.png",
                    "winner": null
                },
                "away": {
                    "id": 134,
                    "name": "Atletico Paranaense",
                    "logo": "https://media-2.api-sports.io/football/teams/134.png",
                    "winner": null
                }
            },
            "goals": {
                "home": null,
                "away": null
            },
            "score": {
                "halftime": {
                    "home": null,
                    "away": null
                },
                "fulltime": {
                    "home": null,
                    "away": null
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        }
    ]
};

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
      showSquad();
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

 
// FUNÇAO QUE CRIA OS DIV E MOSTRA OS DADOS
function showSquad() {
    console.log(teamData)
  let teamListDiv = document.getElementById('teamList');
  let createPlayerDiv = document.getElementById('createPlayer')
  createPlayerDiv.style.display = "block";
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
        ...teamData.response[0].players[playerIndex],
        ...newData
      };
      console.log("O Jogador alterado foi:", teamData.response[0].players[playerIndex]);
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
 
    const form = document.createElement('form');
    

    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Nome:';
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    

    const ageLabel = document.createElement('label');
    ageLabel.textContent = 'Edade:';
    const ageInput = document.createElement('input');
    ageInput.setAttribute('type', 'number');
    ageInput.setAttribute('name', 'age');
    

    const positionLabel = document.createElement('label');
    positionLabel.textContent = 'Position:';
    const positionInput = document.createElement('input');
    positionInput.setAttribute('type', 'text');
    positionInput.setAttribute('name', 'position');
    

    const numberLabel = document.createElement('label');
    numberLabel.textContent = 'Number:';
    const numberInput = document.createElement('input');
    numberInput.setAttribute('type', 'number');
    numberInput.setAttribute('name', 'number');
    

    const submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Enviar');
    

    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(ageLabel);
    form.appendChild(ageInput);
    form.appendChild(positionLabel);
    form.appendChild(positionInput);
    form.appendChild(numberLabel);
    form.appendChild(numberInput);
    form.appendChild(submitButton);
    

    let formContainer = document.getElementById('formUpdate');
    if (formContainer.firstChild) {
        formContainer.removeChild(formContainer.firstChild);
      }
    formContainer.appendChild(form);
  

    form.addEventListener('submit', function(event) {
      event.preventDefault();
  

      let name = nameInput.value;
      let age = ageInput.value;
      let position = positionInput.value;
      let number = numberInput.value;

      let photo ="https://media-2.api-sports.io/football/players/306210.png";
      newPlayer = {
        id: 0,
        name: name,
        age: age,
        number: number,
        position: position,
        photo: photo
      };

  console.log(newPlayer)
      sendPlayer(newPlayer);
  
    });
  }
  

// FUNÇAO que faz o POST para criar un novo jogador 
function sendPlayer(newPlayer) {
    if (newPlayer.id === 0 || teamData.response[0].players.some(player => player.id === newPlayer.id)) {
      let newID;
      do {
        newID = Math.floor(Math.random() * 10000);
      } while (teamData.response[0].players.some(player => player.id === newID));
      newPlayer.id = newID;
    }
    teamData.response[0].players.push(newPlayer);
    console.log("Jogador criado com successo")
  showSquad()

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
        console.log("El nuevo jugador del equipo es:", teamData.find(player => player.id === newPlayer.id));
      })
      .catch(error => {
        console.error("Error al enviar el nuevo jugador:", error);
      });
  }


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

function nextFixtureGet(){
    fetch('https://v3.football.api-sports.io/fixtures?team=127&next=1', {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-rapidapi-key': '83303917d80ac4e0dad6d309eabe233e'
        }
      })
        .then(response => response.json())
        .then(data => {
          fixtureData= data;
          console.log(fixtureData)
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }


function nextFixture() {
    console.log(fixtureData.response[0])
    let nextMatchDiv = document.getElementById("nextMatch");
  
    const homeTeamName = document.createElement('p');
    homeTeamName.textContent = fixtureData.response[0].teams.home.name;
  
    const awayTeamName = document.createElement('p');
    awayTeamName.textContent = fixtureData.response[0].teams.away.name;
  
    const stadium = document.createElement('p');
    stadium.textContent = `Estadio: ${fixtureData.response[0].fixture.venue.name}, ${fixtureData.response[0].fixture.venue.city}`;
  
    const matchDateTime = document.createElement('p');
    const matchDate = new Date(fixtureData.response[0].fixture.date);
    matchDateTime.textContent = `Fecha y Hora: ${matchDate.toLocaleString()}`;
  
    const leagueName = document.createElement('p');
    leagueName.textContent = `Liga: ${fixtureData.response[0].league.name}`;
  
    const homeTeamLogo = document.createElement('img');
    homeTeamLogo.src = fixtureData.response[0].teams.home.logo;
  
    const awayTeamLogo = document.createElement('img');
    awayTeamLogo.src = fixtureData.response[0].teams.away.logo;

    nextMatchDiv.appendChild(homeTeamLogo);
    nextMatchDiv.appendChild(homeTeamName);
    nextMatchDiv.appendChild(awayTeamLogo);
    nextMatchDiv.appendChild(awayTeamName);
    nextMatchDiv.appendChild(stadium);
    nextMatchDiv.appendChild(matchDateTime);
    nextMatchDiv.appendChild(leagueName);
  }
  
  nextFixture();
  
