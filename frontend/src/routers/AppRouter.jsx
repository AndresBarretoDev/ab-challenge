import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { NavBar } from '../components/shared/NavBar'
import { HomeScreen } from '../components/screens/HomeScreen'
import { DetailProductScreen } from '../components/screens/DetailProductScreen'
import { ResultSearchScreen } from '../components/screens/ResultSearchScreen'

/**
 * para crear el router de la aplicación  se utilizó react-router-dom V6
 */

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="contentBox">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="items" element={<ResultSearchScreen />} />
          <Route path="items/:id" element={<DetailProductScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
