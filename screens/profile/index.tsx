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
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Profile() {

    const navigation = useNavigation<any>();
    const checkLoggedIn = async () => {
        // Check if the session token exists in AsyncStorage
        const sessionToken = await AsyncStorage.getItem('email');
        if (!sessionToken) {
          // If not logged in, navigate to the login screen
          navigation.navigate('Login');
        }
      };

    const handleLogout = async() => {
        try {
            await AsyncStorage.removeItem('email');
            Alert.alert("User Logged out successfully");
            navigation.navigate('Login');
        }
        catch(exception) {
            Alert.alert("Error while logging out");
        }
    }


    useEffect(() => {
     
        
        checkLoggedIn()
        
  
       
      
    }, []);
    return (
        
            <View>
                <ScrollView>
                    <StatusBar />
                    {/* <Text style={styles.logotext}>GoEase Profile</Text> */}
                    <View style={styles.upper_part}></View>
                    <TouchableOpacity>

                    </TouchableOpacity>
                    <View style={{ alignItems: "center" }}>
                        <Image source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/graham.jpg' }} style={styles.image}></Image>
                        <Text style={styles.text}>Paul Graham</Text>
                    </View>
                    <View style={styles.details_container}>
                        <Text style={styles.details}>PRN: 20070122099</Text>
                    </View>
                    <View style={styles.details_container}>
                        <Text style={styles.details}>Div: CSA</Text>
                    </View>
                    <View style={styles.details_container}>
                        <Text style={styles.details}>Batch: 2020-2024</Text>
                    </View>
                    <View style={styles.last_container}></View>
                </ScrollView>
                <Button
 onPress={handleLogout}
  title="Logout"
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

