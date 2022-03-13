import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const AddNewPost = ({navigation}) => {
  return (
    <View>
      <HeaderAddNewPost navigation={navigation} />
    </View>
  );
};

export default AddNewPost;

const HeaderAddNewPost = ({navigation}) => (
  <View style={styles.HeaderAddNewPostContainer}>
    <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Ionicons name="chevron-back-outline" size={24} color="white" />
    </TouchableOpacity>

    <Text style={styles.textHeader}>Add New Post</Text>
    <Text></Text>
  </View>
);

const styles = StyleSheet.create({
  HeaderAddNewPostContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
  },
  textHeader: {
    color: "white",
    fontWeight: "bold",
    fontSize: 19,
  },
});
