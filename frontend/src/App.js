import HomeScreen from './components/screens/HomeScreen'
import { ResultSearchScreen } from './components/screens/ResultSearchScreen'
import { Route, Routes } from 'react-router-dom'
import { NavBar } from './components/shared/NavBar'
import { DetailProductScreen } from './components/screens/DetailProductScreen'
import { Breadcrumb } from './components/shared/Breadcrumb'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="contentBox">
        <Breadcrumb />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="items?search=hola" element={<ResultSearchScreen />} />
          <Route path="items/:id" element={<DetailProductScreen />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
