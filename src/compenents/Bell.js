import React, { useRef,useEffect,useContext,useState } from "react";
import { StyleSheet, Text, View, Animated, Image, ScrollView, TouchableOpacity,Alert,Vibration } from "react-native";
import { TextInput } from "react-native";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import LottieView from "lottie-react-native";
import { Path } from "react-native-svg";

function Presskey(){
    Alert.alert(
        '群組金鑰',
        'jdskfjiew',
    )
}


const Bell = ({ navigation }) => {
    const animation = useRef(null);
    const onPress = () => {
        animation.current.play();
    };

    const [expoPushToken, setExpoPushToken] = useState("");
    const [sendMsg, setSendMsg] = useState("");
    const [receivedMsg, setReceivedMsg] = useState("");
    const { isLoginState } = useContext(StoreContext);
    const [isLogin, setIsLogin] = isLoginState;

    return (
        <View style={styles.all}>
            <Image source={require('../../img/img_bellheader.png')}
                style={styles.header}
            />
            {/* <TouchableOpacity>
                <Image source={require('../../img/btn_headerleft.png')}
                    style={styles.headerleft}
                />
            </TouchableOpacity> */}
            <TouchableOpacity onPress={Presskey}>

                <Image source={require('../../img/btn_headerleft.png')}
                    style={styles.headerright}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress} style={styles.bell}>
                <Image source={require('../../img/0012.png')}
                />
                <LottieView
                    ref={animation}
                    style={styles.bellanimate}
                    source={require("../json/lf30_editor_ejlLgA.json")}
                    loop={false} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Post')}>
                <Image source={require('../../img/000.png')}
                    style={styles.btntalk}
                />
            </TouchableOpacity>

            {/* <BellIcon width='40' active={true} /> */}
        </View>
    )
};
const styles = StyleSheet.create({
    all: {

        position: 'absolute',
        backgroundColor: "#EAF6FF",
        height: 900,

    },
    header: {
        width: 414,
        height: 88
    },
    headerright: {
        width: 20.91,
        height: 19.13,
        marginTop: -37.03,
        marginLeft: 363.8
    },
    headerleft: {
        width: 20.83,
        height: 19.79,
        marginTop: -37.03,
        marginLeft: 32
    },
    btntalk: {

        marginTop: -40,
        marginLeft: 280
    },
    bellanimate: {
        marginLeft: 27,
        marginTop: -81,
        width: 140

    },
    bell: {
        width: 500,
        height: 500,
        marginLeft: 57,
        marginTop: 152
    }
});

export default Bell;