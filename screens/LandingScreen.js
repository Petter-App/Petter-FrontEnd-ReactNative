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
      <Text style={styles.heading2}>match.adopt.chill</Text>
      </View>
      <View style={styles.footerContainer}>
      <View style={styles.petImageContainer}>
          <Image
            source={require('../assets/images/elton.jpg')}
            style={styles.petImage}
          />
        </View>
        <View style={styles.landingingscreen}>
      <Text style={styles.heading3}>No exercise, cuddles please!</Text>
      </View>
      <View style={styles.landingingscreen}>
      <Text style={styles.heading4}>Elton_john</Text>
      </View>
      </View>
      <View style={styles.buttonContainer}>

      <LinearGradient
          colors={['#FF4D00', '#FF4D00', '#FF008A']}
          style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>
          <Text
            style={{
              backgroundColor: 'transparent',
              fontSize: 15,
              color: '#fff',
            }}>
Log in
          </Text>
</LinearGradient>
<LinearGradient
          colors={['#FF4D00', '#FF4D00', '#FF008A']}
          style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>
          <Text
            style={{
              backgroundColor: 'transparent',
              fontSize: 15,
              color: '#fff',
            }}>
Register
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
  },

  header: {

    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',    
    width: 354,
    height: 223,  
    left: 6,
    top: 48,

    fontSize:28, 
    color:'#000000',
    paddingBottom: 10,
    marginTop:139,
    marginBottom: 40,
    textAlign: 'center',
    alignItems: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 4, height: 4},
    textShadowRadius: 10
  },

  heading2: {

    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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

  heading3: {
    fontSize:18, 
    color:'#000000',
    paddingBottom: 10,
    marginBottom: 5,
    alignItems:'stretch',
    marginTop: 380,
    marginLeft: 125,
    width: 300,
    height: 100,
    
  },

  footerContainer:{
    flex:2,
    flexDirection:'column',
  },

  heading4: {
    fontSize:14, 
    color:'#000000',
    paddingBottom: 10,
    marginBottom: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 340,
    marginLeft: 20,
    width: 100,
    height: 100,
  },

  contentContainer: {
    paddingTop: 30,
  },

  petImageContainer: {
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    alignItems: 'flex-start',
    marginTop: 10,
    marginBottom: 20,
    

    
  },

  petImage: {

    marginTop: 340,
    marginLeft: 20,
    width: 100,
    height: 100,
    borderRadius: 100 / 2,

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
    flex:2,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

});


