import { useEffect,useState } from "react";
import axios from "axios";

import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"

import { AppBar, Toolbar, Typography, CardContent , Card, CardHeader, Avatar, CardMedia,Grid } from "@material-ui/core";
import "./main.css";
import { padding } from "@material-ui/system";
function Main() {
      
    const [pokemon,setPokemon] = useState([]);
    
    const [pkmFull,setPkmFull] = useState([]);

  
   
   
    
   
  const options = {
    method: 'POST',
    url: 'https://beta.pokeapi.co/graphql/v1beta',
    headers: {'Content-Type': 'application/json'},
    data: '{"query":"query samplePokeAPIquery {pokemon_v2_pokemon(where: {id: {_lt: 152}}) {id name pokemon_v2_pokemontypes(order_by: {pokemon_v2_type: {}}){pokemon_v2_type {id name }}}}","operationName":"samplePokeAPIquery"}'
  };
  
  const catchAll = async () => {
    await axios.request(options).then((response) =>  {
      setPokemon(response.data.data.pokemon_v2_pokemon);
    }).catch(function (error) {
      console.error(error);
    });
  } 

  useEffect(() => { 
    catchAll();
    console.log(pokemon)
  },[])
  console.log(pokemon)
  return (
    <Box className="mainC" maxWidth="xxl">
      <AppBar 
      position="static"  className="nes-container appbar" >
        <Toolbar size="large" sx={{mr:2}}  className="">
          <Typography variant="h4" color="White" nowrap component="div" 
          sx={{flexGrow:1,display:{ sm: 'block',textAlign:'center',alignItems:'center',justifyContent: 'center'}}
          }>
             Pokemon <i className="nes-pokeball iconSize"></i>
          </Typography>
        </Toolbar>

      </AppBar>
      <Box className="mainContent" maxWidth="xxl">
        <Box className="">
          <Typography variant="h3" nowrap component="div" className=""
          sx={{flexGrow:1,display:{sm:'block',textAlign:"center",marginTop:'2.5rem'}}}
          ><p className="nes-ballon from-left">Pokedex 1 Gen  <i className="nes-ash"></i></p></Typography>
        </Box>
        <Grid className="nes-container" container  xs={{padding:0}}>
        {pokemon.map((pkm) =>{
    return(
    <Grid item lg={4} md={6} sm={6} xs={12}>
     <Card className="nes-container cardpk" id={pkm.id} xs={{padding:0}}>
     <CardHeader sx={{fontSize:'22px'}} xs={{padding:0,fontSize:'12px'}}
     avatar={<Avatar sx={{width:90,height:90}} xs={{width:0,height:0,display:'none',justifyContent:'center',alignItems:'center'}} >
     
       <i xs={{display: 'none'}} className="nes-pokeball"/>
     </Avatar> 
     }
     title={pkm.name}
     subheader={pkm.pokemon_v2_pokemontypes.map((type) =>{return(  <span>{type.pokemon_v2_type.name + " "}</span>  )})} 
     />
     <CardMedia className=""
       component="img"
       height="100%"
       width="100%"
       image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pkm.id}.png`}
       alt={"pokemon : " + pkm.name }
     />
    
     </Card></Grid>
    )
  })}
        </Grid>
      </Box>
    </Box>
  );
}

export default Main;
