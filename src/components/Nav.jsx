import { Link } from "react-router-dom";

function Nav() {
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
      <Link className="p-5" to="/comparechamps">
        <h1 className="hover:font-serif">Compare Champions</h1>
      </Link>
    </div>
  );
}

export default Nav;
