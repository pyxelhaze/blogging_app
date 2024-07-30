import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar">
            <h1>The Blogging Point</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}

export default Header;