{pokemons.data.map((pkm) =>{
    (
     <Card className="nes-container cardpk" id={pkm.pokemon_v2_pokemon.id} sx={{maxWidth: 350}}>
     <CardHeader sx={{fontSize:'22px'}}
     avatar={<Avatar sx={{width:90,height:90}}>
     
       <i className="nes-pokeball"/>
     </Avatar> 
     }
     title={pkm.pokemon_v2_pokemon.name}
     subheader={pkm.pokemon_vs_pokemon.pokemon_v2_pokemontypes.name} 
     />
     <CardMedia className=""
       component="img"
       height="300"
       width="450"
       image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pkm.pokemon_v2_pokemon.id}.png`}
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
    )
  })}



  {pokemon.map((pkm) =>{ 
    (<li>{pkm.pokemon_v2_pokemon.name}</li>
  )})}




  <Typography variant="body" color="text.secondary">
  {pkm.stats.map((stats) => {return (<Box nowrap> <span className="statusName">{stats.stat.name}</span>
    <progress  class="nes-progress is-primary progressoCard" value={stats.base_stat} max="100"/> </Box>)  })}
   
  </Typography> 


{(pkmFull.pokemon_v2_pokemon.map((pkm) => {
  return (
    <Grid  id={pkm.id} item lg={3} md={4} sm={6} xs={12} >
      
      <Card elevation={24} className=" cardpk" id={pkm.id}  xs={{ padding: 0 }}>
        <CardHeader id={pkm.id} sx={{ fontSize: '22px' }} xs={{ padding: 0, fontSize: '12px' }}
          avatar={<Avatar className="chAvatar" sx={{ width: 90, height: 90 }} xs={{display: 'none'}}>
            <img src={""} alt={`Pokemon Icon ${pkm.name}`}/>
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