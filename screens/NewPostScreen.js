import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import AddNewPost from "../components/newPost/AddNewPost";
import FormUpload from "../components/newPost/FormUpload";

const NewPostScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <AddNewPost navigation={navigation} />
      <FormUpload navigation={navigation}/>
    </SafeAreaView>
  );
};

export default NewPostScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
