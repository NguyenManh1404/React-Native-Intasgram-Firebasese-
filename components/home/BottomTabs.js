import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Entypo,FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons';

const BottomTabs = ({navigation}) => {

    const [homeActive, setHomeActive] = useState(true);
    const [searchActive, setSearchActive] = useState(false);
    const [videoActive, setVideoActive] = useState(false);
    const [shopActive, setShopActive] = useState(false);
    const [userActive, setUserActive] = useState(false);

    const handerHomeActive =()=>{
        if(homeActive!=true){
            setHomeActive(!homeActive)

            setSearchActive(false);
            setVideoActive(false);
            setShopActive(false);
            setUserActive(false);
        }
       
    }

    const handerSearchActive =()=>{
        if(searchActive!=true){
            setSearchActive(!searchActive);

            setHomeActive(false);
            setVideoActive(false);
            setShopActive(false);
            setUserActive(false);
        }
        
    }

    const handerVideoActive =()=>{
        if(videoActive!=true){
            setVideoActive(!videoActive);
            
            setHomeActive(false);
            setSearchActive(false);
            setShopActive(false);
            setUserActive(false);
        }
        
    }

    const handerShopActive =()=>{
        if(shopActive!=true){
            setShopActive(!shopActive);
            
            setHomeActive(false);
            setSearchActive(false);
            setVideoActive(false);
            setUserActive(false);
        }
        
    }

    const handerUserActive =()=>{
        if(userActive!=true){
            setUserActive(!userActive);
            
            setHomeActive(false);
            setSearchActive(false);
            setVideoActive(false);
            setShopActive(false);
        }
        
    }


  return (
    <View style={styles.bottomTabsContainer}>
        <TouchableOpacity onPress={handerHomeActive} >
            {homeActive?<Entypo name="home" size={24} color="white" />:<Entypo name="home" size={24} color="grey" />}
            
        </TouchableOpacity>
        <TouchableOpacity onPress={handerSearchActive}>
            {searchActive?<FontAwesome name="search" size={24} color="white" />:<FontAwesome name="search" size={24} color="grey" />}
        </TouchableOpacity>
        <TouchableOpacity onPress={handerVideoActive}>
            {videoActive?<MaterialCommunityIcons name="youtube-tv" size={24} color="white" />:<MaterialCommunityIcons name="youtube-tv" size={24} color="grey" />}
        </TouchableOpacity>
        <TouchableOpacity onPress={handerShopActive}>
            {shopActive?<MaterialCommunityIcons name="shopping-outline" size={24} color="white" />:<MaterialCommunityIcons name="shopping-outline" size={24} color="grey" />}
        </TouchableOpacity>
        <TouchableOpacity onPress={handerUserActive}  onPress={()=>navigation.push('UserScreen')}>
            {userActive?<FontAwesome name="user-circle-o" size={24} color="white" />:<FontAwesome  name="user-circle-o" size={24} color="grey" />}
        </TouchableOpacity>
    </View>
  )
}

export default BottomTabs

const styles = StyleSheet.create({
    bottomTabsContainer: {
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        padding:10
    }
})