import { Container, } from '@mui/material'
import ResponsiveAppBar from '../components/ReposinveAppBar'
import '../styles/dashboard-score.scss'

export function LayoutDefault({ children, menuItems = [] }) {
  return (
    <div>
      <ResponsiveAppBar menuItems={menuItems}/>
      <Container>
        <main>{children}</main>
      </Container>
    </div>
  )
}
