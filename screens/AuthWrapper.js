import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Authenticator, SignIn } from "aws-amplify-react-native";
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import { CustomSignIn } from './CustomSignIn';
import Auth from 'aws-amplify'
import { AccountScreen } from './AccountScreen';
import { ScreenContainer } from './ScreenContainer';

Amplify.configure(awsconfig);

function AuthWrapper(props) {

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.contentContainer}>
                <ScreenContainer />
            </View>
        </ScrollView>
    );
}

export default AuthWrapper


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
