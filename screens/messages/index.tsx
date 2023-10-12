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
    FlatList,
    
  
} from "react-native";
import ChatroomItem from "../../components/ChatroomIntem";
import { useNavigation } from '@react-navigation/native';
import ChatRooms from "../../assets/ChatAssets/SignalAssets/dummy-data/ChatRooms";
import { PermissionsAndroid } from 'react-native';
import { useEffect } from "react";
import WifiManager from "react-native-wifi-reborn";

// const chatRoom1= ChatRooms[0];
// const chatRoom2= ChatRooms[1];



export default function Messages() {
    



    const navigation = useNavigation<any>();




    



    return (

        <View style={styles.page}>
            <FlatList
                data={ChatRooms}
                renderItem={({item}) => <ChatroomItem chatRoom={item}/>}
                showsVerticalScrollIndicator={false}
            />

        </View>
        
    );
}
const styles = StyleSheet.create({
    page:{
        backgroundColor:"white",
        flex:1
    }
});