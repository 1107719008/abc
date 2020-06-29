import React, { useContext } from "react";
import { View, FlatList,Text,ScrollView} from "react-native";

import Login from "../compenents/Login";
const LoginScreen = ({navigation}) => {
  return (
   
      <View style={{height:1000}}>
      <Login
         navigation={navigation}/>
       </View>
          
  );
};

export default LoginScreen;
