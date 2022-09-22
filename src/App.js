import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DashboardScore } from './pages/DashboardScore'
import { LayoutDefault } from './layout/LayoutDefault'
import { Home } from './pages/Home'

const pages = {
  'Home': {
    path: '/',
    isLogo: true,
    icon: null,
    component: Home,
  },
  'Ranking dos Jogadores': {
    path: '/dashboard-score',
    icon: null,
    component: DashboardScore,
  },
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {
          Object.entries(pages).map(([_, pageConfig], index) => (
            <Route
              key={index}
              path={pageConfig.path}
              element={
                <LayoutDefault menuItems={pages}>
                  {pageConfig.component()}
                </LayoutDefault>
              }
            />
          ))
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App
