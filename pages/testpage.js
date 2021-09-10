import Link from 'next/link'
import Image from 'next/image'



import { useState } from 'react'

import fetch from 'node-fetch'
import { data } from 'browserslist'
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

const EPtypes = ({normaltype,electrictype}) => {


    return (
        
        <div >

            

            
            
            <div className='row' >
                <hr />
                <h2>Normal Pokemons</h2>
                
                <hr />


                
                    <div className='posters' >

                        {
                            normaltype.pokemon.map((name, index) => {
                                return (
                                    
                                    <div className="cardtest" key={name}>
                                         
                                        
                                        
                                         <Link href={`/pokemons/${name.pokemon.name}`}><a>   <div className="titt" >
                                        


                                            {
                                              
                                             
                                           <h4>{name.pokemon.name.toUpperCase()}</h4>
                                          
                                           
                                            
                                            }
                                            <img className="posters" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${name.pokemon.url.slice(34,-1)}.png`} />
                                            
                                            </div></a></Link>
                                        

                                    </div>
                                )
                            })
                        }

     
                    </div>)
            </div>

            <div className='row' >
                <hr />
                <h2>Electric Pokemons</h2>
                
                <hr />


                
                    <div className='posters' >

                        {
                            electrictype.pokemon.map((name, index) => {
                                return (
                                    
                                    <div key={name}>
                                         
                                        
                                        
                                         <Link href={`pokemons/${name.pokemon.name}`}><a>      <div className='titt' >
                                        


                                            {
                                              
                                             
                                           name.pokemon.name
                                          
                                           
                                            
                                            }
                                            <img className="posters" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${name.pokemon.url.slice(34,-1)}.png`} />

                                            </div> </a></Link> 
                                        

                                    </div>
                                )
                            })
                        }

     
                    </div>)
            </div>
            







            







            
        </div>
    )

}

export default EPtypes
