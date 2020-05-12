import * as React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Authenticator, SignIn, withAuthenticator } from "aws-amplify-react-native";
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import Auth from 'aws-amplify'

Amplify.configure(awsconfig);


function Account({ navigation }) {

  signOutAlert = async () => {
    await Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        { text: 'Cancel', onPress: () => console.log('Canceled'), style: 'cancel' },
        // Calling signOut
        { text: 'OK', onPress: () => signOut() },
      ],
      { cancelable: false }
    )
  }

  signOut = async () => {
    console.log('signout')
    await Auth.Auth.signOut()
      .then(() => {
        console.log('Sign out complete')
        navigation.navigate('Pets')
      })
      .catch(err => console.log('Error while signing out!', err))
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.header}>Account Settings</Text>
        </View>
        <OptionButton
          icon="ios-build"
          label="Update Profile"
          onPress={() => WebBrowser.openBrowserAsync('')} />
        <OptionButton
          icon="ios-rocket"
          label="Go to PetRescue"
          onPress={() => WebBrowser.openBrowserAsync('https://www.petrescue.com.au/')}
        />
        <OptionButton
          icon="ios-rocket"
          label="Sign Out"
          onPress={() => signOutAlert()}
          isLastOption
        />
      </View>
    </ScrollView>
  );
}

export default withAuthenticator(Account);

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
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 50,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  header: {
    fontSize: 28,
    lineHeight: 31,
    letterSpacing: -0.015,
    color: '#1F1815',
    fontWeight: 'bold',

    textAlign: 'center',
    alignItems: 'center',
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
