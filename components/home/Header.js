import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
const Header = ({navigation}) => {


  const logOut = ()=>{
    signOut(auth);
};

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={logOut}>
        <Image
          style={styles.logo}
          source={require("../../assets/intasgramlogo.png")}
        />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={()=>navigation.push('NewPostScreen')}>
          <AntDesign
            style={styles.icon}
            name="plussquareo"
            size={24}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign
            style={styles.icon}
            name="hearto"
            size={24}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.alert}>
            <Text style={styles.alertText}>11</Text>
          </View>
          <AntDesign
            style={styles.icon}
            name="message1"
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  iconContainer: {
    flexDirection: "row",
    padding: 10,
  },
  icon: {
    marginLeft: 10,
  },
  alert: {
    backgroundColor: "red",
    position: "absolute",
    left: 20,
    top: -5,
    borderRadius: 20,
    alignItems: "center",
    width: 25,
    zIndex: 1,
  },
  alertText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
});
