import logo from './logo.svg'
import './App.css'
import HomeScreen from './components/screens/HomeScreen'
import { ResultSearchScreen } from './components/screens/ResultSearchScreen'
import { Route, Routes } from 'react-router-dom'
import { NavBar } from './components/shared/NavBar'
import { DetailProductScreen } from './components/screens/DetailProductScreen'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="items?search=hola" element={<ResultSearchScreen />} />
        <Route path="items/:id" element={<DetailProductScreen />} />
      </Routes>
    </div>
  )
}

export default App
