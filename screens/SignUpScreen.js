import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,Alert
  } from "react-native";
  import React from "react";
  import * as Yup from "yup";
  import { Formik } from "formik";

import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


import { getDatabase, ref, set } from 'firebase/database';

  
  const loginFormSchema = Yup.object().shape({
      email: Yup.string().email().required("An email is required"),
      username: Yup.string().required().min(6,"UserName must more than 6 characters"),
      password: Yup.string().required().min(8,"Password must more than 8 characters")
  
  })
  const SignUpScreen = ({navigation}) => {

    const getRandomProfilePicture = async () =>{
      const response = await fetch('https://randomuser.me/api');//gọi dữ liệu từ api
      const data = await response.json();
      return data.results[0].picture.large;
    }

    const SignUp = async (email,password,username) => {
      try {
        const photoURL=  await  getRandomProfilePicture();
        const user = await createUserWithEmailAndPassword(auth,email, password,photoURL);//truyen từ firebase.js
        if (user) {
          navigation.push("LoginScreen")
          console.log("Đăng ký thành công", email,password);
          
//Add data vào cơ sở dữ liệu
          const db = getDatabase();
          const reference = await ref(db, 'users/'+ user.user.uid);//users/ thêm colection
          await set(reference,{
            user_id:user.user.uid,
            username:username,
            email:email,
            profilePicture: photoURL,
          });
//end
        }
      } catch (error) {
        console.log(error);
        Alert.alert(error.message)
      }
    };



    // try {
    //   const db = getDatabase();
    //   const reference = await ref(db, `Centres/${value.data.length}`);
    //   await set(reference, dataAdd);
    //   navigationRoute.goBack();
    // } catch (error) {
    //   console.log(error.message);
    // }


   



    return (
      <SafeAreaView style={styles.container}>
      <Formik
          initialValues={{email:'',password:'',username:''}}
          onSubmit={(values)=>{
              console.log(values)
              SignUp(values.email, values.password,values.username)

          }}
          validationSchema={loginFormSchema}
          validateOnMount={true}
      >
      {({   handleBlur,
            handleChange,
            handleSubmit,
            values,
            errors,
            isValid,
      })=>(
          <>
          <View style={styles.logoView}>
              <Image
              style={styles.imageLogo}
              source={require("../assets/logoInta.png")}
              />
          </View>
          <View style={styles.inputView}>
              <TextInput  style={[
                styles.inputItem,
                {
                    borderColor:
                    errors.email ?'red':'grey'
                }

                ]} 
                 placeholder="Email" 
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
              />
              <TextInput  style={[
                styles.inputItem,
                {
                    borderColor:
                    errors.username ?'red':'grey'
                }

                ]}  
                 placeholder="UserName"
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
              />
              <TextInput  style={[
                styles.inputItem,
                {
                    borderColor:
                    errors.password ?'red':'grey'
                }

                ]}  
                  secureTextEntry={true} placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
              />
          </View>
          
              <View style={styles.buttonView}>
                  <TouchableOpacity style={styles.buttonItem(isValid)}  onPress={handleSubmit} disabled={!isValid}>
                          <Text style={styles.textButton}>
                              Sign Up
                          </Text>
                  </TouchableOpacity>
              </View>
  
      
          <View style={styles.viewInfo}>
              <Text style={styles.textInfo}>
              You have a account?{" "}
              
              </Text>
              <TouchableOpacity onPress={()=>navigation.push('LoginScreen')} >
                  <Text style={styles.textInfoLink}>Login ?</Text>
              </TouchableOpacity>
          </View>
          </>
      )}
        </Formik>
      </SafeAreaView>
    );
  };
  
  export default SignUpScreen;
  
  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
    },
    logoView: {
      paddingTop: 60,
      alignItems: "center",
    },
    imageLogo: {
      width: 160,
      height: 160,
    },
    inputView: {
      alignItems: "center",
      paddingTop: 10,
    },
    inputItem: {
      width: "90%",
      borderWidth: 1,
      borderColor: "grey",
      height: 50,
      fontSize: 18,
      paddingLeft: 10,
      marginTop: 10,
      borderRadius: 10,
    },
    viewInfo: {
      flexDirection:'row',
      paddingTop:40
    },
    textInfo: {
      fontSize: 15,
      color: "black",
      marginLeft:'25%'
    },
    textInfoLink: {
      fontSize: 15,
      color: "#35b8f0",
    },
    buttonView:{
      alignItems:'center',
      marginTop:30
      
    },
    buttonItem: isValid=>({
      width:'90%',
      height:50,
      alignItems:'center',
      backgroundColor:isValid?'#039dfc':"#35b8f0",
      paddingLeft: 10,
      justifyContent:'center',
      borderRadius:10
    }),
    textButton:{
      color:'white',
      fontWeight:'bold',
      fontSize:18
    }
  });
  