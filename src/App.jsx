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
    <div className="">
      <div className="">
        <div className="">
          <img src="https://github.com/weixu1220/lol-project/blob/main/src/images/logo.jpg?raw=true"  style={{width: "100px"}} alt="Logo R"/>
          <h1 className="text-3xl font-bold text-red-500 underline text-center">Rift Archive</h1>
        </div>
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
