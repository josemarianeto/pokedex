import { useEffect, useState } from "react";
import axios from "axios";
import Box from "@material-ui/core/Box"
import { AppBar, Toolbar,Skeleton,Button,Slide,Modal, Typography, CardContent, Card, CardHeader, Avatar, CardMedia, Grid, getCardActionAreaUtilityClass } from "@material-ui/core";
import "./main.css";

function Main() {


  const [pkmFull,setPkmFull] = useState([]);
  const [pkmList,setPkmList] = useState([]);
  const [geracao,setGeracao] = useState(151);
  const [initialRender,setInitialRender] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const options = {
    method: 'POST',
    url: 'https://beta.pokeapi.co/graphql/v1beta',
    headers: {'Content-Type': 'application/json',
  'Acess-Control-Allow-Origin': '*'},
    data:'{"query":"query samplePokeAPIquery {pokemon_v2_pokemon(order_by: {id: asc}, limit: 151) {id name pokemon_v2_pokemontypes(order_by: {pokemon_v2_type: {}}) {pokemon_v2_type {id name}} height order pokemon_species_id base_experience pokemon_v2_pokemonstats {base_stat id      pokemon_v2_stat {        name      }    }  }}","operationName":"samplePokeAPIquery"}'  };
  
  const finalGetPokemons = async () =>{
    
await axios.request(options).then(function (response) {
  setPkmFull(response.data.data.pokemon_v2_pokemon);
})
.catch(function (error) {
  console.error(error);
});
  } 

   async function pkmFF() {
    if(pkmFull.length == geracao){
      return pkmFull;
    }else{
      for(let i = 1; i <= geracao; i++)
      await axios.request({method: 'GET', url: `https://pokeapi.co/api/v2/pokemon/${i}`})
      .then((response) => {
      pkmFull.push(response.data)
      
    }).then(setInitialRender(false))
    .catch(function (error) {
      console.error(error);
    
    })
    }
    
  }; 

const listpkm =  () => { 
   axios.request({method: 'GET', url: `https://pokeapi.co/api/v2/pokemon/`})
  .then((response) => {
  setPkmList(response.data.results.name)
  
}).then(setInitialRender(false))
.catch(function (error) {
  console.error(error);

})}

useEffect(()=>{ 
finalGetPokemons();
 },[]);

  
  
  //pkmFull.sort(function(a,b){return a.id - b.id});  
  
  console.log(pkmList); 
  console.log(pkmFull)
  return (
    <Box className="mainC" maxWidth="xxl">
      <AppBar
        position="static" className="nes-container appbar" >
        <Toolbar size="large" sx={{ mr: 2 }} className="">
          <Typography variant="h4" color="White" nowrap component="div"
            sx={{ flexGrow: 1, display: { sm: 'block', textAlign: 'center', alignItems: 'center', justifyContent: 'center' } }
            }>
            Pokemon <i className="nes-pokeball iconSize"></i>
          </Typography>
        </Toolbar>

      </AppBar>
      <Box nowrap className="mainContent" maxWidth="xxl">
        <Box nowrap className="">
          <Typography variant="h3" nowrap component="div" className=""
            sx={{ flexGrow: 1, display: { sm: 'block', textAlign: "center", marginTop: '2.5rem' } }}
          ><p className="nes-ballon from-left">Pokedex 1 Gen  <i className="nes-ash"></i></p></Typography>
        </Box>
        <Grid className="gridBrabo" container xs={{ margin: 0  }}>
        {(pkmFull.map((pkm) => {
  return (
    <Grid  id={pkm.id} item lg={3} md={4} sm={6} xs={12} >
      
      <Card elevation={24} className=" cardpk" id={pkm.id}  xs={{ padding: 0 }}>
        <CardHeader id={pkm.id} sx={{ fontSize: '22px' }} xs={{ padding: 0, fontSize: '12px' }}
          avatar={<Avatar className="chAvatar" sx={{ width: 90, height: 90 }} xs={{display: 'none'}}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkm.id}.png`}  alt={`Pokemon Icon ${pkm.name}`}/>
          </Avatar>}
          title={<span className="spanT">{pkm.name}</span>}
          subheader={pkm.pokemon_v2_pokemontypes.map((type) => { return (<span className={`spanT types ${type.pokemon_v2_type.name}`} id={type.pokemon_v2_type.id}>{ type.pokemon_v2_type.name + " "}</span>) })}
        />
        <CardMedia className="" 
          component="img"
          height="100%"
          width="100%"
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pkm.id}.png`}
          
          alt={"pokemon : " + pkm.name}
        />

        <CardContent>
        <Box nowrap className="btnDiv"><Button variant="contained">Check</Button>
       </Box>
        
        </CardContent>
      </Card>
    </Grid>)}))}
        </Grid>
      </Box>
      <Button onClick={handleOpen}>Open modal</Button>
    </Box>
  );
}

export default Main;
