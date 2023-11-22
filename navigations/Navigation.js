
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Icon} from 'react-native-elements'
import RestaurantsStack from './RestaurantsStack'
import FavoritesStack from './FavoritesStack'
import TopRestaurantsStack from './TopRestaurantsStack'
import SearchStack from './SearchStack'
import AccountStack from './AccountStack'

const Tab=createBottomTabNavigator()
export default function Navigation() {
  const screenOptions=(route,color)=>{
    switch(route.name){

      case 'restaurants-nav':
        iconName="compass-outline"
        break
        
      case 'favorites-nav':
        iconName="heart-outline"
        break
      case 'topRestaurants-nav':
        iconName="star-outline"
        break
        
      case 'search-nav':
        iconName="magnify"
        break
        
      case 'account-nav':
        iconName="home-outline"
        break
    }
    return(<Icon 
    type="material-community"
    name={iconName}
    size={22}
    color={color}
    />)

  }
  return (
    <NavigationContainer>
        <Tab.Navigator
        initialRouteName='restaurants-nav'
       
        screenOptions={(
          { route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route,color),
          tabBarActiveTintColor: '#442484',
          tabBarInactiveTintColor: '#a17dc3',
        })}
        >
            <Tab.Screen 
            name="restaurants-nav" 
            component={RestaurantsStack} 
            options={{title:"Restaurantes",headerShown: false}}
            
            />

            <Tab.Screen 
            name="favorites-nav"
            component={FavoritesStack}
            options={{title:"Favoritos"}} />

             <Tab.Screen 
             name="topRestaurants-nav"
            component={TopRestaurantsStack}
            options={{title:"Top 10"}} />

             <Tab.Screen 
             name="search-nav"
             component={SearchStack}
             options={{title:"Buscar"}} />

             <Tab.Screen 
             name="account-nav"
            component={AccountStack}
            options={{title:"Cuenta"}} />

        </Tab.Navigator>
        
    </NavigationContainer>
  )
}