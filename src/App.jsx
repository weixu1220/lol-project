import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Champions from './pages/Champions';
import Items from './pages/Items';
import Item from './pages/Item';
import Champ from './pages/Champ';
import MyChamps from './pages/MyChamps';
import CompareChamps from './pages/CompareChamps';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [username, setUserName] = useState('');
  const [theme, setTheme] = useState('light');

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(event.target.value);
  };

  useEffect(() => {
    const savedUserName = localStorage.getItem('username');
    if (savedUserName) {
      setUserName(savedUserName);
    }
  }, [username]);

  function handleChange(e) {
    setUserName(e.target.value);
  }

  function saveUsernameToLocal() {
    localStorage.setItem('username', username);
    setUserName('');
  }

  function resetUsername() {
    localStorage.removeItem('username');
    setUserName('');
  }

  return (
    <div className={`w-full min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <div className={`bg-${theme === 'dark' ? 'black' : 'blue-950'} text-amber-400 flex flex-wrap justify-between p-1 ${theme === 'dark' ? 'dark:bg-black' : ''}`}>
        <div className='flex flex-col justify-center items-center mx-5'>
          {localStorage.getItem('username') && (
            <h2 className="w-auto text-amber-400 text-center p-1 m-1 mx-auto">
              Hello, {localStorage.getItem('username')}!
            </h2>
          )}
          {localStorage.getItem('username') && (
            <button
              className="w-auto border-2 rounded-md text-amber-400 text-center p-1 m-1 mx-auto  bg-blue-950"
              onClick={resetUsername}
            >
              Reset
            </button>
          )}
          {!localStorage.getItem('username') && (
            <div className='flex flex-col justify-center items-center'>
              <input
                className="border-2 rounded-md text-center bg-blue-950 text-amber-400 mx-auto my-1"
                type="text"
                value={username}
                onChange={handleChange}
                placeholder="username"
              />
              <button
                className="border-2 border-white text-center rounded-md text-amber-400 p-1 my-1 mx-auto bg-blue-950"
                onClick={saveUsernameToLocal}
              >
                Save
              </button>
            </div>
          )}
        </div>
        <div className="light:bg-blue-950 text-amber-400 my-auto text-center">
          <h1 className=" text-5xl p-1">
            Rift Archive
          </h1>
        </div>
        <div className="light:bg-blue-950 text-amber-400 p-1 my-auto text-right w-1/12 mx-5">
          {theme === 'dark' && (
            <label className="ml-auto">
              <input
                type="radio"
                value="light"
                checked={theme === 'light'}
                onChange={handleThemeChange}
              />
              Light
            </label>
          )}
          {theme === 'light' && (
            <label className="ml-auto">
              <input
                type="radio"
                value="dark"
                checked={theme === 'dark'}
                onChange={handleThemeChange}
              />
              Dark
            </label>
          )}
        </div>
      </div>
      <div className="w-full mx-auto text-blue-950 text-lg m-0 bg-white">
        <Nav />
      </div>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/champions" element={<Champions />} />
          <Route path="/champions/:champName" element={<Champ />} />
          <Route path="/items/" element={<Items />} />
          <Route path="/items/:itemID" element={<Item />} />
          <Route path="/mychamps" element={<MyChamps />} />
          <Route path="/comparechamps" element={<CompareChamps/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;