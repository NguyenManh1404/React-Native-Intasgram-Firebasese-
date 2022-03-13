import { Image, StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Divider } from 'react-native-elements';
import { Entypo, AntDesign,FontAwesome,MaterialIcons } from '@expo/vector-icons';

import { getDatabase, ref, update, remove} from "firebase/database";
import { getAuth } from "firebase/auth";
const Post = ({ post }) => {

//     const [dataPost, setDataPost]= useState([]);
//     useEffect(()=>
//     getPost(),
//     []);


//     const auths = getAuth();

//     const userId = auths.currentUser.uid;
//     const getPost = ()=>{

//         const db = getDatabase();
// const starCountRef = ref(db, 'posts/');
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();

// setDataPost(data)
// });    
//     }

//     console.log("Datassrr",dataPost);

  return (
    <View>
    <Divider width={1} color='white'/>
      <PostHeader post={post}/>
      <PostImage post={post}/>
      <PostFooter post={post}/>
      <PostLike post={post}/>
      <PostCaption post={post}/>
      <CommentsSection post={post} />
      <Comments post={post}/>
    </View>
  )
}

export default Post


const PostHeader = ({post})=>{
    const [checkMyPost, setCheckMyPost] = useState(false);
    useEffect(()=>
    checkMyPostFuntion(),//Gọi lại hàm trong useEffect phải có dấu () nhé
  []);


const checkMyPostFuntion =()=>{
    const auth = getAuth();
    const useremail = auth.currentUser.email;

        if(useremail===post.email){
            setCheckMyPost(true)
        }else{
            setCheckMyPost(false)
        }
}
  
const deleteMyPost = ()=>{
    const db = getDatabase();
    try{
        remove(ref(db,"/posts/"+post.idPost))
    }catch(err){
        console.log(err);
    }
    
}



    // console.log("useremail",useremail);
    return(
    <View style={styles.postHeaderContainer}>
        <View style={styles.postHeaderLeft}>
            <Image source={{uri:post.profile_picture}} style={styles.profilePicture}/>
            <Text style={styles.user}>
                {post.email}
            </Text>
        </View>
        <View>
        {checkMyPost?<TouchableOpacity onPress={deleteMyPost}>
               <MaterialIcons name="delete" size={24} color="red" />
            </TouchableOpacity>:null}
        </View>
    </View>
)};

const PostImage = ({post}) =>(
    <View style={styles.postImageContainer}>
        <Image source={{uri:post.imageUrl}} style={styles.imageUrl}/>
    </View>
);


const PostFooter =({post})=>{

    const [checkLike, setCheckLike] = useState(false)
    const updateLike = async () =>{
            const db = getDatabase();
            checkLike?
            update(ref(db,"/posts/"+post.idPost),{
                like: post.like - 1
            }).then(
                setCheckLike(!checkLike)
            ):update(ref(db,"/posts/"+post.idPost),{
                like: post.like + 1
                
            }).then(
                setCheckLike(!checkLike)
            )
    }

    return(
    <View style={styles.postFooterContainer}>
        <View style={styles.postFooterLeft}>
            <TouchableOpacity onPress={updateLike} style={styles.iconItem}>
                {checkLike?<AntDesign name="heart" size={24} color="red" />:<AntDesign name="hearto" size={24} color="red" />}
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconItem}>
                <FontAwesome name="comment-o" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconItem}>
                <Entypo name="paper-plane" size={24} color="white" />
            </TouchableOpacity> 
        </View>
        <View>
            <TouchableOpacity style={styles.iconItem}>
                <AntDesign name="book" size={24} color="white" />
            </TouchableOpacity>
        </View>
    </View>
)};

const PostLike=({post})=>(
    <View>
        <Text style={styles.likeText}>{post.like} Like</Text>
    </View>
);

const PostCaption=({post})=>(
    <View>
        <Text style={styles.caption}>{post.caption}</Text>
    </View>
);


const CommentsSection =({post})=>(
    <View>
        {/* {!!post.comments.length &&(
            <TouchableOpacity >
                <Text style={styles.commentsSectionText}> View 
                {post.comments.length>1 ?' all':''} {post.comments.length}{' '}
                {post.comments.length>1?'comments':'comment'}
                </Text>
            </TouchableOpacity>
            
        )} */}
    </View>
);

const Comments = ({post}) =>(
    <View>
        {/* {post.comments.map((comment,index)=>(
            <View style={styles.commentContainer} key={index}>
                <Text style={styles.commentText}>
                    <Text style={styles.commentTextUser}>{comment.user}{' '}</Text>
                    {comment.comment}
                </Text>
            </View>
        ))} */}
    </View>
);

const styles = StyleSheet.create({
    postHeaderContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:5,
        alignItems:'center'
    },
    profilePicture:{
        width:30,
        height:30,
        marginHorizontal:10,
        borderRadius:1000,
        borderColor:"#fc7303",
        borderWidth:1,
    },
    user:{
        color:'white'
    },
    postHeaderLeft:{
        flexDirection:'row',
        alignItems:'center'
    },
    imageUrl:{
        height:'100%',
        width:'100%'
    },
    postImageContainer:{
        height:450,
        width:'100%'
    },
    postFooterContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    postFooterLeft:{
        flexDirection:'row',
        
    },
   iconItem:{
       margin:10
   },
   likeText:{
       color:'white',
       marginLeft:10,
       marginTop:-10
   },
   caption:{
       color:'white',
       padding:5
   },
   commentsSectionText:{
       color:'grey',
       padding:5
   },
   commentText:{
       color:'white'
   },
   commentTextUser:{
       fontWeight:'bold'
   },
   commentContainer:{
       padding:5
   }
})