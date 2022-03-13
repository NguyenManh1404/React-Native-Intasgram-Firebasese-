import { StyleSheet, Text, View,SafeAreaView, Platform, StatusBar } from 'react-native'
import React from 'react'

const UserScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>UserScreen</Text>
    </SafeAreaView>
  )
}

export default UserScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    flex:1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
}
})