import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';


export default function LandingScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
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
           colors={['#FF008A', '#FF4D00']}
           start={[20, 0.20]}
          style={styles.linearGradient}>
          <Text
            style={styles.buttonText}>
Browse
          </Text>
</LinearGradient>

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
    justifyContent:'center'

  },

  header: {

    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',

    position: 'relative',
    height: 223,
    left: 13,
    top: 106,

    paddingBottom: 10,
    marginTop:20,

    fontSize: 28,
    lineHeight: 31,  
    letterSpacing: -0.015,  
    color:'#1F1815',
    fontWeight:'bold',

    textAlign: 'center',
    alignItems: 'center',
  },

  heading2: {

    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    position: 'relative',
    height: 27,
    top: 102,

    fontSize: 24,
    lineHeight: 27,

    color:'#000000',

    textAlign: 'center',
    alignItems: 'center',
    letterSpacing: -0.015,
  },

  heading3: {

    flex:1,
    fontSize:18, 
    color:'#000000',
    alignItems:'stretch',
    justifyContent:'center',


    marginTop: 380,
    marginLeft: 125,
    height: 100,
    
  },

  footerContainer:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    textAlign:'center',
    alignSelf:'center'
  },

  heading4: {

    flex:1,
    position:'relative',
    fontSize:14, 
    color:'#000000',

    paddingBottom: 10,
    marginBottom: 40,
    justifyContent: 'center',


    alignItems: 'center',
    marginLeft: 125,
    height: 100,

  },

  contentContainer: {
    paddingTop: 30,
  },

  petImageContainer: {

    flex:1,
    position: 'absolute',


    marginTop: 10,
    marginBottom: 20,
    textAlign:'center',
    marginLeft:20,
    alignSelf:'center',
    left:'03%',


    
  },

  petImage: {

    marginTop: 340,
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    textAlign:'center',

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


  buttonContainer:{
  
    flex:1,
    flexDirection:'row',
    alignItems: 'stretch',
    marginTop: 80,
    justifyContent:'center'

  },

  buttonText:{
    
      backgroundColor: 'transparent',
      fontSize: 15,
      color: '#fff',
  },

  linearGradient:{

    padding: 15,
    alignItems: 'center', 
    borderRadius: 5,
    position: 'relative',


    width: 157,
    height: 46,
    left: 10,
    right: 0,
    top: 0,


    marginTop: 180,
    paddingBottom: 10,
    marginBottom: 40,

  }
});
