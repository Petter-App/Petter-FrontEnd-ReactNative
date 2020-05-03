import React from "react";
import { SignIn } from "aws-amplify-react";
import { StyleSheet, Text, View } from 'react-native';


export class CustomSignIn extends SignIn {
    constructor(props) {
        super(props);
        this._validAuthStates = ["signIn", "signedOut", "signedUp"];
    }

    showComponent(theme) {
        return (
            <View>
                <Text> Hey</Text>
            </View>
        )
    }
}