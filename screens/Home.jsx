import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const buttons = [
  { title: 'Travel', navigateTo: 'Book' },
  { title: 'Cart', navigateTo: 'Cart' },
  { title: 'Profile', navigateTo: 'Profile' },
  { title: 'Log out', navigateTo: 'Logout' },
];

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => navigation.navigate(button.navigateTo)}
        >
          <Text style={styles.buttonText}>{button.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
    alignItems: 'flex-start',
    paddingTop: 70,
    paddingHorizontal: 20,
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
    alignItems: 'left'
  },
  button: {
    marginTop: 20,
    backgroundColor: '#ff9000',
    borderRadius: 5,
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#151515',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
