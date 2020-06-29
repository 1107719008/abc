import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Alert,
  AlertIOS
} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import { TextInput } from 'react-native-gesture-handler';
const title = "紀錄";
const blood = '血糖';
const pressure = '血糖';
function Input(){
  Alert.prompt(
    title,
    blood,
    
    [
       {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {
      text: 'OK',
      onPress: (password) => console.log('OK Pressed, password: ' + password),
    },
    ],

  
    
      
  
    
      
    
  )
 
}
export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
   
  render(navigation) {
    
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    
    return (
        <View style={styles.all}>
        <Image source={require('../../img/img_bellheader.png')}
                 style={styles.header}
         />
         <TouchableOpacity
             onPress={()=>navigation.navigate('Record')}>
             <Image source={require('../../img/btn_headerright.png')}
                     style={styles.headerright}
             />
         </TouchableOpacity>
         <Text style={styles.title}>紀錄表</Text>
      <View style={styles.container}>
      <Agenda
  // the list of items that have to be displayed in agenda
  items={
    {'2020-08-22': [{text: 'item 1 - any js object'}],
     '2020-07-23': [{text: 'item 2 - any js object'}],
     '2020-06-04': [{text: 'item 3 - any js object'}],
    }}
  // callback that gets called when items for a certain month should be loaded (month became visible)
  loadItemsForMonth={(mongh) => {console.log('trigger items loading')}}
  // callback that gets called on day press
  onDayPress={(day)=>{console.log('day pressed')}}
  // initially selected day
  selected={'2020-05-16'}
  // specify how each item should be rendered in agenda
  renderItem={(item) => {return (<View />);}}
  // specify how each date should be rendered. day can be undefined if the item is not first in that day.
  renderDay={(day, item) => {return (<View />);}}
  // specify how empty date content with no items should be rendered
  renderEmptyDate={() => {return (<View />);}}
  // specify your item comparison function for increased performance
  rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
  // agenda theme
  theme = {{}}
  // agenda container style
  style = {{}} />

        

        <View>
         
        </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 0,
  },
  all:{
        
    position:'absolute',
    backgroundColor:"white",
    height:900,
    
},
header:{
    width:414,
    height:88
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
   marginLeft:177,
   color:"white"
}
});