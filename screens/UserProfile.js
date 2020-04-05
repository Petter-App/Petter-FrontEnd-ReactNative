import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



export default function UserProfile() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.userprofilescreen}>
        <Text style={styles.header}>Profile </Text>
        </View>
        <View style={styles.userprofilescreen}>
        <Text style={styles.heading2}>Change your email</Text>
        </View>
        <View style={styles.userprofilescreen}>
        <Text style={styles.heading2}>Change your password</Text>
        </View>
        <View style={styles.userprofilescreen}>
        <Text style={styles.heading2}>Change your preferences</Text>
        </View>
        </ScrollView>
        </View>
           );
        }



        
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    landingscreen: {
      alignSelf:'stretch',
    },
  
    header: {
  
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',    
      width: 354,
      height: 223,  
      left: 6,
      top: 148,
  
      fontSize:28, 
      color:'#000000',
      paddingBottom: 10,
      marginBottom: 40,
      textAlign: 'center',
      alignItems: 'center',
      textShadowColor: 'rgba(0, 0, 0, 0.25)',
      textShadowOffset: {width: 4, height: 4},
      textShadowRadius: 10
    },
  
    heading2: {
  
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',    
      width: 354,
      height: 223,
      left: -32,
      top: 191,
      fontSize:24, 
      color:'#000000',
      paddingBottom: 10,
      marginBottom: 40,
      textAlign: 'center',
      alignItems: 'center',
    },

});
