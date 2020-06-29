import React from "react";
import { StyleSheet, Text, View, Image,ScrollView,TouchableOpacity} from "react-native";
import { TextInput } from "react-native";
import { Keyboard ,TouchableWithoutFeedback,KeyboardAvoidingView} from 'react-native';



const Post =({navigation})=>{
  const [value,onChangeText]= React.useState('想記錄點什麼?');
  const [message,ChangeText]= React.useState('');
    return(
        <TouchableWithoutFeedback
  onPress={Keyboard.dismiss}
>
        <View style={styles.all}>
        <KeyboardAvoidingView 
      behavior="position" 
      style={styles.container}
    >
           <Image source={require('../../img/img_bellheader.png')}
                    style={styles.header}
            />
             
            <TouchableOpacity>
               
                <Image source={require('../../img/icon_search.png')}
                        style={styles.headerright}
                />

            </TouchableOpacity>
            <Text style={styles.title}>生活紀錄</Text>
            <TextInput
                style={styles.new}
                onChange={text=>onChangeText(text)}
                value={value}
                returnKeyLabel="done"
                />
            <TouchableOpacity>
                <Image source={require('../../img/btn_create.png')}
                        style={styles.create}
                />
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Image source={require('../../img/btn_photo.png')}
                        style={styles.photo}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../../img/btn_takepic.png')}
                        style={styles.takepic}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../../img/btn_attachment.png')}
                        style={styles.attachment}/>
            </TouchableOpacity>
            <View style={styles.post}>
                <View style={styles.row}>
                    <Image style={styles.ppic}
                        source={require('../../img/img_ppic.png')}
                    />
                    <View style={styles.column}>
                    <Text style={styles.call}>媽媽</Text>
                    <Text style={styles.time}>五分鐘</Text>
                    </View>
                </View>
                <Text style={styles.content}>今天阿嬤生日我有買蛋糕喔!</Text>
                <Image style={styles.contentimg}
                        source={require('../../img/img_contentimg.png')}/>
                         
                <TextInput
                style={styles.message}
                onChange={text=>ChangeText(text)}
                value={message}
                returnKeyLabel="done"
                placeholder="      留言..."
                textAlign="left"
                clearButtonMode="while-editing"
                />
                
            </View>
            </KeyboardAvoidingView>
        </View>
        </TouchableWithoutFeedback>
    )
};
const styles = StyleSheet.create({
    all:{
        
        position:'absolute',
        backgroundColor:"#E8F5FF",
        height:900,
        
    },
    header:{
        width:414,
        height:88
    },
    headerleft:{
        width:20.91,
        height:19.13,
        marginTop:-37.03,
        marginLeft:30
    },
    headerright:{
        width:20.91,
        height:19.13,
        marginTop:-37.03,
        marginLeft:363.8
    },
    title:{
        fontSize:20,
        width:82,
        height:27,
        marginTop:-38,
       marginLeft:165,
       color:"white"
    },
    new:{
        width:350,
        height:46,
        borderRadius:26,
        paddingLeft:20,
        marginTop:40,
        marginLeft:32,
        backgroundColor:"white"
    },
    create:{
        width:40,
        height:40,
        marginLeft:335,
        marginTop:-40
    },
    photo:{
        width:110,
        height:41,
        marginLeft:32,
        marginTop:15
    },
    takepic:{
        width:110,
        height:41,
        marginLeft:152,
        marginTop:-41
    },
    attachment:{
        width:110,
        height:41,
        marginLeft:272,
        marginTop:-41
    },
    post:{
        width:350,
        height:380,
        backgroundColor:"white",
        borderRadius:10,
        marginLeft:32,
        marginTop:17
    },
    ppic:{
        width:40,
        height:40,
        marginTop:10,
        marginLeft:10
    },
    row:{
        flexDirection:"row"
    },
    call:{
        width:30,
        height:20,
        fontSize:15,
        color:"#1D4064",
        fontWeight:"bold",
        marginLeft:10,
        marginTop:12
    },
    time:{
        width:37,
        height:16,
        fontSize:12,
        color:"#1D4064",
        
        marginLeft:9,
        marginTop:1
    },
    content:{
        
        height:16,
        fontSize:12,
        color:"#1D4064",
        marginLeft:10,
        marginTop:10
    },
    contentimg:{
        width:330,
        height:220,
        borderRadius:10,
        marginLeft:10,
        marginTop:11
    },
    message:{
        backgroundColor:"#F1F2F3",
        width:330,
        height:38,
        marginLeft:10,
        marginTop:15,
        borderRadius:26
    },
   
  });
  
  export default  Post;