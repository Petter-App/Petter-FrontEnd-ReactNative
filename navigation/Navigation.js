import * as React from 'react';
import { useState } from 'react';
import { createBottomTabNavigator, BottomTabView } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import PetScreen from '../screens/PetsScreen';
import AccountScreen from '../screens/AccountScreen';
import LandingScreen from '../screens/LandingScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Auth } from 'aws-amplify';

const BottomTab = createBottomTabNavigator();

export default function Navigation() {

  const [loggedInUser, setLoggedInUser] = useState('');


  async function SignIn() {
    var username = '';
    var password = '';
    try {
      console.log('login button press')
      const user = await Auth.signIn(username, password).then((data) => {
        setLoggedInUser(data.attributes.email);
      })
    } catch (error) {
      console.log('error signing in', error);
    }
  }

  async function SignOut() {
    try {
      console.log('logout button press')
      await Auth.signOut().then((data) => {
        setLoggedInUser('');
      });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }


  if (loggedInUser === '') {
    var initialScreenName = 'LandingScreen'
  } else {
    var initialScreenName = 'Pets'
  }

  return (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName={initialScreenName}>
        <BottomTab.Screen
          name="Pets"
          component={PetScreen}
          options={{
            title: 'Pets',
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="dog" />,
          }}
        />
        <BottomTab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            title: 'Account',
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="account" />,
          }}
        />
      </BottomTab.Navigator>
      <LandingScreen />
    </NavigationContainer>
  );
}
