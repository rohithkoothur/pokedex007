import Image from 'next/image'

import NavBar from '../../Components/NavBar/NavBar'
import Head from 'next/head';


const PokemonPage = ({name,pokemon,error})=>{

 

    return error ?

    <div><h1>Pokemon Not Found</h1>
    
    
    </div>:
    
    
    <div>
        <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
      </Head>
    <NavBar/>  
    <br />
    
    
    <div className="detailscard">
        <div className="detailspokemonname">
          <h3 className="detailspokemonname">{pokemon.name.toUpperCase()}</h3>
          </div>
        
        {
          pokemon.types.map((type)=>{
            return (
              <div className="detailstype" key="type.type.name">
              <span className="badge badge-success detailstype">{type.type.name.toUpperCase()}</span>
              </div>
            )
          })
        }

        
        <div className="detailsimage">
        <img className="detailsimage" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} />
        </div>

        <div className="detailsabout">
        <button  className="btn btn-success">About</button>
<ul className="list-group">
        <li className="list-group-item list-group-item-success">Height : {pokemon.height}0cm</li>
        <li className="list-group-item list-group-item-success">Weight : {pokemon.weight}Kg</li>
        <li className="list-group-item list-group-item-success">Abilities : {
          pokemon.abilities.map((ability)=>{
            return(
              <div key={ability.ability.name}><ul><li>{ability.ability.name.toUpperCase() }</li></ul></div>
            )
          })
        }</li>
        
        </ul>

        
  
         
       

        </div>
      

         
        
    
    </div>


        

    </div> 

};


PokemonPage.getInitialProps=({query})=>{

  
     return fetch(`https://pokeapi.co/api/v2/pokemon/${query?.pokemon}`)
                .then((resp)=>resp.json())
                .then(data=>{
                  console.log(query.pokemon)

                  return {name: query.pokemon,pokemon: data}

                }).catch((err)=>{

                  return{error : err}
                })




           
}

export default PokemonPage;