import {Routes, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Champions from './pages/Champions'
import Items from './pages/Items'
import './App.css'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/champions' element = {<Champions />}/>
        <Route path='/champion/:champName' element = {<Champ />}/>
        <Route path='/items/:itemID' element = {<Items />}/>
      </Routes>
    </div>
  )
}

export default App
