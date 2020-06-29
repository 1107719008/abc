import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import PostScreen from '../screens/PostScreen';
import RecordScreen from '../screens/RecordScreen';
import SettingScreen from '../screens/SettingScreen';
const Tab = createBottomTabNavigator();

const TabNavigation =()=>{
    return(
        
            <Tab.Navigator>
                <Tab.Screen name="生活紀錄" component={PostScreen}/>
                <Tab.Screen name="紀錄表"   component={RecordScreen}/>
                <Tab.Screen name="設定"     component={SettingScreen}/>
            </Tab.Navigator>
       
    )
}
export default TabNavigation;