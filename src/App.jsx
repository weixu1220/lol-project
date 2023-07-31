import { Routes, Route } from 'react-router-dom'
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
    <div className="w-full min-h-screen">
      <div className="sticky top-0">
        <div className="w-full ">
          <h1 className="w-full bg-blue-950 text-5xl font-sans text-center font-extrabold text-amber-400 m-0 p-5">Rift Archive</h1>
        </div >
        <div className="w-full mx-auto text-blue-950 text-lg m-0 bg-white">
          <Nav />
        </div>
      </div>
      <div className="w-full">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/champions' element={<Champions />} />
        <Route path='/champions/:champName' element={<Champ />} />
        <Route path='/items/' element={<Items />} />
        <Route path='/items/:itemID' element={<Item />} />
        <Route path='/mychamps' element={<MyChamps />} />
      </Routes>
      </div>
    </div>
  )
}

export default App
