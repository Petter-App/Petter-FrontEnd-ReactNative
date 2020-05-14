import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Button, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import * as WebBrowser from 'expo-web-browser';

export default function LandingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.linkContainer}>
          <TouchableOpacity onPress={handleLinkPress} style={styles.login}>
            <Text style={styles.linkText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.linkContainer}>
          <TouchableOpacity onPress={handleLinkPress} style={styles.register}>
            <Text style={styles.linkText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.landingingscreen}>
          <Text style={styles.header}>noSpringChickens </Text>
        </View>
        <View style={styles.landingingscreen}>
          <Text style={styles.heading2}>match.adopt.chill.</Text>
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.petImageContainer}>
            <Image
              source={require('../assets/images/elton.jpg')}
              style={styles.petImage}
            />
          </View>
          <Button title="Sign In/SignUp" onPress={() => navigation.push('SignIn')} />
          <Button title="Go To Pets" onPress={() => navigation.push('BottomStack', { screen: 'BottomTab' })} />
          <Text style={styles.heading3}>"No exercise, cuddles please!"</Text>
          <Text style={styles.heading4}>Elton_john</Text>
        </View>
        <View style={styles.buttonContainer}>

          <Text
            style={styles.buttonText}>
            Browse
          </Text>

        </View>

      </ScrollView>
    </View>
  );
}

function handleLinkPress() {
  WebBrowser.openBrowserAsync(
    'https://app.slack.com/client/T9QRX4NTA/GS94VLX4H/details'
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  landingscreen: {
    alignSelf: 'stretch',
    justifyContent: 'center'

  },

  header: {

    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'center',

    position: 'absolute',
    width: '355',
    height: '223',
    left: '6',
    top: '111',

    paddingBottom: 10,
    marginTop: 180,

    fontSize: 28,
    lineHeight: 31,
    letterSpacing: -0.015,
    color: '#1F1815',
    fontWeight: 'bold',

    textAlign: 'center',
    alignItems: 'center',
  },

  heading2: {

    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',

    alignSelf: 'center',
    position: 'absolute',


    width: '355',
    height: '223',
    left: '6',
    top: '111',
    marginTop: 220,


    fontSize: 24,
    lineHeight: 27,

    color: '#000000',

    letterSpacing: -0.015,
  },

  heading3: {

    flex: 1,
    fontSize: 13,
    color: '#000000',
    alignItems: 'stretch',
    justifyContent: 'center',


    marginTop: 380,
    marginLeft: 100,
    height: 100,

  },

  footerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 80,
  },

  heading4: {

    flex: 1,
    color: '#000000',


    justifyContent: 'center',
    alignSelf: 'center',


    alignItems: 'center',
    height: 100,
    width: 80,


    position: 'absolute',
    left: '32.53%',
    right: '49.6%',
    top: '100.65%',
    bottom: '23.15%',

    fontSize: 11,
    lineHeight: 13,
    fontWeight: 'bold',


  },

  contentContainer: {
    paddingTop: 30,
  },

  petImageContainer: {

    flex: 1,
    position: 'absolute',


    marginTop: 50,
    marginBottom: 20,
    textAlign: 'center',
    marginLeft: 20,
    alignSelf: 'center',
    left: '03%',



  },

  petImage: {

    left: '-6.71%',
    right: '100%',
    top: '-25.71%',
    bottom: '125%',

    marginTop: 300,
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    textAlign: 'center',

  },

  petsPageBodyContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  petScreenFilename: {
    marginVertical: 7,
  },
  petsPageBodyText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },


  buttonContainer: {

    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',

    left: '14.53%',
    right: '20.27%',
    top: '105.51%',
    bottom: '11.58%',



  },

  buttonText: {

    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },

  linearGradient: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    position: 'relative',
    alignSelf: 'center',


    width: 157,

    left: 10,
    right: 0,
    top: 0,


    marginTop: 180,
    paddingBottom: 10,
    marginBottom: 40,

  },
  linkContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    width: 300,
    height: 1,
    alignSelf: 'center',

  },

  login: {

    flex: 1,
    position: 'absolute',

    left: '9.33%',
    right: '80%',
    top: '8.62%',
    bottom: '89.53%',

    alignItems: 'center',
    textAlign: 'center',

    color: '#1F1815',
    fontWeight: 'bold',

    fontSize: 13,
    lineHeight: 15,

    letterSpacing: 0.04,


  },

  register: {

    flex: 1,
    position: 'absolute',

    left: '74.67%',
    right: '8%',
    top: '8.62%',
    bottom: '89.53%',

    alignItems: 'center',
    textAlign: 'center',
  }
});
