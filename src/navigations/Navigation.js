import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, AsyncStorage } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen } from 'expo';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import LoginScreen from "../screens/LoginScreen";
import ChooseScreen from "../screens/ChooseScreen";
import SignupScreen from "../screens/SingupScreen";
import BellScreen from "../screens/BellScreen";

import PostScreen from "../screens/PostScreen";
import RecordScreen from "../screens/RecordScreen";
import SettingScreen from "../screens/SettingScreen";

import { StoreContext, StoreProvider } from "../stores/index";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()
const PERSISTENCE_KEY = "NAVIGATION_STATE";
function Tabnavigation() {
  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconPath;
          if (route.name === '生活紀錄') {
            iconPath = focused
              ? require('../../img/icon_tab1.png') :
              require('../../img/icon_tab1.png');
          }
          else if (route.name === "紀錄表") {
            iconPath = focused
              ? require('../../img/icon_tab2.png') :
              require('../../img/icon_tab2.png');
          }
          else if (route.name === "設定") {
            iconPath = focused
              ? require('../../img/icon_tab3.png') :
              require('../../img/icon_tab3.png');
          }
          return (
            <Image
              style={{ width: 30, height: 30 }}
              source={iconPath} />
          );
        },
      })}
      tabBarOptions={{
        activeBackgroundColor: "#409EFF",
        inactiveBackgroundColor: "#409EFF",

        activeTintColor: 'orange',
        inactiveTintColor: 'white',
        labelStyle: {

          fontSize: 12,
          marginTop: 0,
          paddingTop: 0,
          marginBottom: 10,
          paddingBottom: 0
        },

        style: { height: 83 },
        safeAreaInsets: {
          bottom: 0,
        },
        tabStyle: styles.tabStyle
      }}

    >

      <Tab.Screen name="生活紀錄" component={PostScreen} title="" />
      <Tab.Screen name="紀錄表" component={RecordScreen} title="" />
      <Tab.Screen name="設定" component={SettingScreen} title="" />
    </Tab.Navigator>

  )
}
function Navigation() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();

  // const { isLoginState } = useContext(StoreContext);
  // const [isLogin, setIsLogin] = isLoginState;

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString);
        setInitialNavigationState(state);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return  (



      <NavigationContainer
        initialState={initialNavigationState}
        onStateChange={(state) =>
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
        }
        options={{
          safeAreaInsets: {
            bottom: 0,
          }
        }}
      >
        <Image source={require("../../img/img_backimg.png")}
          style={styles.backimg} />
        <Stack.Navigator>

          <Stack.Screen name="Login"
            component={LoginScreen}
            options={{
              title: null
            }}

          />
          <Stack.Screen name="Choose"
            component={ChooseScreen}
            options={{
              title: null
            }}
          />
          <Stack.Screen name="Singup"
            component={SignupScreen}
            options={{
              title: null
            }}
          />
          <Stack.Screen name="Bell"
            component={BellScreen}
            options={{
              title: null
            }}
          />
          <Stack.Screen name="Post"
            component={Tabnavigation}
            options={{
              title: null
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backimg: {
    marginTop: -421,

  },
  tabStyle: {
    // backgroundColor:　'linear-gradient(#e66465, #9198e5)',
  }
});

export default Navigation;