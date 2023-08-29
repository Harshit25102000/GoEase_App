import { StatusBar } from "react-native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,

  Alert
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';



export default function Signup() {
    
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const [prn, setPrn] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation<any>();
  const handleSignup = () => {
    
    fetch('https://6b31-223-236-147-175.ngrok.io/student/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password1,password2,name,prn }),
    })
      .then((response) => response.json())
    
      .then(async (data) => {
        if (data.success && data.data && data.data.status === 'SUCCESS') {
          await AsyncStorage.setItem('email', data.data.email);
          navigation.navigate('Home'); // Or navigation.navigate('Home');
        } else {
          setErrorMessage(data.message || 'Login failed. Please try again.');
        }
      })
      .catch((error) => {
        console.log(error)
        Alert.alert('An error occurred. Please try again later.');
      });

  };
  return (
    <View style={styles.container}>
    
      <StatusBar/>
      <Text style={styles.logotext}>GoEase</Text> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password1) => setPassword1(password1)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password2) => setPassword2(password2)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(name) => setName(name)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="PRN"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(prn) => setPrn(prn)}
        /> 
      </View> 
    
      <TouchableOpacity>
        <Text style={styles.forgot_button} onPress={() => navigation.navigate("Login")}>Already have an account ? Login</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn} onPress={handleSignup}>
        <Text>Signup</Text> 
      </TouchableOpacity> 
      {errorMessage ? <Text style={{ color: 'red' }}>{errorMessage}</Text> : null}
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#dadef2",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
  },
  forgot_button: {
    height: 30,
    marginBottom: 5,
    color:"black"
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "black",
  },
  logotext:{
    marginBottom:50,
    color:"black",
    height:50,
    fontWeight:"bold",
    fontSize:40,
  }
});