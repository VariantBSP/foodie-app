import styled from "styled-components";
import { Link } from "react-router-dom";

const LightBox = styled.div`
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    text-align: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    color: #fff;
    overflow: auto;
        
    h1{
        font-size: 1.9em;
        margin-bottom: 15px;
    }

    img{
        margin: 20px auto;
        margin-top: 70px;
        width: 240px;
        height: 240px;
    }
    button{
        border: none;
        background-color: #fff;
        color: rgba(229,138,47, 0.9);
        font-size: 1.2em;
        padding: 10px;
        border-radius: 20px;
        margin: 20px 0px;
    }
    button:hover{
        background-color: rgba(229,138,47, 0.9);
        color: #fff;
        cursor: pointer;
    }

    button.lightbox--btn{
        position: absolute;
        right: 40px;
        font-weight: bold;
        font-size: 1.4em;
    }

    .spaceBtn{
        display: flex;
        justify-content: space-evenly;
    }
`

const Lightbox = ({show, setShow, post, handledelete}) => {
    const id = post?.id

    const handleClose = () => {
        setShow(false);
    }
    const ing = post?.steps.map(ingre => {
        return <li key={ingre}>{ingre}</li>
    })
    return ( 
        <>
        {show &&
        <LightBox>
            <button className="lightbox--btn" onClick={handleClose}>X</button>
            <img src={post.imageURL} alt="imagine" />
            <h1>{post.name}</h1>
            <p>{ing}</p>

            <div className="spaceBtn">
                <button onClick={() => handledelete(id)}>Delete</button>
                <Link to={`update/${id}`}><button>Update</button></Link>
            </div>
        </LightBox>
        }
        </>
     );
}
 
export default Lightbox;