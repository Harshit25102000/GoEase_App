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



class Scan extends Component {
    
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
                Go to{' '}
                <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
                your computer and scan the QR code.
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