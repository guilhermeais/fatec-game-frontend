import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DashboardScore } from './pages/DashboardScore'
import { LayoutDefault } from './layout/LayoutDefault'
import { Home } from './pages/Home'
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route
          path="/"
          element={
            <LayoutDefault>
              <Home />
            </LayoutDefault>
          }
        ></Route>

        <Route
          path="/dashboard-score"
          element={
            <LayoutDefault>
              <DashboardScore />
            </LayoutDefault>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
