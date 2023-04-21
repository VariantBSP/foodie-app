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
                <a href="twitter.com"><img src={twitter} alt="" /></a>
                <a href="instagram.com"><img src={instagram} alt="" /></a>
                <a href="whatsapp.com"><img src={whatsapp} alt="" /></a>
            </div>
        </footer>
    );
}
 
export default Footer;