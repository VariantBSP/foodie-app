import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import whatsapp from "../images/whatsapp.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer>
            <Link className='logo' to="/"><h1>FOODIE</h1></Link>

            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/create">Add Recipe</Link>
            </div>

            <div className="socials">
                <span>Follow Us</span>
                <Link to="/"><img src={twitter} alt="" /></Link>
                <Link to="/"><img src={instagram} alt="" /></Link>
                <Link to="/"><img src={whatsapp} alt="" /></Link>
            </div>
        </footer>
    );
}
 
export default Footer;