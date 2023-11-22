import React from 'react'
import TopRestaurants from '../screens/TopRestaurants'
import {createStackNavigator} from '@react-navigation/stack'

const Stack=createStackNavigator()
export default function TopRestaurantsStack() {
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
            <Stack.Screen
             name='topRestaurants'
             component={TopRestaurants}
             options={{title:"Los mejores restaurantes"}}
            />

            
      </Stack.Navigator>
    
  )
}