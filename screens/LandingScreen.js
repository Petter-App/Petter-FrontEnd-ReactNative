import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { RectButton} from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';


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
      <View style={styles.petImageContainer}>
          <Image
            source={require('../assets/images/dog.jpg')}
            style={styles.petImage}
          />
        </View>
        <View style={styles.landingingscreen}>
      <Text style={styles.heading3}>No exercise, cuddles please!</Text>
      </View>
      <View style={styles.landingingscreen}>
      <Text style={styles.heading3}>Elton_john</Text>
      </View>
      <OptionButton
        icon="ios-log-in"
        label="Log In"
        onPress={() => WebBrowser.openBrowserAsync('')}
     /><OptionButton
        icon="md-person-add"
        label="Sign Up"
        onPress={() => WebBrowser.openBrowserAsync('')}
      />
            <OptionButton
        icon="ios-build"
        label="Update Profile"
        onPress={() => WebBrowser.openBrowserAsync('')}
        isLastOption
      />

      </ScrollView>
</View>
    );
  }


  function OptionButton({ icon, label, onPress, isLastOption }) {
    return (
      <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.optionIconContainer}>
            <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>{label}</Text>
          </View>
        </View>
      </RectButton>
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
    fontSize:28, 
    color:'#000000',
    paddingBottom: 10,
    marginBottom: 40,
    textAlign: 'center',
    alignItems: 'center',
  },

  heading2: {
    fontSize:24, 
    color:'#000000',
    paddingBottom: 10,
    marginBottom: 40,
    textAlign: 'center',
    alignItems: 'center',
  },

  heading3: {
    fontSize:24, 
    color:'#000000',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor:'#199187',
    borderBottomWidth: 1,
  },

  contentContainer: {
    paddingTop: 30,
  },
  petImageContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  petImage: {
    width: 500,
    height: 400,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
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
  navigationFilename: {
    marginTop: 5,
  },
  linkContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  Link: {
    paddingVertical: 15,
  },
  LinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});


