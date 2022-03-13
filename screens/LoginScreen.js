import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const loginFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    password: Yup.string().required().min(6,"Passwork must more than 6 characters")

})
const LoginScreen = ({navigation}) => {

        const onLogin = async (email,password) => {
          try {
            const user = await signInWithEmailAndPassword(auth,email, password);//truyen từ firebase.js
            if (user) {
              console.log("Đăng nhập thành công", email,password);
            }
          } catch (error) {
            console.log(error);
            Alert.alert(error.message)
          }
        };

  return (
    <SafeAreaView style={styles.container}>
    <Formik
        initialValues={{email:'',password:''}}
        onSubmit={(values)=>{
            onLogin(values.email, values.password)
            console.log(values)
        
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
            <TextInput style={[
                styles.inputItem,
                {
                    borderColor:
                    1 > values.email.length || errors.email ?'red':'grey'
                }

                ]} 
                placeholder="Email" 
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
               
            />
            <TextInput style={[
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
        <View style={styles.forgotView}>
            <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot Password ?</Text>
            </TouchableOpacity>
        </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.buttonItem(isValid)}  onPress={handleSubmit} disabled={!isValid}>
                        <Text style={styles.textButton}>
                            Sign In
                        </Text>
                </TouchableOpacity>
            </View>

    
        <View style={styles.viewInfo}>
            <Text style={styles.textInfo}>
            Don't have a account?{" "}
            
            </Text>
            <TouchableOpacity onPress={()=>navigation.push('SignUpScreen')}>
                <Text style={styles.textInfoLink}>Sign up</Text>
            </TouchableOpacity>
        </View>
        </>
    )}
      </Formik>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
  forgotView: {
    alignItems: "flex-end",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  forgotText: {
    color: "#039dfc",
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
