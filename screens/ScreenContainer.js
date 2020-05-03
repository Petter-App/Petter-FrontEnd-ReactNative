import React from 'react'
import 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountScreen from './AccountScreen';
import LandingScreen from './LandingScreen';
import PetsScreen from './PetsScreen';

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
