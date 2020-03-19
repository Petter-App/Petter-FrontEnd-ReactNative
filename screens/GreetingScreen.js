import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';


export default class GreetingScreen extends Component {
  render() {
    return (
      <View style={styles.greetingscreen}>
      <Text style={styles.header}>noSpringChickens </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  greetingscreen: {
    alignSelf:'stretch',
  },
  header: {
    fontSize:24, 
    color:'#000000',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor:'#199187',
    borderBottomWidth: 1,

  }
});

