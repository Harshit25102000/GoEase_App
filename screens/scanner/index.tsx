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

import { BACKEND_URL , auth_bssid,auth_ssid} from '../../config';



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

  
    onSuccess = async e => {
      
       const qr_data=JSON.parse(e.data)

 
       const auth=qr_data.auth_type
       const class_name=qr_data.class
       const date=qr_data.date
       const teacher=qr_data.teacher
       const unique_id=qr_data.unique_id
       const email=await AsyncStorage.getItem('email');
       console.log(auth,class_name,date,teacher,unique_id)
       const ssid = await AsyncStorage.getItem('ssid');
       const bssid = await AsyncStorage.getItem('bssid');
       const deviceID = await AsyncStorage.getItem('deviceID');
       console.log(ssid)
      if (ssid!==auth_ssid){
        Alert.alert("You are not connected to allowed wifi")
        return
      }
      if (bssid!==auth_bssid){
        Alert.alert("You are not in the required router vicinity")
        return
      }

      console.log(class_name,date,teacher,unique_id,deviceID,email)
      fetch(BACKEND_URL+'/student/mark_attendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ class_name,date,teacher,unique_id,deviceID,email }),
    
      })
        .then((response) => {
         
          return response.json();
        })
        .then(async (data) => {
          if (data.success && data.data && data.data.status === 'SUCCESS') {
            Alert.alert("Your Attendance Marked Successfully")
       this.props.navigation.navigate('Home')
          } else {
            const ErrorMessage=data.message;
            Alert.alert(ErrorMessage);
            this.props.navigation.navigate('Home')
          }
        })
        .catch((error) => {
          
          Alert.alert('Oops!! An error occurred. Please try again later.');
          this.props.navigation.navigate('Home')
        });


       
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