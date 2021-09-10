import Image from 'next/image'
import logo from '../../images/logo.png'
import { useState } from 'react'
const NavBar = ()=>{
    const [pokemon, putPokemon]= useState( []);
    
    const [query,setQuery]=useState('');


    return(
        <div>
            
           <nav className="navbar navbar-dark bg-dark">
  <a className="navbar-brand"><Image src={logo} alt="logo"/>   </a>
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
          
          


        });

    }


    }>Search</button>
  </form>
</nav>

{
    pokemon?.name &&  <div className="alert alert-success" role="alert">
    <h5>Search Result : {pokemon.name.toUpperCase()}</h5>
   </div> 
    
    
}











        </div>
    )
}

export default NavBar


export const getServerSideProps = async () => {
    const resnormal = await fetch(`https://pokeapi.co/api/v2/type/normal`)
    const datanormal = await resnormal.json()

    const reselectric = await fetch(`https://pokeapi.co/api/v2/type/electric`)
    const dataelectric = await reselectric.json()



    return {
        props: {
             normaltype : datanormal,
             electrictype : dataelectric
        }
    }
}