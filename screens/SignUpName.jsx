import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export const SignUpNameScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Create account</Text>
            </View>
            <Text style={styles.prompt}>What's your name?</Text>
            <TextInput style={styles.input} placeholder="Enter your first name" placeholderTextColor="#6a6a6a" />
            <TextInput style={styles.input} placeholder="Enter your middle name if any" placeholderTextColor="#6a6a6a" />
            <TextInput style={styles.input} placeholder="Enter your last name" placeholderTextColor="#6a6a6a" />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUpFinish')}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#151515', // Black background
        alignItems: 'flex-start',
        paddingTop: 70,
        paddingHorizontal: 20
    },
    header: {
        width: '100%',
        alignItems: 'center',
    },
    title: {
        color: '#fff', // White text
        fontSize: 16, // Font size 24
        fontWeight: 'bold', // Bold font weight
        marginBottom: 20
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
        marginBottom: 15,
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
