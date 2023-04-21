import arrow from "../images/211690_up_arrow_icon.png"

const Banner = () => {
    return ( 
        <div className="banner">
            <div className="banner--text">
            <h1>Welcome Dear Home Cook</h1>
            <p>Thank you for joining us</p>
            
            {/* <div className="banner--nav">
                <button><img className="left" src={arrow} alt="lft" /></button>
                <button><img src={arrow} alt="rgt" /></button>
            </div> */}
            </div>
        </div>
    );
}
 
export default Banner;