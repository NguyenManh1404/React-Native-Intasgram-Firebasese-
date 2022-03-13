import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewTextInput,
} from "react-native";
import React, { useContext, useEffect } from "react";
import * as Yup from "yup";
import { useState } from "react";
import { Formik } from "formik";
import { Divider } from "react-native-elements";
import { validUrl } from "valid-url";


import { getDatabase, ref, set } from 'firebase/database';

import { getAuth } from "firebase/auth";
const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL Is Required"),
  caption: Yup.string().max(2200, "Caption not over 2200 character"),
});


const defautImage = "https://penmadsidrap.com/uploads/blog_image/default.jpg";
// http://dulichnamachau.com/wp-content/uploads/%C4%90L.jpg
const FormUpload = ({navigation}) => {

  const idPost = Math.random().toString(36).slice(2);//Random ra một chuổi id ngẫu nhiên
  const auths = getAuth();

  const userId = auths.currentUser.uid;
  const useremail = auths.currentUser.email;



    const onUpLoadForm = async (caption,imageUrl)=>{
      
      //Add data vào cơ sở dữ liệu
      const db = getDatabase();
      const reference = await ref(db, 'posts/'+ idPost);//users/ thêm colection
      await set(reference,{
        idPost:idPost,
        userId:userId,
        email:useremail,
        like:0,
        profile_picture:"https://www.seekpng.com/png/detail/245-2454602_tanni-chand-default-user-image-png.png",
        caption:caption,
        imageUrl:imageUrl,
        comments:[null],
      });
//end
    }

  const [thumbnailUrl, setThumbnailUrl] = useState(defautImage);
  return (
    <View>
      <Formik
        initialValues={{ caption: "", imageUrl: "" }}
        onSubmit={values => {
          console.log(values)
          onUpLoadForm(values.caption,values.imageUrl)
          navigation.goBack()
          }}
        validationSchema={uploadPostSchema}
        validateOnMount={true}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <View style={{padding:10}}>
            <View style={styles.formUpload}>
              <View>
                <Image
                  source={{ uri: thumbnailUrl? thumbnailUrl : defautImage }}
                  style={styles.imageForm}
                />
              </View>
              <TextInput
                style={styles.textInput}
                placeholder="Write a caption of Post"
                placeholderTextColor="white"
                multiline={true}
                onChangeText={handleChange("caption")}
                handleBlur={handleBlur("caption")}
                value={values.caption}
              />
            </View>
            <Divider width={1} />
            <TextInput
              onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
              style={styles.textInput}
              placeholder="Enter a image url"
              placeholderTextColor="white"
              onChangeText={handleChange("imageUrl")}
              handleBlur={handleBlur("imageUrl")}
              value={values.imageUrl}
            />
            {errors.imageUrl && (
              <Text style={styles.textError}>{errors.imageUrl}</Text>
            )}
            <TouchableOpacity onPress={handleSubmit}  style={styles.buttonShare} disabled={!isValid}>
              <Text style={styles.textButton}>Share</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default FormUpload;

const styles = StyleSheet.create({
  formUpload: {
    flexDirection: "row",
    marginBottom: 10,
  },
  imageForm: {
    width: 100,
    height: 100,
  },
  textInput: {
    color: "white",
    fontSize: 20,
    height: 50,
  },
  buttonShare: {
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
  },
  textButton: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  textError: {
    color: "red",
  },
});
