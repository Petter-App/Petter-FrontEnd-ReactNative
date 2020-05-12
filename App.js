import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import useLinking from './config/useLinking';
import ScreenContainer from './screens/ScreenContainer';
import { AuthWrapper } from './screens/AuthWrapper';
import Navigation from './config/Navigation';


export default () => <Navigation />;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
