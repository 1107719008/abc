import React, { useContext } from "react";
import { View, FlatList, Text, ScrollView, StyleSheet} from "react-native";
import Post from "../compenents/Post";
import Tab from "../navigations/Tab";
import { SafeAreaView } from "react-native-safe-area-context";
const PostScreen = ({ navigation }) => {
  return (
  
    <View style={styles.container}>
     

      <Post 
            navigation={navigation}/>
   
      
    </View>
 
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: -10
  }
})


export default PostScreen;
