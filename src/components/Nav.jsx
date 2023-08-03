import { Link } from 'react-router-dom';
import { useState } from 'react';

function Nav() {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
    // Apply the selected theme to the body or your root component
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(event.target.value);
  };

  return (
    <div className="flex flex-row flex-wrap justify-center font-bold p-1">
      <Link className="p-5" to="/">
        <h1 className="hover:font-serif">Home</h1>
      </Link>
      <Link className="p-5" to="/champions">
        <h1 className="hover:font-serif">Champions</h1>
      </Link>
      <Link className="p-5" to="/items">
        <h1 className="hover:font-serif">Items</h1>
      </Link>
      <Link className="p-5" to="/mychamps">
        <h1 className="hover:font-serif">My Champions</h1>
      </Link>
      <div className="p-5">
        <label>
          <input
            type="radio"
            value="light"
            checked={theme === 'light'}
            onChange={handleThemeChange}
          />
          Light
        </label>
      </div>
      <div className="p-5">
        <label>
          <input
            type="radio"
            value="dark"
            checked={theme === 'dark'}
            onChange={handleThemeChange}
          />
          Dark
        </label>
      </div>
    </div>
  );
}

export default Nav;