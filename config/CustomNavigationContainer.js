import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pets from '../screens/Pets';
import Account from '../screens/Account';
import Loading from '../screens/Loading';
import PetsPublic from '../screens/PetsPublic';
import LandingScreen2 from '../screens/LandingScreen2';
import tinderswiper from '../screens/tinderswiper';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import Auth from 'aws-amplify';
import { Analytics } from 'aws-amplify';
import Register from '../screens/Register';
import home from '../screens/home';
import ConfirmSignIn from '../screens/ConfirmSignIn';
import savedPets from '../screens/savedPets';
import petProfile from '../screens/petProfile';


Amplify.configure(awsconfig);
Analytics.configure({ disabled: true })


const GuestStack = createStackNavigator();
const GuestStackScreen = () => (
  <GuestStack.Navigator>
    <GuestStack.Screen name="Landing" component={LandingScreen2} options={{
      headerShown: false,
      headerTitle: "Go Back"
    }} />
    <GuestStack.Screen name="SignIn" component={ConfirmSignIn} />
    <GuestStack.Screen name="PetsPublic" component={PetsPublic} options={{
      headerShown: false,
      headerTitle: "Go Back"
    }} />
        <GuestStack.Screen name="home" component={home} options={{
      headerShown: false,
      headerTitle: "Go Back"
    }} />
            <GuestStack.Screen name="savedPets" component={savedPets} options={{
      headerShown: false,
      headerTitle: "Go Back"
    }} />

<GuestStack.Screen name="petProfile" component={petProfile} options={{
      headerShown: false,
      headerTitle: "Go Back"
    }} />
            <GuestStack.Screen name="tinderswiper" component={tinderswiper} options={{
      headerShown: false,
      headerTitle: "Go Back"
    }} />
    <GuestStack.Screen name="BottomStack" component={BottomStackScreen} options={{
      headerShown: false,
    }} />
  </GuestStack.Navigator>
);

const BottomStack = createStackNavigator();
const BottomStackScreen = () => (
  <BottomStack.Navigator>
    <BottomStack.Screen name="BottomTab" component={BottomTabScreen} options={{
      headerShown: false
    }} />
    <BottomStack.Screen name="GuestStack" component={GuestStackScreen} options={{
      headerShown: false
    }} />
  </BottomStack.Navigator>
)

const BottomTab = createBottomTabNavigator();
const BottomTabScreen = () => (
  <BottomTab.Navigator>
    <BottomTab.Screen name="Pets" component={Pets} />
    <BottomTab.Screen name="Account" component={Account} />
  </BottomTab.Navigator>
)

export default function Navigation() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [authState, setAuthState] = React.useState('loading');

  React.useEffect(() => {
    try {
      const user = Auth.currentAuthenticatedUser()
      console.log(user)
      setAuthState('authenticated')
    } catch (err) {
      setAuthState('unauthenticated')
    }
    console.log(authState)
  })

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 500);
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? <Loading /> : authState === 'authenticated' ? <BottomTabScreen /> : <GuestStackScreen />}
    </NavigationContainer>
  )
};