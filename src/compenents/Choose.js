import React from "react";
import { StyleSheet, Text, View, Image,ScrollView,TouchableOpacity, Button} from "react-native";
import { TextInput } from "react-native";




const Choose =({navigation})=>{
    const [value,onChangeText] =React.useState(' ');
    const [password,ChangeText] =React.useState(' ');
    return(
        <View style={styles.all}>
            <Image source={require("../../img/img_chooseback.png")}
                    style={styles.backimg}/>
            <Text style={styles.title}>選擇身分</Text>
           <TouchableOpacity 
                onPress={()=>navigation.navigate('Bell')}>
                    <Image source={require('../../img/btn_old.png')}
                            style={styles.old}/>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>navigation.navigate('Post')}>
                    <Image source={require('../../img/btn_family.png')}
                            style={styles.family}/>
                </TouchableOpacity>
        </View>
    )
};
const styles = StyleSheet.create({
    all:{
        
        position:'absolute',
        backgroundColor:"white",
        height:900,
        
    },
    backimg:{
        width:569.86,
        height:290.39,
        marginTop:0,
        marginLeft:-100
    },
    title:{
        width:142,
        height:44,
        fontSize:33,
        color:"white",
        marginTop:-119.7,
        marginLeft:141
    },
    old:{
        width:226,
        height:70,
        marginTop:178,
        marginLeft:94,
        
    },
    family:{
        width:226,
        height:70,
        marginTop:38,
        marginLeft:94
    },
  });
  
  export default  Choose;