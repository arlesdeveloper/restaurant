import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Overlay } from 'react-native-elements'
import { ActivityIndicator } from "react-native";

export default function Loading({isVisible,text}) {
  return (
    <Overlay
    isVisible={isVisible}
    windowBackgroundColor="rgba(0,0,0,0.5)"
    overlayBackgroundColor="transparent"
    overlayStyle={styles.overlay}

    >
        <View style={styles.view}>
        <ActivityIndicator />
         
            {
                text && <Text style={styles.text}>{text}</Text>
            }
        </View>
    </Overlay>
   
  )
}

const styles = StyleSheet.create({

    overlay:{
        height: 100,
        width:200,
        backgroundColor: "#fff",
        boderColor:"#82A9B0",
        borderWidth:2,
        borderRadius:10

    },
    view:{
        flex:1,
        alignItems:"center",
        justifyContent: "center"
    },
    text:{
        color:"#FF0000",
        marginTop:10
    }


})