import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

import PokemonCard from '../components/PokemonCard';

export default function PokemonList(props) {
    const {pokemons} = props;

  return (
    <FlatList 
        data={pokemons} //? Aqui se pone el array 
        numColumns={2} //? Numero de columnas 
        showsVerticalScrollIndicator={false} 
        keyExtractor={(pokemon) => String(pokemon.id)} //? Da una llave a cada pokemon basado en su id
        renderItem={({item}) => <PokemonCard pokemon={item}/>}
        contentContainerStyle={styles.flatListContentContainer}
    />
  )
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 20
    }
});