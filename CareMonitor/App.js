import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Doctor_profile from './src/components/Screens/Doctor_profile';
import Sign_Up from './src/components/Screens/Sign_Up';
import Sign_in from './src/components/Screens/Sign_in';
import VerificationScreen from "./src/components/Screens/OTP_Verification";
import SplashScreen from './src/components/Screens/SplashScreen';
import Symptoms_log from './src/components/Screens/Symptoms_log';
import User_Stat_Monitoring from './src/components/Screens/User_Stat_Monitoring';
import UserProfileScreen from './src/components/Screens/UserProfileScreen';
//navigation.navigate('VerificationScreen')

const Stack = createNativeStackNavigator();

function App() {
  return (
    
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen 
        name="Splash" 
        component={SplashScreen} 
        options={{headerShown: false}}
        />
        <Stack.Screen 
        name="Sign_in" 
        component={Sign_in} 
        options={{headerShown: false}}
        />
        <Stack.Screen 
        name="UserProfileScreen" 
        component={UserProfileScreen} 
        options={{headerShown: false}}
        />
        <Stack.Screen 
        name="Sign_Up" 
        component={Sign_Up} 
        options={{headerShown: false}}
        />
        <Stack.Screen 
        name="User_Stat_Monitoring" 
        component={User_Stat_Monitoring} 
        options={{headerShown: false}}
        />
        {/* <Stack.Screen 
        name="Symptoms_log" 
        component={Symptoms_log} 
        options={{headerShown: false}}
        /> */}

        <Stack.Screen 
        name="Doctor_profile" 
        component={Doctor_profile} 
        options={{headerShown: true}}
        />

        

        <Stack.Screen 
        name="VerificationScreen" 
        component={VerificationScreen}
        options={{headerShown: false}}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;