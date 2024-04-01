import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export const InitialScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TravelHub</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUpEmail')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 60,
    paddingBottom: 60,
  },
  title: {
    color: '#fff',
    fontSize: 34,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    marginBottom: 200
  },
  button: {
    backgroundColor: '#ff9000',
    padding: 15,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 5,
    width: 200,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
