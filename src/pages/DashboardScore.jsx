import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { PlayersCard } from '../components/PlayersCard'
import SearchComponent from '../components/SearchComponent'
import { playersScore } from '../services/playersScore'

function getPlayersCard(players = []) {
  if (players.length > 0) {
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

  return <Box width={'100%'} margin={'5rem'} textAlign={'center'}>
    <Typography>
     <b>Nenhum jogador encontrado :(</b>
  </Typography>
  </Box>
}

export function DashboardScore() {
  const [players, setPlayers] = useState([])
  const [playerName, setPlayerName] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function getPlayersScore({ playerName } = {}) {
    try {
      setIsLoading(true)
      const players = await playersScore.getPlayersScore({ playerName })
      setPlayers(players)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getPlayersScore()
  }, [])
  return (
    <div>
      <Typography variant="h4" sx={{ textAlign: 'center', mt: 5, mb: 5 }}>
        <b>Ranking dos Jogares</b>
      </Typography>
      <Box sx={{ width: '100%', margin: '1rem' }}>
        <Box display={'flex'} justifyContent={'center'} sx={{ margin: '1rem' }}>
          <SearchComponent
            onInput={evt => setPlayerName(evt.target.value)}
            onSearch={() => getPlayersScore({ playerName })}
            onSubmit={evt => {
              evt.preventDefault()
              getPlayersScore({ playerName })
            }}
            placeholder="Nome do Jogador"
          ></SearchComponent>
        </Box>
        {!isLoading ? (
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {getPlayersCard(players)}
          </Grid>
        ) : (
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            sx={{ margin: '5rem' }}
          >
            <CircularProgress></CircularProgress>
            <Typography>
              <b>Carregando...</b>
            </Typography>
          </Box>
        )}
      </Box>
    </div>
  )
}
