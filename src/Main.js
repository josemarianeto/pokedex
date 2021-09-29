import { useEffect,useState } from "react";
import axios from "axios";
import api from "./api";
function Main() {
     
    const [pokemons,setPokemons] = useState([]);
    const [pokemonName,setPokemonName] = useState([]);
    const [pkmFull,setPkmFull] = useState([]);

  const getPokemons = async () =>{
    try{
    await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => setPokemons(response.data.results))
    .catch((err)=>{
      console.error(err);
    })}
    catch(err){ 

    }
    
  }
  
  const getPokemonsStats = async (pkmName) =>{
    try{
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${pkmName}`)
    .then((response) => setPokemons(response.data.results))
    .catch((err)=>{
      console.error(err);
    })}
    catch(err){ 

    }
    
  }


  const [listaNome,setListaNome] = useState();

  useEffect(() => {
    
        getPokemons(); 
        
        console.log(pokemons) 
     

  },[])


  console.log(pokemons.results)

  return (
    <div className="App">
      <ul>
          
      {pokemons.map((pokemons,index) => (<li key={index}> {pokemons.name}</li>))}
      </ul>
    </div>
  );
}

export default Main;
