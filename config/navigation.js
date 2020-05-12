import React from 'react';
import { Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Pets from '../screens/Pets';
import Account from '../screens/Account';
import Loading from '../screens/Loading';
import LandingScreen from '../screens/LandingScreen';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import { SignIn, SignUp } from 'aws-amplify-react';
import Auth from 'aws-amplify'

Amplify.configure(awsconfig);


const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Landing" component={LandingScreen} />
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="SignUp" component={SignUp} />

    {/* <authStack.Screen name="SignIn" component={SignIn} />
    <authStack.Screen name="SignUp" component={SignUp} />
    <authStack.Screen name="PublicPets" component={PublicPets} /> */}
  </AuthStack.Navigator>
);

const BottomTab = createBottomTabNavigator();
const BottomTabScreen = () => (
  <BottomTab.Navigator>
    <BottomTab.Screen name="Pets" component={Pets} />
    <BottomTab.Screen name="Account" component={Account} />
  </BottomTab.Navigator>
)

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [authState, setAuthState] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 500);
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? <Loading /> : authState ? <AuthStackScreen /> : <BottomTabScreen />}
    </NavigationContainer>
  )
};