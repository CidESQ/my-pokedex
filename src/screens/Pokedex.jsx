import { View, Text, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'

import {getPokemonsApi} from '../API/pokemon'

export default function Pokedex() {

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
      console.log(response);
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