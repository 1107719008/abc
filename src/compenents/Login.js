import React, { useState, useEffect, useContext } from "react";

import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, AsyncStorage, ActivityIndicator } from "react-native";
import { TextInput } from "react-native";
import { Button } from 'react-native-elements';
import * as firebase from "firebase";
import * as Facebook from "expo-facebook";
import axios from "axios";
import { StoreContext } from "../stores";
const NAME_KEY = "NAME_KEY";
const PASSWORD_KEY = "PASSWORD_KEY";


const Login = ({ navigation }, props) => {
    // const [name, onChangeText] = React.useState('');
    // const [password, ChangeText] = React.useState('');

    //login store
    // const { isLoginState } = useContext(StoreContext);
    // const [isLogin, setIsLogin] = isLoginState;
    //signup code
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [msg, setMsg] = useState("  ");
    const [loading, setLoading] = useState(false);
    const [loggedin, setLoggedin] = useState(false);
    //onsignin function
    const onSignIn = async () => {
        setMsg(" ");
        setLoading(true);
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
        } catch (err1) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password);
            } catch (err2) {
                setMsg(err2.message);
            }
        } finally {
            setLoading(false);
            setLoggedin(true);
            setEmail("");
            setPassword("");

        }
    };

    //sign up code(not used in this page)
    const onCreateUser = async () => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            setShowModal(false);
            setError("");
            setEmail("");
            setPassword("");
            setLoading(false);
            // setIsLogin(true);
        } catch (err) {
            setShowModal(false);
            setError(err.message);
            setEmail("");
            setPassword("");
            setLoading(false);
        }
    };
    //sign out(not)
    const onSignOut = () => {
        firebase.auth().signOut();
        // setIsLogin(false);
        setLoggedin(false);
    };

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setMsg(`${user.email} is login`);
                setEmail(user.email);
            } else {
                setMsg(" ");
                setEmail("");
            }
        });
    }, []);
    //loading
    const renderButton = () => {
        return loading ? (
            <ActivityIndicator size="large" style={{ marginTop: 60 }} />
        ) : (
                <TouchableOpacity
                    onPress={saveFna, saveFnb, onSignIn}>
                    <Image source={require("../../img/btn_login.png")}
                        style={styles.loginbt} />
                </TouchableOpacity>
                // <Button
                //     title="Sign in"
                //     buttonStyle={{ backgroundColor: "#4AAF4C" }}
                //     containerStyle={{ padding: 5 }}
                //     onPress={onSignIn}
                // />
            );
    };

    //fb login 
    const doFBLogin = async () => {
        try {
          //Get Token
          await Facebook.initializeAsync("400421187582569");
          const { type, token } = await Facebook.logInWithReadPermissionsAsync({
            permissions: ["public_profile"],
          });
          if (type === "success") {
            // Get the user's name using Facebook's Graph API
            const response = await axios.get(
              `https://graph.facebook.com/me?access_token=${token}`
            );
            //Login Firebase
            const credential = firebase.auth.FacebookAuthProvider.credential(token);
            await firebase.auth().signInWithCredential(credential);
            const { currentUser } = await firebase.auth();
            if (!currentUser.displayName) {
              await currentUser.updateProfile({
                displayName: response.data.name,
              });
            }
          } else {
            // type === 'cancel'
            return;
          }
        } catch ({ message }) {
          setMsg(`Facebook Login Error: ${message}`);
        }
      };
      useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            setMsg(`${user.displayName || user.email} is login ...`);
          } else {
            setMsg(" ");
          }
        });
      }, []);
      const askFBTokenAndLogin = async () => {
        const token = await AsyncStorage.getItem("fb_token");
        if (token) {
          doFBLogin(token);
        } else {
          try {
            await Facebook.initializeAsync("596563987631240");
            const { type, token } = await Facebook.logInWithReadPermissionsAsync({
              permissions: ["public_profile"],
            });
            if (type === "success") {
              await AsyncStorage.setItem("fb_token", token);
              doFBLogin(token);
            } else {
              // type === 'cancel'
              return;
            }
          } catch ({ message }) {
            setMsg(`Facebook Login Error: ${message}`);
          }
        }
      };
    //asyncstorage homework
    const saveFna = () => {
        onChangeText(email);

        try {
            AsyncStorage.setItem(NAME_KEY, JSON.stringify(email));

        } catch (error) {
            console.log(error)
        }
    };
    const saveFnb = () => {

        ChangeText(password);
        try {
            AsyncStorage.setItem(PASSWORD_KEY, JSON.stringify(password));
        } catch (error) {
            console.log(error)
        }
    };
    React.useEffect(() => {
        const restoreState = async () => {
            try {
                const savedNameString = await AsyncStorage.getItem(NAME_KEY);

                const namestate = JSON.parse(savedNameString);

                setEmail(namestate);

            } catch (e) { }
        };
        restoreState();
        const storeState = async () => {
            try {

                const savedPasswordString = await AsyncStorage.getItem(PASSWORD_KEY);

                const passwordstate = JSON.parse(savedPasswordString);

                setPassword(passwordstate);
            } catch (e) { }
        };
        storeState();
    }, []);

    return (
        <View style={styles.all}>
            <Image source={require("../../img/img_backimg.png")}
                style={styles.backimg} />
            <View>
                <Text style={styles.logintxt}>登入</Text>
                <Text style={styles.loginlabel}>名稱</Text>
                <TextInput
                    style={styles.logininput}
                    onChangeText={email => setEmail(email)}
                    value={email}
                    returnKeyLabel="done"

                />

                <Text style={styles.passwordlabel}>密碼</Text>
                <TextInput
                    style={styles.logininput}
                    onChangeText={password => setPassword(password)}
                    value={password}
                    returnKeyLabel="done"

                />
                {renderButton()}
                {/* <TouchableOpacity
                    onPress={saveFna, saveFnb, onSignIn}>
                    <Image source={require("../../img/btn_login.png")}
                        style={styles.loginbt} />
                </TouchableOpacity> */}
                <TouchableOpacity
                    onPress={() => navigation.navigate('Singup')}>
                    <Text style={styles.singuplabel}>註冊</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Choose')}>
                    <Text style={styles.forgotlabel}>忘記密碼?</Text>
                </TouchableOpacity>
                <Image source={require("../../img/Group64.png")}
                        style={styles.or} />
                <TouchableOpacity onPress={askFBTokenAndLogin}>
                    <Image source={require("../../img/Group63.png")}
                        style={styles.fb} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onSignOut}>
                    <Image source={require("../../img/Group62.png")}
                        style={styles.g2} />
                </TouchableOpacity>
                {/* if sisgn in message */}
                <Text style={styles.msg}>{msg}</Text>

                {/* <Button onPress={onSignOut}
                    title="Sign in with Facebook"
                    buttonStyle={{ backgroundColor: "#39579A" }}
                    containerStyle={{ padding: 5 ,marginTop:180}}
                    
                /> */}


            </View>
        </View>
    )


};
const styles = StyleSheet.create({
    all: {

        position: 'absolute',
        backgroundColor: "#EAF6FF",
        height: 900,

    },
    backimg: {
        width: 688.67,
        height: 499.17,
        marginTop: 0,
        marginLeft: -100
    },
    logintxt: {
        fontSize: 40,
        marginLeft: 45,
        marginTop: -396.2,
        color: "white"
    },
    loginlabel: {
        fontSize: 20,
        color: "#FFF4F4",
        width: 40,
        height: 27,
        marginTop: 103,
        marginLeft: 45
    },
    logininput: {
        borderColor: "#707070",
        width: 281.5,
        height: 35.5,
        borderBottomWidth: 1,
        marginTop: 0,
        marginLeft: 45
    },
    passwordlabel: {
        fontSize: 20,
        color: "#FFF4F4",
        width: 40,
        height: 27,
        marginTop: 27.5,
        marginLeft: 45
    },
    loginbt: {
        width: 85,
        height: 85,
        marginTop: 82.5,
        marginLeft: 290
    },
    singuplabel: {
        width: 40,
        height: 27,
        fontSize: 20,
        color: "#4D5460",
        marginTop: 17,
        marginLeft: 45
    },
    forgotlabel: {
        width: 100,
        height: 27,
        fontSize: 20,
        color: "#959595",
        marginTop: 31,
        marginLeft: 45
    },
    msg: {
        width:280,
        padding: 10,
        color: "gray",
        marginTop: -280,
        marginLeft: 36
    },
    fb: {
       
        padding: 10,
        marginLeft: 80,
        marginTop: 15

    },
    g2:{
        padding: 10,
        marginLeft: 220,
        marginTop: -60
    },
    or:{
        marginLeft: 95,
        marginTop:20
       
    }
});

