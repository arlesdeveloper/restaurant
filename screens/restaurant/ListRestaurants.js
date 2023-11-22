import React from "react"
import { size } from "lodash"
import {  ActivityIndicator ,StyleSheet,Text , View,FlatList,TouchableOpacity } from 'react-native'
import { Image } from "react-native-elements"

import { formatPhone } from "../../utils/helpers"
import { ScrollView } from "react-native-gesture-handler"


export default function ListRestaurants({restaurants,navigation, handleLoadMore}) {
    
  return (
    
    <ScrollView>
        <FlatList
        data={restaurants}
        keyExtractor={(item,index)=>{ return index.toString()}}
        onEndReachedThreshold={0.5}
        onEndReached={handleLoadMore}
        renderItem={(restaurant,index)=>
            (<Restaurant restaurant={restaurant} navigation={navigation}/>)
        
        
        }
        
        />
     
    </ScrollView>
  )
}

function Restaurant({restaurant,navigation}){


    const {id,images,name,address,description,phone,callingCode}=restaurant.item
    const imageRestaurant=images[0]
    const goRestaurant=()=>{
        navigation.navigate("restaurant",{id,name})

    }
    
    return(

        <TouchableOpacity onPress={goRestaurant}>
           
            <View style={styles.viewRestaurant}>
                <View style={styles.viewRestaurantImage}>
                    <Image
                    resizeMode="cover"
                    PlaceholderContent={<ActivityIndicator color="#fff"/>}
                    source={{uri:imageRestaurant}}
                    style={styles.imageRestaurant}
                    
                    />
                </View>
           
            <View>
                <Text style={styles.restaurantTitle}>{name}</Text>
                <Text style={styles.restaurantInformation}>{address}</Text>
                <Text style={styles.restaurantInformation}>{formatPhone(callingCode,phone)}</Text>
                <Text style={styles.restaurantDescription}>{
                     size(description)>0
                     ?`${description.substr(0,60)}...`
                     :description
                    
                    }
                </Text>
            </View>
             </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    viewRestaurant:{
      flexDirection:"row",
      margin:10
    },
    viewRestaurantImage:{
        marginRight:15
    },
    imageRestaurant:{
        width:90,
        height:90
    },
    restaurantTitle:{
        fontWeight:"bold"
    },
    restaurantInformation:{
        paddingTop:2,
        color:"grey"
    },
    restaurantDescription:{
        paddingTop:2,
        color:"grey",
        width:"75%"

    }
})