import { useEffect,useState } from "react";
import axios from "axios";
function Main() {
     
    const [pokemons,setPokemons] = useState([]);
    
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
    await axios.get("https://pokeapi.co/api/v2/pokemon/" + pkmName)
    .then((response) => pkmFull.push(response.data))
    .catch((err)=>{
      console.error(err);
    })}
    catch(err){ 

    }
    
  }


  useEffect(() => {
    getPokemons();
    
     pokemons.map(function(nome, i){
       getPokemons(nome.name)
     })
    
  },[])
  
  console.log(pokemons)
  console.log(pkmFull)
  return (
    <div className="App">
      <ul>
          
      {pkmFull.map((pkm) =>(<li>{pkm.name}</li>))}
      </ul>
    </div>
  );
}

export default Main;
