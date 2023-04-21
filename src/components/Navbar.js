import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link className='logo' to="/"><h1>FOODIE</h1></Link>

            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/create">Add Recipe</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;