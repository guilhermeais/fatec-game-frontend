import { Container, } from '@mui/material'
import ResponsiveAppBar from '../components/ReposinveAppBar'
import '../styles/dashboard-score.scss'

export function LayoutDefault({ children }) {
  return (
    <div>
      <ResponsiveAppBar />
      <Container maxWidth="sm">
        <main>{children}</main>
      </Container>
    </div>
  )
}