export default Login;

// import React from "react";
// import { StyleSheet, Text, View, Image,ScrollView,TouchableOpacity} from "react-native";
// import { TextInput } from "react-native";

// const Login =({navigation})=>{
//     const [value,onChangeText] =React.useState(' ');
//     const [password,ChangeText] =React.useState(' ');
//     return(
//         <View style={styles.all}>
//             <Image source={require("../../img/img_backimg.png")}
//                     style={styles.backimg}/>
//             <View>
//             <Text style={styles.logintxt}>登入</Text>
//             <Text style={styles.loginlabel}>名稱</Text>
//             <TextInput 
//                 style={styles.logininput}
//                 onChange={text =>onChangeText(text)}
//                 value={value}
//                 returnKeyLabel="done"
//                 />
//             <Text style={styles.passwordlabel}>密碼</Text>
//             <TextInput 
//                 style={styles.logininput}
//                 onChange={text =>ChangeText(text)}
//                 value={password}
//                 returnKeyLabel="done"
//                 />
//             <TouchableOpacity
//                 onPress={()=>navigation.navigate('Choose')}>
//                 <Image source={require("../../img/btn_login.png")}
//                         style={styles.loginbt}/>
//             </TouchableOpacity>
//             <TouchableOpacity
//                 onPress={()=>navigation.navigate('Singup')}>
//                     <Text style={styles.singuplabel}>註冊</Text>
//                 </TouchableOpacity>
//             <TouchableOpacity
//                 >
//                     <Text style={styles.forgotlabel}>忘記密碼?</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     )
// };
// const styles = StyleSheet.create({
//     all:{

