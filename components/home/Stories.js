import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react';
import { USERS } from '../../data/users';

const Stories = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {USERS.map((story,index) => (
                <View key={index} style={styles.storyContainer}>
                    <Image style={styles.imageStory} source={story.image}/>
                    <Text style={styles.userStory}>
                        {story.user.length >10 ? story.user.slice(0,10).toLowerCase() + "...":story.user}
                       
                    </Text>
                </View>
               
            ))}
      </ScrollView>
    </View>
  )
}

export default Stories

const styles = StyleSheet.create({
    storyContainer:{
        alignItems:'center',
        marginBottom:30,
      
    },
    imageStory:{
        width:70,
        height:70,
        marginHorizontal:10,
        borderColor:"#fc7303",
        borderWidth:3,
        borderRadius:1000,
    },
    userStory:{
        color:'white',
        fontWeight:'bold',
        
    },

})