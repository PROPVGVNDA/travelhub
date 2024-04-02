import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { MainContext } from '../MainContext.js';
import Icon from 'react-native-vector-icons/FontAwesome';

export const LoginScreen = ({ navigation }) => {
  const { loginUser, users } = useContext(MainContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    const foundUser = users.find(user => user.email === email && user.password === password);
    if (foundUser) {
      loginUser(foundUser);
      navigation.navigate('Home');
    } else {
      setErrorMessage('This email and password combination is incorrect');
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={25} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Log in</Text>
        <View style={{ width: 25 }}></View>
      </View>
      <View style={styles.promptContainer}>
        <Text style={styles.prompt}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#6a6a6a"
          onChangeText={setEmail}
          value={email}
        />
      </View>
      <View style={styles.promptContainer}>
        <Text style={styles.prompt}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Enter your password"
            placeholderTextColor="#6a6a6a"
            onChangeText={setPassword}
            value={password}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.icon}>
            <Icon name={passwordVisible ? 'eye' : 'eye-slash'} size={25} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      {errorMessage !== '' && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errorMessage}</Text>
        </View>
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log in</Text>
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
  promptContainer: {
    paddingBottom: 15,
    width: '100%',
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
  buttonText: {
    color: '#151515',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorContainer: {
    width: '100%',
    alignItems: 'left',
    marginBottom: 10,
  },
  errorText: {
    color: 'white',
    fontSize: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#212121',
    borderRadius: 5,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    borderWidth: 0,
    color: '#c6c6c6',
    paddingLeft: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  icon: {
    paddingHorizontal: 10,
  },
});
