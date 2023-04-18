import Stars from "./Stars";

const Card = ({name, author, imgSrc, handleclick, id, stars}) => {

    return ( 
        <div className="card" key={name}>
            <img src= {imgSrc} alt="ncefk" onClick={handleclick} />
            <h3 onClick={handleclick} >{name}</h3>
            <div className="details">
                <p>By {author}</p>
                <Stars id={id} starRating={stars} />
            </div>
        </div>
     );
}
 
export default Card;