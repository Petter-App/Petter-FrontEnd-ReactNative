import React from "react";
import { SignIn } from "aws-amplify-react";
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, Text, Button, View } from 'react-native';
import {Platform} from 'react-native';


import { withAuthenticator } from 'aws-amplify-react-native';
import Amplify from 'aws-amplify';
// Get the aws resources configuration parameters
import awsconfig from '../aws-exports'; // if you are using Amplify CLI

Amplify.configure(awsconfig);


function ConfirmSignIn({ navigation }) {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.contentContainer}>

                <View style={styles.petsPageBodyContainer}>
                    <Text style={styles.petsPageBodyText}>You're good to go.</Text>
                    <Button title="Go look at some pets!" onPress={() => navigation.push('BottomStack', { screen: 'BottomTab' })} />
                </View>

            </View >
        </ScrollView>


    );
}

export default withAuthenticator(ConfirmSignIn, { usernameAttributes: 'email' })


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingTop: 50,
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
    header: {
        fontSize: 28,
        lineHeight: 31,
        letterSpacing: -0.015,
        color: '#1F1815',
        fontWeight: 'bold',

        textAlign: 'center',
        alignItems: 'center',
    },
});
