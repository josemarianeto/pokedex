import { useEffect, useState } from "react";
import axios from "axios";
import Box from "@material-ui/core/Box"
import { AppBar, Toolbar, Skeleton,TextareaAutosize,Container,Button, Slide, Modal, Typography, CardContent, Paper, Card, CardHeader, Avatar, CardMedia, Grid, getCardActionAreaUtilityClass } from "@material-ui/core";
import "./main.css";

function Main() {
 

  const [pkmFull, setPkmFull] = useState([]);
 
  const [pkmModal, setPkmModal] = useState([])
  const [open, setOpen] = useState(false);
  async function handleOpen(id) {
    await setPkmModal(pkmFull[id - 1]);
    console.log(pkmModal);
    setOpen(true);
  }
  const handleClose = () => setOpen(false);

  const options = {
    method: 'POST',
    url: 'https://beta.pokeapi.co/graphql/v1beta',
    headers: {
      'Content-Type': 'application/json',
      'Acess-Control-Allow-Origin': '*'
    },
    data: '{"query":"query samplePokeAPIquery {pokemon_v2_pokemon(order_by: {id: asc}, limit: 900) {id name pokemon_v2_pokemontypes(order_by: {pokemon_v2_type: {}}) {pokemon_v2_type {id name}} height order pokemon_species_id base_experience pokemon_v2_pokemonstats {base_stat id      pokemon_v2_stat {        name      }    }  }}","operationName":"samplePokeAPIquery"}'
  };

  const finalGetPokemons = async () => {

    await axios.request(options).then(function (response) {
      setPkmFull(response.data.data.pokemon_v2_pokemon);
    })
      .catch(function (error) {
        console.error(error);
      });
  }

 

 
  useEffect(() => {
    finalGetPokemons();
  }, []);


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    justifyContent: 'space-between',
    maxWidth:'300px',
    p: 0,
    overflow: ''
  };


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
        <Grid className="" container xs={{ margin: 0, justifyContent: 'space-between', padding: 10 }}>
          {(pkmFull.map((pkm) => {
            return (
              <Grid className="gridBrabo" id={pkm.id} item lg={3} md={6} sm={12} xs={12} >

                <Card elevation={24} className=" cardpk" id={pkm.id} lg={{ padding: 0 }}>
                  <CardHeader id={pkm.id} sx={{ fontSize: '22px' }} xs={{ padding: 0, fontSize: '12px' }}
                    avatar={<Avatar className="chAvatar" sx={{ width: 90, height: 90 }} xs={{ display: 'none' }}>
                      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkm.id}.png`} alt={`Pokemon Icon ${pkm.name}`} />
                    </Avatar>}
                    title={<span className="spanT">{pkm.name}</span>}
                    subheader={pkm.pokemon_v2_pokemontypes.map((type) => { return (<span className={` types ${type.pokemon_v2_type.name} spanT`} id={type.pokemon_v2_type.id}>{type.pokemon_v2_type.name + " "}</span>) })}
                  />
                  <CardMedia className=""
                    component="img"
                    height="100%"
                    width="100%"
                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pkm.id}.png`}

                    alt={"pokemon : " + pkm.name}
                  />

                  <CardContent>
                    <Box nowrap className="btnDiv" onClick={() => handleOpen(pkm.id)}><Button variant="contained">Check</Button>
                    </Box>

                  </CardContent>
                </Card>
              </Grid>)
          }))}
        </Grid>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid  elevation={24} item lg={6} sx={6,style} md={6} xs={12}>
        <Paper>
        <Card  >
          <Typography className={`modalTitle ` }   sx={{textAlign: 'center',textTransform: 'Capitalize'}} variant="h3" id="modalName">{pkmModal.name} </Typography>
           
         <CardContent className="modalContent" sx={{justifyItems:'center'}}>
            <Box nowrap  sx={{display:'inline-flex',flexDirection:'Column',padding:'0.2rem',justifyItems:'center',alignItems:'center'}}>
            <span className="modalSpan"></span>
            <CardMedia  className={`imgSquare border`} 
                    component="img"
                    height="50%"
                    width="50%"
                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pkmModal.id}.png`}
                    alt={"pokemon : " + pkmModal.name}
                  />
              <Container nowrap sx={{display:'flex',flexDirection:'row'}}>
              <CardMedia 
                    component="img"
                    height="50%"
                    width="50%"
                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmModal.id}.png`}
                    alt={"pokemon shiny model : " + pkmModal.name}
                  />
                 
              <CardMedia className=""
                    component="img"
                    height="100%"
                    width="100%"
                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pkmModal.id}.png`}
                    alt={"pokemon shiny model : " + pkmModal.name}
                  />
                 

                    
                  
              </Container>
              <Container>

              </Container>
            </Box>
            </CardContent>
          </Card>
          </Paper>
          </Grid>
      </Modal>
    </Box>
  );
}

export default Main;
