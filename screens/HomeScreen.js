import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';
import Post from '../components/home/Post';
// import { POSTS } from '../data/posts'
import BottomTabs from '../components/home/BottomTabs';

import { getDatabase, ref, onValue} from "firebase/database";

const HomeScreen = ({navigation}) => {

  const [dataPost, setDataPost]= useState([]);//Tạo User Status để hứng data

  useEffect(()=>
    getPost(),//Gọi lại hàm trong useEffect phải có dấu () nhé
  []);

  const getPost = ()=>{
    const db = getDatabase();
    const starCountRef = ref(db, 'posts/');//Đọc data từ collection 'post
    onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    setDataPost(data)
    });    
  }

  const POSTS = Object.values(dataPost);//Chuyển Oject thành mảng để dùng map

  return (
    <SafeAreaView style={styles.container} >
        <Header navigation={navigation}/>
        <Stories/>
        <ScrollView>

            {POSTS.map((post,index)=>(
                <View key={index}>
                    <Post post={post} key={index}/>
                </View>
            ))}
        </ScrollView>
        <BottomTabs navigation={navigation} />

      {/* <Text style={{color:'white'}}>HomeScreen</Text> */}
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        flex:1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }
})