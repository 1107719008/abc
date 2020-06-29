import React, { useContext } from "react";
import { View, FlatList,Text,ScrollView, StyleSheet} from "react-native";
import Setting from "../compenents/Setting"
const SettingScreen = ({navigation}) => {
  return (
   

    <View style={styles.container}>
  

      <View style={{height:1000}}>
     
      <Setting navigation={navigation}/>
       </View> 
  </View>
          
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  }
})


export default SettingScreen;
