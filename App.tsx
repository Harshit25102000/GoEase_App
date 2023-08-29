import React from 'react';
import type {PropsWithChildren} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
 
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



type SectionProps = PropsWithChildren<{
  title: string;
}>;




import LoginScreen from './screens/login';
import SignupScreen from './screens/signup';
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/profile';
import Scanner from './screens/scanner';
import messages from './screens/messages';

const TabNav = () => (
  <Tab.Navigator 
  screenOptions={{
    tabBarLabelPosition: "beside-icon",
    tabBarLabelStyle: {
      fontWeight: "700",
      fontSize: 15
    },
    tabBarIconStyle: { display: "none" },
  }}>
  <Tab.Screen name="Home" component={HomeScreen} options={{tabBarHideOnKeyboard: true}}/>
  <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarHideOnKeyboard: true}}/>
  <Tab.Screen name="Messages" component={messages} options={{tabBarHideOnKeyboard: true}}/>

</Tab.Navigator>
);

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
    <Stack.Navigator>
      {/* Login and Signup screens */}
      <Stack.Screen
          name="Home"
          component={TabNav}
          options={{ headerShown: false }}
        />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Scanner" component={Scanner} />
      <Stack.Screen name="Messages" component={messages} />
  

      

     
      

      {/* Home screen with bottom tab navigation */}
    
    </Stack.Navigator>
  </NavigationContainer>
  );
}


export default App;
