import { Stack, Typography } from '@mui/material'
import '../styles/dashboard-score.scss'
import {  EnhancedTable } from '../components/EnhancedTable'
export function DashboardScore() {
  return (
    <div>
      <Stack spacing={6}>
        <Typography
        variant="h2"
        sx={{
          textAlign: 'center',
          fontWeight: 500,
        }}
      >
        Ranking dos Jogadores
      </Typography>

      <EnhancedTable></EnhancedTable>
      </Stack>
    </div>
  )
}
