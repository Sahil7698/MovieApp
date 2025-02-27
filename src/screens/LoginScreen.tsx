import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import useCustomNavigation from '../hooks/useCustomNavigation';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useCustomNavigation('HomeScreen');
  const [isLoading, setIsLoading] = useState(false);

  const loginButtonClick = (emailUser: string, passwordUser: string) => {
    console.log('jygeruyweuyrkehkur', email, password);
    setIsLoading(true);
    try {
      fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          username: emailUser,
          password: passwordUser,
          //   username: 'emilys',
          //   password: 'emilyspass',
          expiresInMins: 30, // optional, defaults to 60
        }),
        credentials: 'include', // Include cookies (e.g., accessToken) in the request
      })
        .then(res => {
          res.json();
          console.log('9898989898989', res);
          navigation.navigate('HomeScreen');
          setIsLoading(false);
        })
        .then(console.log);
    } catch {}
  };

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Login</Text>
      <TextInput
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Enter Email"
        style={styles.inputStyle}
        textContentType="emailAddress"
      />
      <TextInput
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Enter Password"
        style={styles.inputStyle}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          loginButtonClick(email, password);
        }}>
        <Text style={styles.loginButtonText}>{'Login'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  inputStyle: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 15,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 700,
  },
  loginButton: {
    backgroundColor: '#C41E3A',
    width: '80%',
    borderRadius: 15,
    marginTop: 10,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: 700,
  },
});
