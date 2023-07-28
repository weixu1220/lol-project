import {Routes, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Champions from './pages/Champions'
import Items from './pages/Items'
import Item from './pages/Item'
import Champ from './pages/Champ'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="header-box">
        <img src="./images/logo.jpg" alt="Logo R"/>
        <h1>Rift Archive</h1>
      </div>
      
      <Nav />
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/champions' element = {<Champions />}/>
        <Route path='/champion/:champName' element = {<Champ />}/>
        <Route path='/items/' element = {<Items />}/>
        <Route path='/item/:itemID' element = {<Item />}/>
      </Routes>
    </div>
  )
}

export default App