//         position:'absolute',
//         backgroundColor:"white",
//         height:900,

//     },
//     backimg:{
//         width:688.67,
//         height:499.17,
//         marginTop:0,
//         marginLeft:-100
//     },
//     logintxt:{
//         fontSize:40,
//         marginLeft:45,
//         marginTop:-396.2,
//         color:"white"
//     },
//     loginlabel:{
//         fontSize:20,
//         color:"#FFF4F4",
//         width:40,
//         height:27,
//         marginTop:103,
//         marginLeft:45
//     },
//     logininput:{
//         borderColor:"#707070",
//         width:281.5,
//         height:35.5,
//         borderBottomWidth:1,
//         marginTop:0,
//         marginLeft:45
//     },
//     passwordlabel:{
//         fontSize:20,
//         color:"#FFF4F4",
//         width:40,
//         height:27,
//         marginTop:27.5,
//         marginLeft:45
//     },
//     loginbt:{
//         width:85,
//         height:85,
//         marginTop:82.5,
//         marginLeft:290
//     },
//     singuplabel:{
//         width:40,
//         height:27,
//         fontSize:20,
//         color:"#4D5460",
//         marginTop:17,
//         marginLeft:45
//     },
//     forgotlabel:{
//         width:100,
//         height:27,
//         fontSize:20,
//         color:"#959595",
//         marginTop:31,
//         marginLeft:45
//     },
//   });

//   export default  Login;