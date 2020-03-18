import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class GreetingScreen extends Component {
  render() {
    return (
      <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
        <Text>noSpringChickens</Text>
      </View>,
      <View>
          <text>match adopt chill</text>
      </View>,
       <View style={styles.petImageContainer}>
       <Image
         source={require('../assets/images/dog.jpg')}
         style={styles.petImage}
       />
     </View>,
     <View style={styles.petsPageBodyContainer}>
       <Text style={styles.petsPageBodyText}>No exercise, cuddles please!</Text>
     </View>
    );
  }
}