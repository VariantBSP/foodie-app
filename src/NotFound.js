import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <p>
            <Link to='/' >Click Here</Link> to go back home
            </p>
        </div>
     );
}
 
export default NotFound;