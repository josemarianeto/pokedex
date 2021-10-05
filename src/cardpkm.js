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