const baseUrl = process.env.REACT_APP_API_SERVICE || 'localhost:3001';
export const playersScore = {
  async getPlayersScore({playerName} = {}) {
    if (playerName) {
      const players =  (await fetch(`${baseUrl}/players/${playerName}/score`, {method: 'GET'})).json()
      return players
    } else {
      const players = (await fetch(`${baseUrl}/players/score`, {method: 'GET'})).json()
  
      return players
    }
  }
}