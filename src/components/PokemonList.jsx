import { View, Text, FlatList, StyleSheet, ActivityIndicator} from 'react-native'
import React from 'react'

import PokemonCard from '../components/PokemonCard';

export default function PokemonList(props) {
    const {pokemons} = props;

  const loadMore = () => {
    
  };

  return (
    <FlatList 
        data={pokemons} //? Aqui se pone el array 
        numColumns={2} //? Numero de columnas 
        showsVerticalScrollIndicator={false} 
        keyExtractor={(pokemon) => String(pokemon.id)} //? Da una llave a cada pokemon basado en su id
        renderItem={({item}) => <PokemonCard pokemon={item}/>}
        contentContainerStyle={styles.flatListContentContainer}
        onEndReached={loadMore} //? Aqui es para cargar mas pokemons al bajar
        onEndReachedThreshold={0.1} //? que tanto antes cargamos pokemones
        ListFooterComponent={<ActivityIndicator //? Agrega una imagen de carga
          size="large"
          style={styles.spinner}
          color="#AEAEAE"
        />}
    />
  )
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 20
    },
    spinner: {
      marginTop: 20,
      marginBottom: 60,
      
    }
});