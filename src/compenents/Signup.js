import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, AsyncStorage,Alert } from "react-native";
import { TextInput } from "react-native";
import { Button } from 'react-native-elements';
import * as firebase from "firebase";
import Confirm from "./Confirm";

const NAME_KEY = "NAME_KEY";
const PASSWORD_KEY = "PASSWORD_KEY";


const Singup = ({ navigation }, props) => {
    // const [name, onChangeText] = React.useState('');
    // const [password, ChangeText] = React.useState('');

    //signup code
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [msg, setMsg] = useState("  ");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false);


    //onsignin function(not used)
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
            setEmail("");
            setPassword("");
        }
    };

    //sign up code
    const onCreateUser = async () => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            setShowModal(false);
            setError("");
            setEmail("");
            setPassword("");
            setLoading(false);
            setIsLogin(true);
        } catch (err) {
            setShowModal(false);
            setError(err.message);
            setEmail("");
            setPassword("");
            setLoading(false);
        }
    };
    const createTwoButtonAlert = () =>
    Alert.alert(
      "確認送出",
      
      [
        {
          text: "Cancel",
          onPress:() => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress:() => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

    const onCLoseModal = () => {
        setShowModal(false);
        setError("");
        setEmail("");
        setPassword("");
        setLoading(false);
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
                <Text style={styles.logintxt}>註冊</Text>
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

                <TouchableOpacity
                    onPress={saveFna, saveFnb, onCreateUser}>
                    <Image source={require("../../img/btn_login.png")}
                        style={styles.loginbt} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.singuplabel}>登入</Text>
                </TouchableOpacity>
                <TouchableOpacity
                >
                    <Text style={styles.forgotlabel}>忘記密碼?</Text>
                </TouchableOpacity>
                {/* message announce */}
                <Confirm
                    title="Are you sure to create a new user?"
                    visible={showModal}
                    onAccept={onCreateUser}
                    onDecline={onCLoseModal}
                />
                {/* if sisgn in message */}
                <Text style={styles.msg}>{msg}</Text>
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
    msg:{
        padding:10,
        color:"gray",
        marginTop:-170,
        marginLeft:36
    },
});

export default Singup;