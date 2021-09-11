import Link from "next/link"
import { useState } from "react"
import Head from 'next/head'
import NavBar from "../../Components/NavBar/NavBar"





export const getServerSideProps =async (context) =>{
    const name=context.params.name
    const res =await fetch('https://pokeapi.co/api/v2/type/' + name)
    const data  =await res.json()
    return{
        props:{ninja : data,
        name:name}
    }
}
const Details =({ninja,name})=>{
    
    
    return(
        <div>
             <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
      </Head>
            <NavBar/>
            <br />
            <div className="typeheading">
  <h2> {name} Pokemons</h2>
</div>
     
{
    ninja.pokemon.map((pokemons)=>{
        return(
            <div key={pokemons.pokemon.name}>
               <div className="list-group">
               <Link href={"/pokemons/"+pokemons.pokemon.name}><a  className="list-group-item list-group-item-action">{pokemons.pokemon.name.toUpperCase()}</a></Link>
              
        
        
               </div>
            </div>
        )
    })
}

         

        
        </div>

    )



}

export default Details