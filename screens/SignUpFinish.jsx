import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export const SignUpFinishScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.notice}>
        <Text style={styles.titleNotice}>You're all set!</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={() => navigation.navigate('Home')}>Continue</Text>
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
    paddingHorizontal: 20,
    paddingTop: 70
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
