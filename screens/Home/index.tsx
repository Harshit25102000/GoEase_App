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
    Alert,
  
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { PermissionsAndroid } from 'react-native';
import { useEffect } from "react";
import WifiManager from "react-native-wifi-reborn";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth_ssid } from '../../config';
import DeviceInfo from 'react-native-device-info';

export default function Home() {
    const navigation = useNavigation<any>();
    const [permission, setPermission] = useState("");
    const [ssid, setSsid] = useState("");
    const [bssid, setBssid] = useState("");
    const [password, setPassword] = useState("");
    const [wifistatus, setWifistatus] = useState("");
    const [deviceID,setDeviceID]=useState("");
    const requestWifiPermission = async () => {
        try {

            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Location permission is required for WiFi connections',
                    message:
                        'This app needs location permission as this is required  ' +
                        'to scan for wifi networks.',
                    buttonNegative: 'DENY',
                    buttonPositive: 'ALLOW',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                setPermission("Granted")
            } else {
                setPermission("Not Granted")
            }

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                WifiManager.isEnabled().then(
                    value => {
                        if (value===true){


                            WifiManager.connectionStatus().then(
                                status => {
                                    if (status === true) {
                                        WifiManager.getCurrentWifiSSID().then(
                                            ssid => {
                                                setSsid(ssid);
                                                setWifistatus(`Connected to ${ssid}`)
                                            },
                                            () => {
                                                setSsid("");
                                            }
                                        );
            
                                        WifiManager.getBSSID().then(
                                            bssid => {
                                                setBssid(bssid);
                                            },
                                            () => {
                                                setBssid("");
                                            }
                                        );
                                    }
            
                                    else{
                                        setWifistatus("Not Connected")
                                    }
                                },
                                () => {
                                    console.log("Cannot get current SSID!");
                                }
                            );
                        }

                        else{
                            Alert.alert("Please turn on Wifi and reopen the app")
                           
                        }
                    },
                    () => {
                        setSsid("");
                    }
                );

                DeviceInfo.getUniqueId().then((mac) => {
                    setDeviceID(mac)
                   });


            }
        } catch (err) {
            console.warn(err);
        }


    };



    const checkLoggedIn = async () => {
        // Check if the session token exists in AsyncStorage
        const sessionToken = await AsyncStorage.getItem('email');
        if (!sessionToken) {
          // If not logged in, navigate to the login screen
          navigation.navigate('Login');
        }
      };

    
      

    useEffect(() => {
        requestWifiPermission()
        
        checkLoggedIn()
        
  
       
      
    }, []);

    const openScanner=async()=>{
        await AsyncStorage.setItem('ssid', ssid);
        await AsyncStorage.setItem('bssid', bssid);
        await AsyncStorage.setItem('deviceID', deviceID);
        console.log(ssid)
        console.log(auth_ssid)
        navigation.navigate('Scanner')}
    





    return (
        <View style={styles.container}>

            <StatusBar />
            <Text style={styles.logotext}>GoEase Home</Text>
            <Text style={styles.hometext}>Permission - {permission}</Text>
            <Text style={styles.hometext}>Connection Status - {wifistatus}</Text>
            <Text style={styles.hometext}>SSID - {ssid}</Text>
            <Text style={styles.hometext}>BSSID - {bssid}</Text>
            <Text style={styles.hometext}>Unique Device ID - {deviceID}</Text>         
            <Button
 onPress={openScanner}
  title="Open Scanner"
  color="#841584"
  
/>
       

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
  
    logotext: {
        marginBottom: 50,
        color: "black",
        height: 50,
        fontWeight: "bold",
        fontSize: 40,
    },
    hometext:{
        color:"black",

    }
});