import { Container, Typography, } from '@mui/material'
import ResponsiveAppBar from '../components/ReposinveAppBar'
import packageInfo from '../../package.json'

export function LayoutDefault({ children, menuItems = [] }) {

  function renderVersion() {
    return (
      <Container maxWidth="xl">
        <Typography variant="body2" color="text.secondary" align="center">
          { `© ${new Date().getFullYear()}, ${packageInfo.author} ` }
          <br />
          Versão: <b>{packageInfo.version}</b>
        </Typography>
      </Container>
    )
  }
  return (
    <div>
      <ResponsiveAppBar menuItems={menuItems}/>
      <Container>
        <main>{children}</main>
      </Container>

      <footer>
        {renderVersion()}
      </footer>
    </div>
  )
}
