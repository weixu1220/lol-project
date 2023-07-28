import {Link} from 'react-router-dom'
function Nav() {
    return (
        <div className="nav">
            <Link to="/">
                <div>Home</div>
            </Link>
            <Link to="/champions">
                <div>Champions</div>
            </Link>
            <Link to="/items">
                <div>Items</div>
            </Link>
            <Link to="/mychamps">
                <div>My Champions</div>
            </Link>
        </div>
    );
}

export default Nav;