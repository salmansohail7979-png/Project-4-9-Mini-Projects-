const team = {
  _players: [
    {
      firstName: 'Babar',
      lastName: 'Azam',
      age: 29
    },
    {
      firstName: 'Shaheen',
      lastName: 'Afridi',
      age: 25
    },
    {
      firstName: 'Mohammad',
      lastName: 'Rizwan',
      age: 32
    }
  ],

  _games: [
    {
      opponent: 'Sharks',
      teamPoints: 45,
      opponentPoints: 42
    },
    {
      opponent: 'Eagles',
      teamPoints: 38,
      opponentPoints: 35
    },
    {
      opponent: 'Bears',
      teamPoints: 50,
      opponentPoints: 47
    }
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };

    this._players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };

    this._games.push(game);
  }
};

// Add a new player
team.addPlayer('Bugs', 'Bunny', 76);

// Check players
console.log(team.players);

// Add a new game
team.addGame('Titans', 100, 98);

// Check games
console.log(team.games);