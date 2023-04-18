import { useState } from "react";
import Card from "./Card";
import axios from "axios";
import { useEffect } from "react";
import Lightbox from "./Lightbox";

const Catalogue = () => {
    const [toggle, setToggle] = useState(1)
    const [recipes, setRecipes] = useState([])
    const [show, setShow] = useState(false)
    const [selected, setSelected] = useState();
    const [search, setSearch] = useState()

    const api = axios.create({
        baseURL: "http://localhost:8000/recipes"
    })

    const getRecipes = () => {
        api.get("/").then(res => {
            setRecipes(res.data)
        })
    }

    useEffect(() => {
        getRecipes()
    }, [])

    const handleToggle = (id) => {
        if(toggle === id){
            console.log("Ff")
            return setToggle(null)
        }
        setToggle(id)
    }

    const handleClick = (element) => {
        setShow(true)
        setSelected(element)
    }

    const handleDelete = (id) => {
        api.delete(`/${id}`).then(res => console.log(res))
        getRecipes()
    }

    const searched = recipes.filter(item => {
            return search?.toLowerCase() === "" ? item : item.name?.toLowerCase().includes(search)
    }).map(recipe => {
        return <Card 
                    key={recipe.id} 
                    handleclick={()=>handleClick(recipe)} 
                    id={recipe.id} 
                    handledelete={handleDelete} 
                    name={recipe.name} 
                    author= {recipe.author} 
                    imgSrc= {recipe.imageURL} 
                    />
    })
    
    const cards = recipes.map(recipe => {
        return <Card 
                    key={recipe.id} 
                    handleclick={()=>handleClick(recipe)} 
                    id={recipe.id} 
                    handledelete={handleDelete} 
                    name={recipe.name} 
                    author= {recipe.author} 
                    imgSrc= {recipe.imageURL} 
                    />
    })

    return ( 
        <div className="container">
            <aside>
                <h2>Filters</h2>
                <div className="categories">
                    <button id="1" onClick={() => handleToggle(1)}>Cuisine</button>
                    <ul className={toggle === 1 ? "" : 'show'}>
                        <li>rsj <input id="cb1" type="checkbox" /></li>
                        <li>rsj <input id="cb1" type="checkbox" /></li>
                        <li>rsj <input id="cb1" type="checkbox" /></li>
                    </ul>
                    <button id="2" onClick={() => handleToggle(2)}>dsdjs</button>
                    <ul className={toggle === 2 ? "" : 'show'}>
                        <li>rsj <input id="cb1" type="checkbox" /></li>
                        <li>rsj <input id="cb1" type="checkbox" /></li>
                        <li>rsj <input id="cb1" type="checkbox" /></li>
                    </ul>
                    <button id="3" onClick={() => handleToggle(3)}>dsdjs</button>
                    <ul className={toggle === 3 ? "" : 'show'}>
                        <li>rsj <input id="cb1" type="checkbox" /></li>
                        <li>rsj <input id="cb1" type="checkbox" /></li>
                        <li>rsj <input id="cb1" type="checkbox" /></li>
                    </ul>
                </div>
            </aside>
            <div className="catalogue">
            <header>
                <input type="text" name="search" onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
               <span>
                <label htmlFor="sortBy">sort by</label>
                <select name="sortBy" id="sort">
                    <option value="nearest">jdkd</option>
                    <option value="nearer">kuek</option>
                    <option value="near">djsoc</option>
                </select>
                </span>
            </header>
            <div className="recipes">
                {search ? searched : cards }
            </div>
            </div>
            <Lightbox setShow={setShow} show={show} post={selected}/>
        </div>
    );
}
 
export default Catalogue;