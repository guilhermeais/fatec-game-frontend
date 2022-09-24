import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DashboardScore } from './pages/DashboardScore'
import { LayoutDefault } from './layout/LayoutDefault'

const pages = {
  'Ranking dos Jogadores': {
    path: '/',
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
