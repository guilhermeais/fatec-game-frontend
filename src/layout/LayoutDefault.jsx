import { Container, } from '@mui/material'
import ResponsiveAppBar from '../components/ReposinveAppBar'

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
