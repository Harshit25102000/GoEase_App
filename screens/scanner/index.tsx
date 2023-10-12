import React, { Component, Fragment } from 'react';
import { TouchableOpacity, Text, Linking, View, Image, ImageBackground, BackHandler } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {
    AppRegistry,
    StyleSheet,
    Alert
   
  } from 'react-native';
import { RNCamera } from 'react-native-camera'
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';





class Scan extends Component {
    
  checkLoggedIn = async () => {
    // Check if the session token exists in AsyncStorage
    const sessionToken = await AsyncStorage.getItem('email');
    if (!sessionToken) {
      // If not logged in, navigate to the login screen
      this.props.navigation.navigate('Login');
    }
  };

  componentDidMount() {
    this.checkLoggedIn();
  }

    onSuccess = e => {
        console.log("running")
       
       console.log(e.data)
       Alert.alert("Your Attendance Marked Successfully")
       this.props.navigation.navigate('Home')
      };
    render()  {
        return (
          <QRCodeScanner
            onRead={this.onSuccess}
            
            
            
            topContent={
              <Text style={styles.centerText}>
            
                Make sure to connect to your college network and turn on your bluetooth if required
              </Text>
            }
            bottomContent={
              <TouchableOpacity style={styles.buttonTouchable}>
                <Text style={styles.buttonText}>OK. Got it!</Text>
              </TouchableOpacity>
            }
          />
        );
      }
    }
    
    const styles = StyleSheet.create({
      centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
      },
      textBold: {
        fontWeight: '500',
        color: '#000'
      },
      buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
      },
      buttonTouchable: {
        padding: 16
      }
});
export default Scan