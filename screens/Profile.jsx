import React, { useContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { MainContext } from '../MainContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const isSaveButtonEnabled = () => {
  return false
};

export const ProfileScreen = ({ navigation }) => {
  const { currentUser } = useContext(MainContext);

  const userFullName = currentUser ? currentUser.fullName : "";
  const userEmail = currentUser ? currentUser.email : "";

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={userFullName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={userEmail}
        />
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
    marginBottom: 30,
    alignItems: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#212121',
    paddingBottom: 10
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    width: 120,
  },
  input: {
    width: '80%',
    width: '100%',
    color: 'white',
    fontSize: 16,
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
  },
  disabledSaveButton: {
    backgroundColor: '#ccc',
  },
});
