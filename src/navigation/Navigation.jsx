import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AccountScrenn from '../screens/Account';
import FavouritesScreen from '../screens/Favourites';
import PokedexScreen from '../screens/Pokedex';

const Tab = createBottomTabNavigator();

export default function Navigation() { 
  return (
    <Tab.Navigator>
        <Tab.Screen name="Favourites" component={FavouritesScreen}/>
        <Tab.Screen name="Pokedex" component={PokedexScreen}/>
        <Tab.Screen name="Account" component={AccountScrenn}/>
    </Tab.Navigator>
  );
}