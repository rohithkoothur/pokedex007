import Image from 'next/image'
import logo from '../../images/logo.png'
import Link from 'next/link'
import { useState } from 'react'
import Router from 'next/router'
import { motion } from 'framer-motion'
const NavBar = ()=>{
    const [pokemon, putPokemon]= useState( []);
    const [darkMode, setDarkMode] = useState(false);
    
    const [query,setQuery]=useState('');


    return(
        <motion.div animate={{ y:-10}} initial={{y:-250}}>
            
           <nav className="navbar navbar-dark bg-dark">
  <Link href="/"><a className="navbar-brand"><Image src={logo} alt="logo"/>   </a></Link>
  
  
  <form className="form-inline">
  
    <input className="form-control mr-sm-2" value={query} onChange={(e)=>{
      
      setQuery(e.currentTarget.value)
    }} type="search" placeholder="Search Pokemon Here" aria-label="Search" />
  <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={(e)=>{
        e.preventDefault();
        console.log("searched for "+query)
        fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
        .then((resp,Response)=>resp.json())
        .then(data=>{

          putPokemon(data);
          console.log(data);
          Router.push(`/pokemons/${query}`)
          
          


        });

    }


    }>Search</button>

<div className="darkornot">
  {darkMode? <span>Light</span> :<span>Dark</span>}
  <label className="switch">
  <input type="checkbox"  onChange={() => setDarkMode(!darkMode)}/>
  <span className="slider round"></span>
</label></div>
   



  </form>
  
  
</nav>


{
    pokemon?.name &&  <div className="alert alert-success" role="alert">
    <h5>Search Result : {pokemon.name.toUpperCase()}</h5>
   </div> 
    
    
}











        </motion.div>
       
    
       )
}

export default NavBar


