import React from 'react';
import { Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pets from '../screens/Pets';
import Account from '../screens/Account';
import Loading from '../screens/Loading';
import PublicPets from '../screens/PublicPets';
import LandingScreen from '../screens/LandingScreen';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignUp, AmplifySignOut } from '@aws-amplify/ui-react';
import Auth from 'aws-amplify'
import ConfirmSignIn from '../screens/ConfirmSignIn';
Amplify.configure(awsconfig);


const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Landing" component={LandingScreen} options={{
      headerShown: false,
      headerTitle: "back"
    }} />
    <AuthStack.Screen name="SignIn" component={ConfirmSignIn} />
    <AuthStack.Screen name="PublicPets" component={PublicPets} options={{
      headerShown: false
    }} />
    <AuthStack.Screen name="BottomStack" component={BottomStackScreen} options={{
      headerShown: false,
    }} />
  </AuthStack.Navigator>
);

const BottomStack = createStackNavigator();
const BottomStackScreen = () => (
  <BottomStack.Navigator>
    <BottomStack.Screen name="BottomTab" component={BottomTabScreen} options={{
      headerShown: false
    }} />
    <BottomStack.Screen name="AuthStack" component={AuthStackScreen} options={{
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

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [authState, setAuthState] = React.useState('loading');

  React.useEffect(() => {
    try {
      const user = Auth.currentAuthenticatedUser()
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
      {isLoading ? <Loading /> : authState === 'authenticated' ? <BottomTabScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  )
};