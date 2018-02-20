import React from 'react';
import {View,TextInput, TouchableOpacity,Text,KeyboardAvoidingView,ScrollView} from "react-native";

import styles from './styles'

const Login = ({email, password, handleOnChangeEmail,handleOnChangePassword,handleSubmitData}) => (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding">

        <ScrollView contentContainerStyle={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.headerLogin}/>
                <View style={styles.inputbox}>
                    <View style={styles.input_container}>
                        <TextInput
                            style ={styles.input}
                            placeholder="Email or Username"
                            keyboardType="email-address"
                            underlineColorAndroid="transparent"
                            placeholderTextColor = "#fafafa"
                            value={email}
                            onChangeText={handleOnChangeEmail}
                        />
                    </View>
                    <View style={styles.input_container}>
                        <TextInput
                            style ={styles.input}
                            placeholder="Password"
                            keyboardType="email-address"
                            secureTextEntry ={true}
                            placeholderTextColor = "#fafafa"
                            underlineColorAndroid="transparent"
                            value={password}
                            onChangeText={handleOnChangePassword}
                        />
                    </View>

                    <TouchableOpacity onPress={handleSubmitData} style={styles.textContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.textButton}>GO</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
);

export default Login;