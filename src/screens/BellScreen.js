import React, { useContext } from "react";
import { View, FlatList,Text,ScrollView} from "react-native";
import Bell from "../compenents/Bell";

const BellScreen = ({navigation}) => {
  return (
   
      <View style={{height:1000}}>
      <Bell 
            navigation={navigation}/>
       </View>
          
  );
};

export default BellScreen;
