import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        backgroundColor: "#fff",
        padding: 10,
        // backgroundColor: 'red',
        // alignItems: "center",
        // justifyContent: "center",
    },

    rightContainer:{
        flex:1,
        justifyContent:"center",
    },

    image:{
        height: 50,
        width: 50,
        borderRadius: 30,
        marginRight: 10,
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

    },

    text :{
        color: "grey",
    },

    row:{
        flexDirection: 'row',
        justifyContent: "space-between",
        // width: '100%',
        // backgroundColor: 'red'
       
    },

    name:{
        color:"black",
        fontWeight:'bold',
        fontSize: 18,
        // marginBottom:1,
    },

    badgeContainer:{
        backgroundColor:"#3872E9",
        width:20,
        height:20,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 10,
        position:'absolute',
        borderWidth:1,
        borderColor:"white",
        left:45,
        top:10,
    },

    badgeText:{
        color:'white',
        fontSize:12,

    },
});

export default styles;