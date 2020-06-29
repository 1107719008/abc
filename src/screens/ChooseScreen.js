import React, { useContext } from "react";
import { View, FlatList,Text,ScrollView} from "react-native";
import Choose from "../compenents/Choose";

const ChooseScreen = ({navigation}) => {
  return (
   
      <View style={{height:1000}}>
      <Choose 
            navigation={navigation}/>
       </View>
          
  );
};

export default ChooseScreen;
