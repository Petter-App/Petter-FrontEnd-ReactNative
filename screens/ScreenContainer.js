import React from 'react'
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Authenticator, SignIn } from "aws-amplify-react-native";
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import { CustomSignIn } from './CustomSignIn';
import Auth from 'aws-amplify';

Amplify.configure(awsconfig);

import AccountScreen from './Account';
import LandingScreen from './LandingScreen';
import PetsScreen from './Pets';

const Tab = createBottomTabNavigator();

export default function ScreenContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={LandingScreen} />
                <Tab.Screen name="Pets" component={PetsScreen} />
                <Tab.Screen name="Settings" component={AccountScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
