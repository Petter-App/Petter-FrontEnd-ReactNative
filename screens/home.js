import React, { Component } from 'react';
import { Image, ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { Analytics } from 'aws-amplify'

Analytics.configure({ disabled: true })


const image = { uri: "https://storage.pixteller.com/designs/designs-images/2020-07-02/02/paws-placeholder-1-5efd20a15f0f0.png" };




export default function LandingScreen2({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>

      <View style={styles.searchImage}>

<Image
  source={require('../assets/images/search.png')}/></View>

      <View style={styles.headerContainer}>
      <Image
            source={require('../assets/images/the-one.png')}
          style={styles.header}/></View>
        <View  style={styles.links}> 
        <TouchableOpacity   onPress={() => navigation.push('PetsPublic')} style={styles.allButton} >
              <Text style={styles.allButtonText} >See All</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.links}>
          <LinearGradient colors={['#FF008A', '#FF4D00']} start={[0.3, 0.1]} style={styles.linearGradient}>

            <TouchableOpacity style={styles.linearButton} onPress={() => navigation.push('PetsPublic')} >
              <Text style={styles.buttonText}>Find a Match</Text>
            </TouchableOpacity>
          </LinearGradient>

          {/* <TouchableOpacity style={styles.linearButton} onPress={() => navigation.push('SignIn')} >
          <LinearGradient colors={['#FF4D00', '#FF008A']} start={[20, 0.20]} style={styles.linearGradient}>
            <Text style={styles.buttonText}>Sign Up/Sign In</Text>
          </LinearGradient>
        </TouchableOpacity> */}

      </View>
        


      </ImageBackground>

    </View>

  );
}

const viewPadding = '5%'


const styles = StyleSheet.create(
  {
    container: {

      flex: 1,
      backgroundColor: '#fff',


    },
    title: {
      fontSize: 38,
      letterSpacing: -0.015,
      color: '#1F1815',
      fontWeight: 'bold',
      padding: viewPadding,
      marginTop: 45,
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

    links: {
      alignItems: "center",
      padding: viewPadding,
    },
    linearButton: {
      padding: viewPadding,
    },

    login: {

      flex: 1,
      position: 'absolute',

      left: 2,
      right: 1,
      top: 18,
      bottom: 39,

      alignItems: 'flex-start',
      textAlign: 'center',

      color: '#1F1815',
      fontWeight: 'bold',

      fontSize: 13,
      lineHeight: 15,

      letterSpacing: 0.04,
      justifyContent: 'space-between',


    },

    register: {

      flex: 1,
      position: 'absolute',

      left: 2,
      right: 1,
      top: 18,
      bottom: 29,

      alignItems: 'flex-end',
      textAlign: 'center',
      justifyContent: 'space-between',

    },

    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },

    landingscreen: {
      alignSelf: 'stretch',
      justifyContent: 'center'


    },

    headerContainer: {

      width: '100%',

    },

    header: {

      flex: 1,
      flexDirection: 'row',


      position: 'absolute',

      left: 104,

      paddingBottom: 10,
      marginTop: -30,

      fontSize: 38,
      letterSpacing: -0.015,
      color: '#1F1815',
      fontWeight: 'bold',

      textAlign: 'center',
      alignItems: 'center',
    },

    heading2Container: {
      width: '100%',

    },
    heading2: {

      flex: 2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch',

      alignSelf: 'center',
      position: 'absolute',

      left: 106,
      top: 80,
      marginTop: 20,


      fontSize: 24,
      lineHeight: 27,

      color: '#000000',

      letterSpacing: -0.015,
    },


    heading10Container: {
      width: '100%',

    },
    heading10: {

      flex: 2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch',

      alignSelf: 'center',
      position: 'absolute',

      left: 126,
      top: 330,
      marginTop: 20,


      fontSize: 13,
      lineHeight: 27,

      color: '#000000',

      letterSpacing: -0.015,
    },


    heading3Container: {
      width: '100%',
      height: '100%',
    },

    heading3: {

      flex: 1,
      fontSize: 13,
      color: '#000000',
      alignItems: 'stretch',
      justifyContent: 'center',

      left: -55.4,
      top: 315,

      marginTop: 0.2,
      marginLeft: 89,

    },

    footerContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      alignSelf: 'center',
      marginTop: 0,
      width: '100%',
      height: '100%',
    },

    heading4Container: {
      width: '100%',
      height: '100%',

    },

    heading4: {

      flex: 1,

      position: 'absolute',



      flex: 2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch',

      alignSelf: 'center',
      position: 'absolute',

      left: 106,
      top: 80,
      marginTop: 20,


      fontSize: 24,
      lineHeight: 27,

      color: '#000000',

      letterSpacing: -0.015,

    },


    contentContainer: {
      flex: 1,
      paddingTop: 30,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: (Platform.OS === 'ios') ? 20 : 0

    },

    petImageContainer: {

      flex: 1,
      position: 'absolute',


      marginLeft: 10,

      alignSelf: 'center',
      left: 3,



    },

    petImage: {
      left: 15,
      right: 80,
      bottom: 200,

      marginTop: 350,

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
    buttonContainer: {

      flex: 1,
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'center',
      position: 'absolute',
      alignSelf: 'center',


      width: '100%',
      height: '80%',


    },

    buttonText: {

      backgroundColor: 'transparent',
      fontSize: 18,
      color: '#FFFFFF',
      bottom: 19,

    },


    linearGradient: {


      padding: 25,
      alignItems: 'center',
      borderRadius: 5,
      position: 'relative',
      alignSelf: 'center',


      width: 157,

      left: 10,
      right: 0,
      top: 10,

      width: 180,
      height: 50,

      paddingBottom: 10,

      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 10,
      elevation: 3,
      backgroundColor: 'white',

      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 1, height: 3 },
          shadowOpacity: 0.2,
        }
      })
    },

    allButton:{

        padding: 25,
        alignItems: 'center',
        borderRadius: 5,
        position: 'relative',
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: '#FF008A',

  
  
        width: 157,
  
        left: 10,
        right: 0,
        top:38,
  
        width: 180,
        height: 50,
  
        paddingBottom: 10,
  
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        backgroundColor: 'white',
  
        ...Platform.select({
          ios: {
            shadowColor: '#000',
            shadowOffset: { width: 1, height: 3 },
            shadowOpacity: 0.2,
          }
        })
    },

    allButtonText:{

        color:'#FF008A',
        fontSize: 18,
        bottom: 12,


    }
    ,

    linkContainer: {
      flex: 1,
      flexDirection: 'row',
      marginTop: 5,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'space-between',
      position: 'absolute',
      width: '80%',
      height: '85%',
      alignSelf: 'center',

    },

    login: {

      flex: 1,
      position: 'absolute',

      left: 2,
      right: 1,
      top: 18,
      bottom: 39,

      alignItems: 'flex-start',
      textAlign: 'center',

      color: '#1F1815',
      fontWeight: 'bold',

      fontSize: 13,
      lineHeight: 15,

      letterSpacing: 0.04,
      justifyContent: 'space-between',


    },

    searchImage: {

      flex: 1,
      position: 'absolute',

      left: 2,
      right: 1,
      top: 200,
      bottom: 10,

      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'space-between',

    },
  });