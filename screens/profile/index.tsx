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



export default function Profile() {
    



    const navigation = useNavigation<any>();




    


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