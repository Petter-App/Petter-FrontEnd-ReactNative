import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';

export default function PetsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.petImageContainer}>
          <Image
            source={require('../assets/images/dog.jpg')}
            style={styles.petImage}
          />
        </View>
        <View style={styles.petsPageBodyContainer}>
          <Text style={styles.petsPageBodyText}>One day you will be able to swipe to see all the elderly pets</Text>
        </View>
        <View style={styles.linkContainer}>
          <TouchableOpacity onPress={handleLinkPress} style={styles.Link}>
            <Text style={styles.linkText}>Click here for fun times</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

    </View>
  );
}

PetsScreen.navigationOptions = {
  header: null,
};


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
});
