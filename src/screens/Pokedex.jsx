import { View , Text} from 'react-native'
import React, { useState, useEffect } from 'react'

import {getPokemonsApi, getPokemonDetailsByUrlAPI} from '../API/pokemon'
import PokemonList from '../components/PokemonList';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  // console.log("Pokemones -> ", pokemons);
  //! No se usa async en useEffect 
  useEffect(() => {
    //? Crear una función anónima auto-ejecutable
    (async() => {
      await loadPokemons();
    })();
  }, []);
  
  const loadPokemons = async () => {
    try{
      const response = await getPokemonsApi(nextUrl);     
      // console.log(response);
      setNextUrl(response.next);
      const pokemonsArray = [];
      for await (const pokemon of response.results){
        const pokemonDetails = await getPokemonDetailsByUrlAPI(pokemon.url);
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default
        });
      }
      
      setPokemons([...pokemons, ...pokemonsArray]);
    }catch(error){
      console.log(error);
    }
  }
  
  return (
    <View>
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemons}/>
    </View>
  );
}