import React, { useContext } from "react";
import { View, FlatList,Text,ScrollView} from "react-native";
import Singup from "../compenents/Signup"

const SignupScreen = ({navigation}) => {
  return (
   
      <View style={{height:1000}}>
      <Singup
         navigation={navigation}/>
       </View>
          
  );
};

export default SignupScreen;
