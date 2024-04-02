import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const SignUpEmailScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');

    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return true;
        return regex.test(email);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Icon name="arrow-left" size={25} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.title}>Create account</Text>
                <View style={{ width: 25 }}></View>
            </View>
            <Text style={styles.prompt}>What's your email?</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#6a6a6a"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, !isValidEmail(email) && styles.disabledButton]}
                    onPress={() => isValidEmail(email) && navigation.navigate('SignUpPassword', { userEmail: email })}
                    disabled={!isValidEmail(email)}
                >
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
    header: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    prompt: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
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
    disabledButton: {
        backgroundColor: '#ccc',
    },
    buttonText: {
        color: '#151515',
        fontWeight: 'bold',
        fontSize: 16,
    }
});
