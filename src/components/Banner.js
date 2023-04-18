import arrow from "../images/211690_up_arrow_icon.png"

const Banner = () => {
    return ( 
        <div className="banner">
            <div className="banner--text">
            <p>Trending Now</p>
            <h1>Kevin's Famous Spicy Salsa with Tomatoes</h1>
            <p>By Kevin  Josh</p>
            <div className="banner--btn">
                <button>Watch Now</button>
                <button>Htr</button>
            </div>
            <div className="banner--nav">
                <button><img className="left" src={arrow} alt="lft" /></button>
                <button><img src={arrow} alt="rgt" /></button>
            </div>
            </div>
        </div>
    );
}
 
export default Banner;