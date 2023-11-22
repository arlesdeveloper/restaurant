import React ,{useState,useRef}from 'react'
import { StyleSheet } from 'react-native'
import Toast from "react-native-easy-toast"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Loading from '../../components/Loading'

import AddRestaurantForm from '../../components/restaurants/AddRestaurantForm'


export default function AddRestaurant({ navigation }) {
    const [loading, setLoading] = useState(false)
    const toastRef=useRef()
  return (
    <KeyboardAwareScrollView>
      <AddRestaurantForm toastRef={toastRef} setLoading={setLoading}  navigation={navigation}/>
      <Loading isVisible={loading} text="Creando restaurante ..."/>
      <Toast ref={toastRef} position="center" opacity={0.9}/>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({})