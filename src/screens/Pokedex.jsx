import { View, Text, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'

import {getPokemonsApi, getPokemonDetailsByUrlAPI} from '../API/pokemon'

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  console.log("Pokemones -> ", pokemons);
  //! No se usa async en useEffect 
  useEffect(() => {
    //Crear una función anónima auto-ejecutable
    (async() => {
      await loadPokemons();
    })();
  }, []);
  

  const loadPokemons = async () => {
    try{
      const response = await getPokemonsApi();     
      const pokemonsArray = [];
      console.log(response.results);
      console.log('-----')
      console.log(response.results[0].url)

      // for await (const pokemon of response.results){
      //   const pokemonDetails = await getPokemonDetailsByUrlAPI(pokemon.url);
      //   pokemonsArray.push({
      //     id: pokemonDetails.id,
      //     name: pokemonDetails.name,
      //     type: pokemonDetails.types[0].name,
      //     order: pokemonDetails.order,
      //     image: pokemonDetails.sprites.other['official-artwork'].front_default
      //   });
      // }
      
      // setPokemons([...pokemons, ...pokemonsArray]);
    }catch(error){
      console.log(error);
    }
  }
  
  return (
    <View>
      <Text> Pokedex</Text>
    </View>
  );
}