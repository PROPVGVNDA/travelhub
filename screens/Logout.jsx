import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MainContext } from '../MainContext.js';
import Icon from 'react-native-vector-icons/FontAwesome';

export const LogoutScreen = ({ navigation }) => {
    const { logoutUser } = useContext(MainContext);

    const handleContinue = () => {
        logoutUser();
        navigation.navigate('Initial');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Icon name="arrow-left" size={25} color="#fff" />
            </TouchableOpacity>
            <View style={styles.notice}>
                <Text style={styles.titleNotice}>Press Continue to log out</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={handleContinue}>Continue</Text>
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
        paddingHorizontal: 20,
        paddingTop: 70
    },
    backButton: {
        position: 'absolute',
        top: 75,
        left: 25,
        zIndex: 1,
    },
    notice: {
        flexGrow: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 70,
    },
    titleNotice: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    button: {
        marginTop: 30,
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
