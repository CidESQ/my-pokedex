import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from "@expo/vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome5";
import {Image} from 'react-native';

import AccountScrenn from '../screens/Account';
import FavouritesScreen from '../screens/Favourites';
import PokedexScreen from '../screens/Pokedex';
import pokeball from '../assets/pokeball.png';

const Tab = createBottomTabNavigator();

export default function Navigation() { 
  return (
    <Tab.Navigator>

        <Tab.Screen 
          name="Favourites" 
          component={FavouritesScreen}
          options={{
            tabBarLabel: "Favoritos",
            tabBarIcon: ({color, size}) => (
              <Icon name='heart' color={color} size={size} />
            )
          }}
        />

        <Tab.Screen 
          name="Pokedex"
          component={PokedexScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: () => renderPokeball()
          }}
        />

        <Tab.Screen 
          name="Account"
          component={AccountScrenn}
          options={{
            tabBarLabel: "Cuenta",
            tabBarIcon: ({color, size}) => (
              <Icon name='circle' color={color} size={size} />
            )
          }}
        />
    </Tab.Navigator>
  );
}

function renderPokeball(){
  return(
    <Image
      source={require('../assets/pokeball.png')}
      style={{width: 70, height: 70, top: -15}}
    />
  )
}