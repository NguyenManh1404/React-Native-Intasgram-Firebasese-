import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState, createContext } from 'react'
import { SignedInStack, SignedOutStack } from './navigation';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';



const AuthNavigation = () => {

    const [checkAuth,setCheckAuth] = useState(false);
   

    useEffect(()=>
        onAuthStateChanged(auth,(user)=>{
            
        if(user){
            setCheckAuth(true);
           
        }else{
            setCheckAuth(false)
        }
       console.log("Hff",checkAuth);
    }),
[]);
   
  return (
    <>
        {checkAuth?<SignedInStack/>:<SignedOutStack/>}
    </>
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})