import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const SignUpPasswordScreen = ({ navigation }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Create account</Text>
            </View>
            <Text style={styles.prompt}>Create a password</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Enter your password" placeholderTextColor="#6a6a6a" secureTextEntry={!passwordVisible} />
                <TouchableOpacity onPress={togglePasswordVisibility} style={styles.icon}>
                    <Icon name={passwordVisible ? 'eye' : 'eye-slash'} size={25} color="#fff" />
                </TouchableOpacity>
            </View>
            <Text style={styles.notice}>Use at least 10 characters.</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUpName')}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#151515',
        alignItems: 'flex-start',
        paddingTop: 70,
        paddingHorizontal: 20
    },
    icon: {
        position: 'absolute',
        right: 15,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20
    },
    prompt: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    notice: {
        color: 'white',
        fontSize: 10,
        paddingTop: 5
    },
    inputContainer: {
        width: '100%',
    },
    input: {
        width: '80%',
        height: 50,
        width: '100%',
        borderWidth: 0,
        backgroundColor: '#212121',
        color: '#c6c6c6',
        paddingLeft: 10,
        borderRadius: 5
    },
    buttonContainer: {
        width: '100%',
        marginTop: 30,
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#ff9000',
        borderRadius: 25,
        paddingVertical: 15,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#151515',
        fontWeight: 'bold',
        fontSize: 16,
    }
});
