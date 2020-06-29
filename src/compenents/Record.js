import React from "react";
import { StyleSheet, Text, View, Image,ScrollView,TouchableOpacity} from "react-native";
import { TextInput } from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';


const Record =({navigation})=>{
    
    LocaleConfig.locales['fr'] = {
        monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
        monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
        dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
        dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.'],
        today: 'Aujourd\'hui'
      };
      LocaleConfig.defaultLocale = 'fr';
    return(
        <View style={styles.all}>
           <Image source={require('../../img/img_bellheader.png')}
                    style={styles.header}
            />
             <TouchableOpacity
                onPress={()=>navigation.navigate('Setting')}>
                <Image source={require('../../img/btn_headerright.png')}
                        style={styles.headerleft}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>navigation.navigate('Record')}>
                <Image source={require('../../img/btn_headerright.png')}
                        style={styles.headerright}
                />
            </TouchableOpacity>
            <Text style={styles.title}>紀錄表</Text>
            <Calendar

// Initially visible month. Default = Date()
current={'2012-03-01'}
// Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
minDate={'2012-05-10'}
// Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
maxDate={'2012-05-30'}
// Handler which gets executed on day press. Default = undefined
onDayPress={(day) => {console.log('selected day', day)}}
// Handler which gets executed on day long press. Default = undefined
onDayLongPress={(day) => {console.log('selected day', day)}}
// Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
monthFormat={'yyyy MM'}
// Handler which gets executed when visible month changes in calendar. Default = undefined
onMonthChange={(month) => {console.log('month changed', month)}}
// Hide month navigation arrows. Default = false
hideArrows={true}
// Replace default arrows with custom ones (direction can be 'left' or 'right')
renderArrow={(direction) => (<Arrow/>)}
// Do not show days of other months in month page. Default = false
hideExtraDays={true}
// If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
// day from another month that is visible in calendar page. Default = false
disableMonthChange={true}
// If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
firstDay={1}
// Hide day names. Default = false
hideDayNames={true}
// Show week numbers to the left. Default = false
showWeekNumbers={true}
// Handler which gets executed when press arrow icon left. It receive a callback can go back month
onPressArrowLeft={substractMonth => substractMonth()}
// Handler which gets executed when press arrow icon right. It receive a callback can go next month
onPressArrowRight={addMonth => addMonth()}
// Disable left arrow. Default = false
disableArrowLeft={true}
// Disable right arrow. Default = false
disableArrowRight={true}
/>
        </View>
    )
};
const styles = StyleSheet.create({
    all:{
        
        position:'absolute',
        backgroundColor:"white",
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
        marginLeft:0
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
  
  export default  Record;