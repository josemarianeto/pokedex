import { useEffect,useState } from "react";
import axios from "axios";

import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"

import { AppBar, Toolbar, Typography, CardContent , Card, CardHeader, Avatar, CardMedia } from "@material-ui/core";
import "./main.css";
function Main() {
      
    const [pokemons,setPokemons] = useState([]);
    
    const [pkmFull,setPkmFull] = useState([]);

  
   
   
    
   
  const options = {
    method: 'POST',
    url: 'https://beta.pokeapi.co/graphql/v1beta',
    headers: {'Content-Type': 'application/json'},
    data: '{"query":"query samplePokeAPIquery {pokemon_v2_pokemon(where: {id: {_lt: 152}}) {id name pokemon_v2_pokemontypes(order_by: {pokemon_v2_type: {}}){pokemon_v2_type {id name }}}}","operationName":"samplePokeAPIquery"}'
  };
  


  useEffect(() => {
    axios.request(options).then(function (response) {
      setPokemons(response.data);
    }).catch(function (error) {
      console.error(error);
    });
    
  },[])
 
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
        <Box className="nes-container">
          <Card className="nes-container cardpk" sx={{maxWidth: 350}}>
            <CardHeader sx={{fontSize:'22px'}}
            avatar={<Avatar sx={{width:90,height:90}}>
            
              <i className="nes-pokeball"/>
            </Avatar> 
            }
            title="Pokemon"
            subheader="Types"
            />
            <CardMedia className=""
              component="img"
              height="300"
              width="450"
              image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
              alt="Bulbasaur"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

export default Main;
