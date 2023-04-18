import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [formData, setFormData] = useState(
        {
            name:"",
            imageURL:"",
            steps:"",
            author:"",
        })

    const history = useHistory()

        const handleChange = (e) => {
            const {name, value} = e.target;
            setFormData(prevFormData =>{
                return {
                    ...prevFormData,
                    [name]: value
                }
            })
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            let tmp = formData.steps.split("\n")
            console.log(tmp)
            axios.post("http://localhost:8000/recipes", {...formData, steps:tmp})
            .then(res => {
                console.log(res)
                history.push('/')
            })
            .catch(err => console.log(err))
            
            
        }

    return (
        <div className="formCard">
        <h1>Create Your Recipe</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} /> 
            <label htmlFor="imageURL">Image Src</label>
            <input type="text" name="imageURL" value={formData.imageURL} onChange={handleChange}/>
            <label htmlFor="steps">Steps</label>
            <textarea name="steps" id="message" value={formData.steps} cols="30" rows="4" onChange={handleChange}></textarea>
            <label htmlFor="author">Author Name</label>
            <input type="text" name="author" value={formData.author} onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
        </form>
        </div>
    );
}
 
export default Create;