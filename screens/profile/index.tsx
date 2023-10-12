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


export default function Profile() {
    



    const navigation = useNavigation<any>();

    const handleLogout = async () => {
        // Clear the session token from AsyncStorage
        await AsyncStorage.removeItem('email');
        // Navigate back to the login screen
        Alert.alert("User Logged out Successfully")
        navigation.navigate('Login');
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
        checkLoggedIn()
        
    }, []);
    


    return (
        <View style={styles.container}>

            <StatusBar />
            <Text style={styles.logotext}>GoEase Profile</Text>
            
     

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
  
    text: {
        
        fontWeight: "bold",
        fontSize: 25,
        color:"black",
        padding:10,
    },
    hometext:{
        color:"black",

    },

    upper_part:{
        padding:10,
        width: "100%",
        backgroundColor: "black",
        height: 150,
    },

    image:{
        // alignItems: "center",
        width:140,
        height:140,
        borderRadius:100,
        marginTop:-70,
    },

    details_container:{
        alignSelf:"center",
        justifyContent:"center",
        flexDirection:"row",
        width:"90%",
        padding:20,
        paddingBottom:22,
        borderRadius:10,
        shadowOpacity:80,
        elevation:15,
        backgroundColor:"#fff",
        marginTop:20,
    },

    details:{
        color:"black",
        fontSize:17,
    },

    last_container:{
        alignSelf:"center",
        justifyContent:"center",
        flexDirection:"row",
        width:"90%",
        padding:20,
        paddingBottom:22,
        borderRadius:10,
        shadowOpacity:80,
        // elevation:15,
        // backgroundColor:"#fff",
        marginTop:20,
    }
});