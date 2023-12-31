import { StyleSheet, View, Text, Image, TouchableWithoutFeedback} from 'react-native'
import React from 'react'
import {capitalize} from 'lodash'

import getColorByPokemonType from '../utils/getColorByType';

export default function PokemonCard(props) {
    const {pokemon} = props;
    const pokemonColor = getColorByPokemonType(pokemon.type);
    
    const bgStyles = {backgroundColor: pokemonColor, ...styles.bgStyles}
    const goToPokemon = () => {
        console.log(`Vamos al pokemon: ${pokemon.name}`);
    }
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
        <View style={styles.card}>
            <View style={styles.spacing}>
                <View style={bgStyles}>
                    <Text style={styles.number}>#{`${pokemon.order}`.padStart(3,0)}</Text>
                    <Text style={styles.name}> {capitalize(pokemon.name)} </Text>
                    <Image source={{uri: pokemon.image}} style={styles.image}/>
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 130,
        shadowColor: '#171717',
        shadowOffset: {width: 0, height:5},
        shadowOpacity: 0.5,
        shadowRadius: 3
    },
    spacing: {
        flex:1,
        padding: 5
    },
    bgStyles:{
        flex: 1,
        borderRadius: 15,
        padding: 10
    },
    image:{
        position: 'absolute',
        right: 0,
        width: 90,
        height: 90,
        bottom: 5
    },
    name:{
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15,
        padding: 10
    },
    number:{
        position: 'absolute',
        right: 10,
        top: 10,
        color: '#FFF',
    }
});