import { Box, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { PlayersCard } from '../components/PlayersCard'
import { playersScore } from '../services/playersScore'

import '../styles/dashboard-score.scss'

function getPlayersCard(players = []) {
  return players.map((player, i) => (
    <PlayersCard
      key={`${player.playerName} - ${i}`}
      player={{
        name: player.playerName,
        score: player.score,
      }}
    />
  ))
}

export function DashboardScore() {
  const [players, setPlayers] = useState([])

  async function getPlayersScore({ playerName } = {}) {
    if (playerName) {
      const players = await playersScore.getPlayersScore({ playerName })
      setPlayers(players)
    } else {
      const players = await playersScore.getPlayersScore({ playerName })
      setPlayers(players)
    }
  }

  useEffect(() => {
    getPlayersScore()
  }, [])
  return (
    <div>
      <Typography
        variant="h4"
        component="h1"
        sx={{ textAlign: 'center', mt: 5, mb: 5 }}
      >
        <b>Ranking dos Jogares</b>
      </Typography>
      <Box sx={{ width: '100%', margin: '1rem' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {getPlayersCard(players)}
        </Grid>
      </Box>
    </div>
  )
}
