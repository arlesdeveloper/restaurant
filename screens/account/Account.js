import React,{useState,useEffect,useCallback} from 'react'
//rnfs
import { StyleSheet, Text, View } from 'react-native'
import "firebase/compat/auth"

import UserGuest from "./UserGuest"
import UserLogued from "./UserLogued"
import Loading from "../../components/Loading"
import {getCurrentUser, isUserLogged} from "./../../utils/actions"
import { useFocusEffect } from '@react-navigation/native'



export default function Account() {
  const [login,setLogin]=useState(null)

  useFocusEffect(
    useCallback(
      () => {
        const user =getCurrentUser()  
        user?setLogin(true):setLogin(false)
      }, []
    )
  )
  
 if(login==null){
    return   <Loading isVisible={true} text="Cargando ..."/>
 }

  return login ? <UserLogued/> : <UserGuest/>
}

const styles = StyleSheet.create({})