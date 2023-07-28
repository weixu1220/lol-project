import {Routes, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Champions from './pages/Champions'
import Items from './pages/Items'
import Item from './pages/Item'
import Champ from './pages/Champ'
import MyChamps from './pages/MyChamps'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src="https://github.com/weixu1220/lol-project/blob/main/src/images/logo.jpg?raw=true"  style={{width: "100px"}} alt="Logo R"/>
        <h1>Rift Archive</h1>
        <Nav />
      </div>
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/champions' element = {<Champions />}/>
        <Route path='/champions/:champName' element = {<Champ />}/>
        <Route path='/items/' element = {<Items />}/>
        <Route path='/items/:itemID' element = {<Item />}/>
        <Route path='/mychamps' element={<MyChamps />} />
      </Routes>
    </div>
  )
}

export default App
