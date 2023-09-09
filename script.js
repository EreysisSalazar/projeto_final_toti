// Variaveis Gerais
let teamData = [
  {
      "team": {
          "id": 127,
          "name": "Flamengo",
          "logo": "https://media-3.api-sports.io/football/teams/127.png"
      },
      "players": [
          {
              "id": 10112,
              "name": "Santos",
              "age": 33,
              "number": 1,
              "position": "Goalkeeper",
              "photo": "https://media-2.api-sports.io/football/players/10112.png"
          },
          {
              "id": 11756,
              "name": "A. Rossi",
              "age": 28,
              "number": 17,
              "position": "Goalkeeper",
              "photo": "https://media-1.api-sports.io/football/players/11756.png"
          },
          {
              "id": 306210,
              "name": "Matheus Cunha",
              "age": 22,
              "number": 25,
              "position": "Goalkeeper",
              "photo": "https://media-2.api-sports.io/football/players/306210.png"
          },
          {
              "id": 372083,
              "name": "Dyogo",
              "age": 19,
              "number": null,
              "position": "Goalkeeper",
              "photo": "https://media-2.api-sports.io/football/players/372083.png"
          },
          {
              "id": 362884,
              "name": "Kauã Santos",
              "age": 20,
              "number": null,
              "position": "Goalkeeper",
              "photo": "https://media-2.api-sports.io/football/players/362884.png"
          },
          {
              "id": 1290,
              "name": "G. Varela",
              "age": 30,
              "number": 2,
              "position": "Defender",
              "photo": "https://media-3.api-sports.io/football/players/1290.png"
          },
          {
              "id": 10156,
              "name": "Rodrigo Caio",
              "age": 30,
              "number": 3,
              "position": "Defender",
              "photo": "https://media-1.api-sports.io/football/players/10156.png"
          },
          {
              "id": 10124,
              "name": "Léo Pereira",
              "age": 27,
              "number": 4,
              "position": "Defender",
              "photo": "https://media-1.api-sports.io/football/players/10124.png"
          },
          {
              "id": 1771,
              "name": "Ayrton Lucas",
              "age": 26,
              "number": 6,
              "position": "Defender",
              "photo": "https://media-3.api-sports.io/football/players/1771.png"
          },
          {
              "id": 10089,
              "name": "Fabrício Bruno",
              "age": 27,
              "number": 15,
              "position": "Defender",
              "photo": "https://media-1.api-sports.io/football/players/10089.png"
          },
          {
              "id": 34,
              "name": "Filipe Luís",
              "age": 38,
              "number": 16,
              "position": "Defender",
              "photo": "https://media-2.api-sports.io/football/players/34.png"
          },
          {
              "id": 2283,
              "name": "David Luiz",
              "age": 36,
              "number": 23,
              "position": "Defender",
              "photo": "https://media-3.api-sports.io/football/players/2283.png"
          },
          {
              "id": 1260,
              "name": "Pablo",
              "age": 32,
              "number": 30,
              "position": "Defender",
              "photo": "https://media-1.api-sports.io/football/players/1260.png"
          },
          {
              "id": 340067,
              "name": "Cleiton",
              "age": 20,
              "number": 33,
              "position": "Defender",
              "photo": "https://media-1.api-sports.io/football/players/340067.png"
          },
          {
              "id": 10161,
              "name": "Matheuzinho",
              "age": 23,
              "number": 34,
              "position": "Defender",
              "photo": "https://media-3.api-sports.io/football/players/10161.png"
          },
          {
              "id": 362886,
              "name": "Zé Welinton",
              "age": 19,
              "number": 39,
              "position": "Defender",
              "photo": "https://media-1.api-sports.io/football/players/362886.png"
          },
          {
              "id": 349001,
              "name": "Wesley",
              "age": 20,
              "number": 43,
              "position": "Defender",
              "photo": "https://media-1.api-sports.io/football/players/349001.png"
          },
          {
              "id": 362885,
              "name": "Darlan",
              "age": 19,
              "number": null,
              "position": "Defender",
              "photo": "https://media-1.api-sports.io/football/players/362885.png"
          },
          {
              "id": 266019,
              "name": "Diegão",
              "age": 20,
              "number": null,
              "position": "Defender",
              "photo": "https://media-1.api-sports.io/football/players/266019.png"
          },
          {
              "id": 403299,
              "name": "Daniel Sales",
              "age": 17,
              "number": null,
              "position": "Defender",
              "photo": "https://media-3.api-sports.io/football/players/403299.png"
          },
          {
              "id": 351487,
              "name": "Marcos Paulo",
              "age": 20,
              "number": null,
              "position": "Defender",
              "photo": "https://media-2.api-sports.io/football/players/351487.png"
          },
          {
              "id": 2560,
              "name": "E. Pulgar",
              "age": 29,
              "number": 5,
              "position": "Midfielder",
              "photo": "https://media-3.api-sports.io/football/players/2560.png"
          },
          {
              "id": 10168,
              "name": "Éverton Ribeiro",
              "age": 34,
              "number": 7,
              "position": "Midfielder",
              "photo": "https://media-3.api-sports.io/football/players/10168.png"
          },
          {
              "id": 22231,
              "name": "Thiago Maia",
              "age": 26,
              "number": 8,
              "position": "Midfielder",
              "photo": "https://media-2.api-sports.io/football/players/22231.png"
          },
          {
              "id": 2612,
              "name": "G. de Arrascaeta",
              "age": 29,
              "number": 14,
              "position": "Midfielder",
              "photo": "https://media-3.api-sports.io/football/players/2612.png"
          },
          {
              "id": 30408,
              "name": "Gerson",
              "age": 26,
              "number": 20,
              "position": "Midfielder",
              "photo": "https://media-1.api-sports.io/football/players/30408.png"
          },
          {
              "id": 10319,
              "name": "Allan",
              "age": 26,
              "number": 21,
              "position": "Midfielder",
              "photo": "https://media-2.api-sports.io/football/players/10319.png"
          },
          {
              "id": 352371,
              "name": "Victor Hugo",
              "age": 19,
              "number": 29,
              "position": "Midfielder",
              "photo": "https://media-3.api-sports.io/football/players/352371.png"
          },
          {
              "id": 322067,
              "name": "Igor Jesus",
              "age": 20,
              "number": 48,
              "position": "Midfielder",
              "photo": "https://media-2.api-sports.io/football/players/322067.png"
          },
          {
              "id": 372084,
              "name": "Jean Carlos",
              "age": 19,
              "number": null,
              "position": "Midfielder",
              "photo": "https://media-1.api-sports.io/football/players/372084.png"
          },
          {
              "id": 366780,
              "name": "Iago",
              "age": 18,
              "number": null,
              "position": "Midfielder",
              "photo": "https://media-2.api-sports.io/football/players/366780.png"
          },
          {
              "id": 407957,
              "name": "Daniel Rogério",
              "age": 18,
              "number": null,
              "position": "Midfielder",
              "photo": "https://media-1.api-sports.io/football/players/407957.png"
          },
          {
              "id": 405160,
              "name": "Wallace",
              "age": 18,
              "number": null,
              "position": "Midfielder",
              "photo": "https://media-2.api-sports.io/football/players/405160.png"
          },
          {
              "id": 358139,
              "name": "Pedrinho",
              "age": 20,
              "number": null,
              "position": "Midfielder",
              "photo": "https://media-3.api-sports.io/football/players/358139.png"
          },
          {
              "id": 405161,
              "name": "Lucas Furtado",
              "age": 18,
              "number": null,
              "position": "Midfielder",
              "photo": "https://media-3.api-sports.io/football/players/405161.png"
          },
          {
              "id": 408620,
              "name": "João Marcos",
              "age": 18,
              "number": null,
              "position": "Midfielder",
              "photo": "https://media-1.api-sports.io/football/players/408620.png"
          },
          {
              "id": 365642,
              "name": "Caio Vinicius",
              "age": 19,
              "number": null,
              "position": "Midfielder",
              "photo": "https://media-1.api-sports.io/football/players/365642.png"
          },
          {
              "id": 407958,
              "name": "Rayan",
              "age": 18,
              "number": null,
              "position": "Midfielder",
              "photo": "https://media-1.api-sports.io/football/players/407958.png"
          },
          {
              "id": 403300,
              "name": "Lorran",
              "age": 17,
              "number": null,
              "position": "Midfielder",
              "photo": "https://media-3.api-sports.io/football/players/403300.png"
          },
          {
              "id": 10321,
              "name": "Pedro",
              "age": 26,
              "number": 9,
              "position": "Attacker",
              "photo": "https://media-3.api-sports.io/football/players/10321.png"
          },
          {
              "id": 10174,
              "name": "Gabriel Barbosa",
              "age": 27,
              "number": 10,
              "position": "Attacker",
              "photo": "https://media-2.api-sports.io/football/players/10174.png"
          },
          {
              "id": 2414,
              "name": "Everton",
              "age": 27,
              "number": 11,
              "position": "Attacker",
              "photo": "https://media-3.api-sports.io/football/players/2414.png"
          },
          {
              "id": 22238,
              "name": "Luiz Araújo",
              "age": 27,
              "number": 22,
              "position": "Attacker",
              "photo": "https://media-3.api-sports.io/football/players/22238.png"
          },
          {
              "id": 10180,
              "name": "Bruno Henrique",
              "age": 33,
              "number": 27,
              "position": "Attacker",
              "photo": "https://media-3.api-sports.io/football/players/10180.png"
          },
          {
              "id": 325717,
              "name": "André Luiz",
              "age": 21,
              "number": 38,
              "position": "Attacker",
              "photo": "https://media-1.api-sports.io/football/players/325717.png"
          },
          {
              "id": 428990,
              "name": "Felipe Lima",
              "age": 17,
              "number": null,
              "position": "Attacker",
              "photo": "https://media-3.api-sports.io/football/players/428990.png"
          },
          {
              "id": 311158,
              "name": "Werton",
              "age": 20,
              "number": null,
              "position": "Attacker",
              "photo": "https://media-3.api-sports.io/football/players/311158.png"
          },
          {
              "id": 407959,
              "name": "Rodriguinho",
              "age": 19,
              "number": null,
              "position": "Attacker",
              "photo": "https://media-1.api-sports.io/football/players/407959.png"
          },
          {
              "id": 352374,
              "name": "Petterson",
              "age": 19,
              "number": null,
              "position": "Attacker",
              "photo": "https://media-1.api-sports.io/football/players/352374.png"
          }
      ]
  }
];

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
    position: "Forward",
}

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

  teamData.forEach(team => {
    team.players.forEach(player => {
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

      let playerDeleteButton = document.createElement('button');
      playerDeleteButton.setAttribute("id", "deleteButton");
      playerDeleteButton.classList.add('playerButton');
      playerDeleteButton.textContent = `Apagar Dados`;

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
  });
}

// Call the function to display the squad
showSquad();



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


// // FUNÇAO que modifica com o metodo PUT a um jogador
// function updatePlayer(playerID, newData) {
// fetch(`https://v3.football.api-sports.io/players/?id=${playerId}`, {
// method: 'PUT',
// headers: {
//   'Content-Type': 'application/json',
//   'x-rapidapi-host': 'v3.football.api-sports.io',
//   'x-rapidapi-key': '83303917d80ac4e0dad6d309eabe233e'
// },
// body: JSON.stringify(newData)
// })
// .then(response => response.json())
// .then(data => {  
//     let playerIndex = teamData.findIndex(player => player.id === playerID);
//     if (playerIndex !== -1) {
//       teamData[playerIndex] = {
//         ...teamData[playerIndex],
//         ...newData
//       };
//       console.log("O Jogador alterado foi:",teamData.find(player => player.id === PlayerID))   
//       return teamData;
//     } else {
//       console.log("ID inexistente");
//       return teamData;
//     }
// })
// }


// // FUNÇAO que apaga o jogador usando DELETE
// function deletePlayer(playerID) {
// fetch(`https://v3.football.api-sports.io/players/?id=${playerID}`, {
// method: 'DELETE',
// headers: {
//   'x-rapidapi-host': 'v3.football.api-sports.io',
//   'x-rapidapi-key': '83303917d80ac4e0dad6d309eabe233e'
// }
// })
// .then(response => response.json())
// .then(data => {
//     let playerIndex = teamData.findIndex(player => player.id === playerID);
//     if (playerIndex !== -1) {
//       teamData.splice(playerIndex, 1);
//       console.log("Jogador apagado com sucesso.");
//     } else {
//       console.log("ID inexistente.");
//     }
//     return teamData
//   }
// )}

// // Eventos de escuta que salva os dados de jogador novo
// document.getElementById('submitBtn').addEventListener('click', function () {
//   let playerName = document.getElementById('name').value;
//   let playerAge = document.getElementById('age').value;
//   let playerNumber = document.getElementById('number').value;
//   let playerPosition = document.getElementById('position').value;
//   let playerPhoto = document.getElementById('photo').value;
//   console.log(playerData);
// });
