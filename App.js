import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Stack from "./src/navigations/Navigation";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDRRFN18Ops4vSrlhTzfnRga0yorTuinFQ",
  authDomain: "app01-d600e.firebaseapp.com",
  databaseURL: "https://app01-d600e.firebaseio.com",
  projectId: "app01-d600e",
  storageBucket: "app01-d600e.appspot.com",
  messagingSenderId: "83022980546",
  appId: "1:83022980546:web:92dfa86f389373bb7ae25b",
  measurementId: "G-FLJCF5WZ9Q"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default function App() {
 
  return (
    <Stack/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
