import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Row } from 'native-base';
import * as WebBrowser from 'expo-web-browser';
import { Analytics } from 'aws-amplify'

Analytics.configure({ disabled: true })

import { MonoText } from '../components/StyledText';
import { getOrientationAsync } from 'expo/build/ScreenOrientation/ScreenOrientation';

export default function LandingScreen2({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>noSpringChickens</Text>
      </View>
      <View style={styles.subTitle}>
        <Text style={styles.subTitle}>match.adopt.chill.</Text>
      </View>
      <View style={styles.tagline}>
        <View style={styles.petImage}>
          <Image
            source={require('../assets/images/elton.jpg')}
            style={styles.petImage}
          />
        </View>
        <Text style={styles.taglineText}>"No exercise, cuddles please!"</Text>
        <Text style={styles.taglineText}>Elton_john</Text>
      </View>
      <View style={styles.links}>
        <TouchableOpacity style={styles.linearButton} onPress={() => navigation.push('PetsPublic')} >
          <LinearGradient colors={['#FF4D00', '#FF008A']} start={[20, 0.20]} style={styles.linearGradient}>
            <Text style={styles.buttonText}>Browse Pets</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linearButton} onPress={() => navigation.push('SignIn')} >
          <LinearGradient colors={['#FF4D00', '#FF008A']} start={[20, 0.20]} style={styles.linearGradient}>
            <Text style={styles.buttonText}>Sign Up/Sign In</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const viewPadding = '5%'


const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#fff',
      width: '100%',
      height: '100%',
    },
    title: {
      fontSize: 38,
      letterSpacing: -0.015,
      color: '#1F1815',
      fontWeight: 'bold',
      padding: viewPadding
    },
    subTitle: {
      fontSize: 24,
      lineHeight: 27,
      color: '#000000',
      letterSpacing: -0.015,
    },
    tagline: {
      flexDirection: "row",
      padding: viewPadding
    },
    taglineText: {
      fontSize: 13,
      color: '#000000',
      letterSpacing: -0.015,
    },
    petImage: {
      width: 70,
      height: 70,
      borderRadius: 70 / 2
    },
    links: {
      alignItems: "center",
      padding: viewPadding
    },
    linearButton: {
      padding: viewPadding
    },
    linearGradient: {
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5,
      width: 200,
      height: 50
    },
    buttonText: {
      fontSize: 18,
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    }
  });