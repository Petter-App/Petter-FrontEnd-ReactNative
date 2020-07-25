import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import PetScreen from '../screens/PetsScreen';
import AccountScreen from '../screens/AccountScreen';
import PublicBrowse from '../screens/PublicBrowse';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Account';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
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
            <BottomTab.Screen
        name="PublicBrowse"
        component={PublicBrowse}
        options={{
          title: 'PublicBrowse',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="PublicBrowse" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Pets':
      return 'Look at some pets';
    case 'Account':
      return 'Play with your account';
  }
}


