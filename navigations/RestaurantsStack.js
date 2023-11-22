import React from 'react'
import Restaurants from '../screens/restaurant/Restaurants'
import {createStackNavigator} from '@react-navigation/stack'
import AddRestaurant from '../screens/restaurant/AddRestaurant'
import Restaurant from '../screens/restaurant/Restaurant'
import AddReviewRestaurant from '../screens/restaurant/AddReviewRestaurant'

const Stack=createStackNavigator()
export default function RestaurantsStack() {
  return (
      <Stack.Navigator>
            <Stack.Screen
             name='restaurants'
             component={Restaurants}
             options={{title:"Restaurantes"}}
            
            />

            <Stack.Screen
             name='add-restaurant'
             component={AddRestaurant}
             options={{title:"Crear Restaurante"}}
            
            />

            <Stack.Screen
             name='restaurant'
             component={Restaurant}
   
            
            />

            <Stack.Screen
             name='add-review-restaurant'
             component={AddReviewRestaurant}
             options={{title:"Nuevo Comentario"}}
   
            
            />

            
      </Stack.Navigator>
    
  )
}