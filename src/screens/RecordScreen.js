import React, { useContext } from "react";
import { View, FlatList,Text,ScrollView,StyleSheet } from "react-native";
import Record from "../compenents/Record";
import Map from "../compenents/MAP";
import Aninate from "../compenents/animated";
import Calendar from "../compenents/calendar"
const RecordScreen = ({navigation}) => {
  return (

    <View style={styles.container}>
  
  
   <View style={{height:1000}}>
   
    <Calendar navigation={navigation}/>
     </View> 
  </View>
   
          
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  }
})

export default RecordScreen;
