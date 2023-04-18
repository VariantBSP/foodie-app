import axios from "axios";
import { useState } from "react";

const Stars = ({id, starRating}) => {
    const [rating, setRating] = useState(starRating)
    const [hover, setHover] = useState(0)

    const handleClick = (id, index) => {
        setRating(index)
        axios.patch(`http://localhost:8000/recipes/${id}`, {star: rating})
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="stars">
            {[1,2,3,4,5].map((star, index) => {
                index += 1;
                return (
                <button
                    type="button"
                    key={index}
                    className={index <= (hover || rating) ? "on" : "off"}
                    onClick={() => handleClick(id, index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                >
                    <span className="star">&#9733;</span>
                </button>
                );
            })}
        </div>
    );
}
 
export default Stars;