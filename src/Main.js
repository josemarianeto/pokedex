import { useEffect, useState } from "react";
import axios from "axios";
import Box from "@material-ui/core/Box"
import { AppBar, Toolbar,Skeleton,Button,Slide, Typography, CardContent, Card, CardHeader, Avatar, CardMedia, Grid } from "@material-ui/core";
import "./main.css";

function Main() {


  const [pkmFull] = useState([]);
  
  const  pkmFF = async () => {
    if(pkmFF.length > 1){
      return pkmFull()
    }
    else{
    for(let i =1;i <=151;i++){
      await axios.request({method: 'GET', url: `https://pokeapi.co/api/v2/pokemon/${i}`})
      .then(function (response) {
      pkmFull.push(response.data)
    })
    .catch(function (error) {
      console.error(error);
    
    })}}
  }; 
  


  useEffect(() => {
    pkmFF();
  },[])
  
  pkmFull.sort(function(a,b){return a.id - b.id});  
  
  
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
      <Box className="mainContent" maxWidth="xxl">
        <Box className="">
          <Typography variant="h3" nowrap component="div" className=""
            sx={{ flexGrow: 1, display: { sm: 'block', textAlign: "center", marginTop: '2.5rem' } }}
          ><p className="nes-ballon from-left">Pokedex 1 Gen  <i className="nes-ash"></i></p></Typography>
        </Box>
        <Grid className="gridBrabo" container xs={{ margin: 0  }}>
          {pkmFull ? (pkmFull.map((pkm) => {
            return (
              <Grid  id={pkm.id} item lg={3} md={4} sm={6} xs={12} >
                
                <Card elevation={24} className=" cardpk" id={pkm.id}  xs={{ padding: 0 }}>
                  <CardHeader id={pkm.id} sx={{ fontSize: '22px' }} xs={{ padding: 0, fontSize: '12px' }}
                    avatar={<Avatar className="chAvatar" sx={{ width: 90, height: 90 }} xs={{display: 'none'}}>
                      <img src={pkm.sprites.front_default} alt={`Pokemon Icon ${pkm.name}`}/>
                    </Avatar>}
                    title={<span className="spanT">{pkm.name}</span>}
                    subheader={pkm.types.map((type) => { return (<span className={`spanT types ${type.type.name}`} id={type.type.id}>{ type.type.name + " "}</span>) })}
                  />
                  <CardMedia className=""
                    component="img"
                    height="100%"
                    width="100%"
                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pkm.id}.png`}
                    
                    alt={"pokemon : " + pkm.name}
                  />

                  <CardContent>
                  <Box className="btnDiv"><Button variant="contained">Check</Button>
                 </Box>
                  
                  </CardContent>
                </Card>
              </Grid>)})):(<Grid   item lg={3} md={4} sm={6} xs={12} >
                <Skeleton variant="text" />
<Skeleton variant="circular"  />
<Skeleton variant="rectangular"/>
              </Grid>)}
        </Grid>
      </Box>
    </Box>
  );
}

export default Main;
