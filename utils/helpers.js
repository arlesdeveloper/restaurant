import * as ImagePicker from "expo-image-picker"
import {Alert, Linking } from "react-native"
import * as Location from "expo-location"
import * as Camera from 'expo-camera';
import { getCallingCode } from "react-native-country-picker-modal";

export function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email)
}

export const loadImageFromGallery=async(array)=>{

    const response={status:false,image:null}
    const resultPermissions= await Camera.requestCameraPermissionsAsync()
    if(resultPermissions.status==="denied"){
        Alert.alert("Debes de darle permiso para acceder a las imágenes del teléfono.")
        return response
    }
    const result=await ImagePicker.launchImageLibraryAsync({
        allowsEditing:true,
        aspect:array
    })
    if(result.cancelled){
        return response
    }
    response.status=true
    response.image=result.uri
    return response


}


export  const fileToBlob=async(path)=>{
    const file=await fetch(path)
    const blob =await file.blob()
    return blob

}
export const getCurrentLocation=async()=>{
    const getLocation=(position)=>{
        const location={
            latitude:position.coords.latitude,
            longitude:position.coords.longitude,
            latitudeDelta:0.001,
            longitudeDelta:0.001
        }
        return location

    }
    const response={status:false,location:null}
    const resultPermissions=await Location.requestForegroundPermissionsAsync()
   
    if(resultPermissions.status=="denied"){

        Alert.alert("Debes dar permisos para la localización.")
        return response
    }

    const position=  await  Promise.race([
        new Promise((resolver) => {
            setTimeout(resolver, 3000, null);
          }),
          Location.getCurrentPositionAsync({
            maximumAge: 1000 * 10, 
          }),

    ])
    
    if (position === null) {
        
        const newPosition=await Location.getCurrentPositionAsync({
            maximumAge: 1000 * 10, 
          })

        const newLocation=getLocation(newPosition)  
        response.status=true
        response.location=newLocation
        return response
      }
       
    
    const location=getLocation(position)
    response.status=true
    response.location=location

      return response

}

export const formatPhone=(callingCode,phone)=>{
    return `+(${callingCode}) ${phone}`
}

export const callNumber=(phoneNumber)=>{
    Linking.openURL(`tel:${phoneNumber}`)

}

export const sendWhatsApp=(phoneNumber,text)=>{
    const link=`https://wa.me/${phoneNumber}?text=${text}`
    Linking.canOpenURL(link).then((supported)=>{
        if(!supported){
            Alert.alert("Por favor instale WhatsApp para enviar un mensaje directo.")
            return
        }
        return Linking.openURL(link)
    })
}

export const sendEmail=(to,subject,body)=>{
    Linking.openURL(`mailto:${to}?subject=${subject}&body=${body}`)

}

