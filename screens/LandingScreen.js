import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Row } from 'native-base';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';



export default function LandingScreen() {
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
      <Text style={styles.heading3}>"No exercise, cuddles please!"</Text>
      <Text style={styles.heading4}>Elton_john</Text>
      </View>
      <View style={styles.buttonContainer}>

      <LinearGradient
           colors={['#FF4D00','#FF008A']}
           start={[20, 0.20]}
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>
Browse
          </Text>
</LinearGradient>

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
    alignSelf:'stretch',
    justifyContent:'center'

  },

  header: {

    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf:'center',

    position: 'absolute',
    width: 355,
    height: 323,
    left: 26,
    top: 80,

    paddingBottom: 10,
    marginTop:150,

    fontSize: 38,
    letterSpacing: -0.015,  
    color:'#1F1815',
    fontWeight:'bold',

    textAlign: 'center',
    alignItems: 'center',
  },

  heading2: {

    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    
    alignSelf:'center',
    position: 'absolute',


    width: 355,
    height: 223,
    left:106,
    top: 80,
    marginTop:220,


    fontSize: 24,
    lineHeight: 27,

    color:'#000000',

    letterSpacing: -0.015,
  },

  heading3: {

    flex:1,
    fontSize:13, 
    color:'#000000',
    alignItems:'stretch',
    justifyContent:'center',

    left: -24.4,
    right: 20.27,
    top:-55,
    bottom: 24.63,

    marginTop: 380,
    marginLeft: 100,
    height: 100,
    
  },

  footerContainer:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    textAlign:'center',
    alignSelf:'center',
    marginTop:200,
  },

  heading4: {

    flex:1,
    color:'#000000',


    justifyContent: 'center',
    alignSelf:'center',


    alignItems: 'center',
    height: 100,
    width: 80, 


    position:'absolute',
    left: 82.53,
    right: 49.6,
    top: 350,
    bottom: 23.15,

    fontSize: 11,
    lineHeight: 13,
    fontWeight: 'bold',


  },

  contentContainer: {
    paddingTop: 30,
  },

  petImageContainer: {

    flex:1,
    position: 'absolute',


    marginTop: 60,
    marginBottom: 20,
    marginLeft:20,
    alignSelf:'center',
    left:3,


    
  },

  petImage: {

    left: -20.71,
    right: 80,
    top: -25.71,
    bottom: 125,

    marginTop: 250,
    width: 70,
    height: 70,
    borderRadius: 70 / 2,

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
    paddingVertical: '0',
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },


  buttonContainer:{
  
    flex:1,
    flexDirection:'row',
    alignItems: 'stretch',
    justifyContent:'center',
    position:'absolute',
    alignSelf:'center',

    left: 14.53,
    right: 20.27,
    top: 82.51,
    bottom: 11.58,
    

  },

  buttonText:{
    
      backgroundColor: 'transparent',
      fontSize: 16,
      color:'#42f55a',
  },

  linearGradient:{

    padding: 10,
    alignItems: 'center', 
    borderRadius: 5,
    position: 'relative',
    alignSelf:'center',


    width: 157,

    left: 10,
    right: 0,
    top: 0,


    marginTop: 580,
    paddingBottom: 10,
    marginBottom: 10,

  },
  linkContainer: {
    flex:1,
    flexDirection:'row',
    marginTop: 5,
    alignItems: 'center',
    alignContent:'center',
    justifyContent:'space-between',
    position:'absolute',
    width:300, 
    height:10,
    alignSelf:'center',

  },

  login:{

    flex:1, 
    position: 'absolute',

    left: 2,
    right: 1,
    top: 18,
    bottom: 39,

    alignItems: 'flex-start',
    textAlign: 'center',

    color:'#1F1815',
    fontWeight:'bold',

    fontSize: 13,
    lineHeight: 15,

    letterSpacing: 0.04,
    justifyContent:'space-between',

    
  },
  
    register:{

    flex:1, 
    position: 'absolute',

    left: 2,
    right: 1,
    top: 18,
    bottom: 29,

    alignItems: 'flex-end',
    textAlign: 'center',
    justifyContent:'space-between',

  }
});
