import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'; 


const BottomTabNavigation = ({navigation}) => {
  const handleLogin = () => {
    // Implement your login logic here
    // This could involve sending a request to your backend API
    // to authenticate the user
    // if ( !email || !password) {
    //   Alert.alert('Error', 'Please fill in all fields');
    //  return;
    // }
    navigation.navigate("User_Stat_Monitoring");
    
};   



  return (
    <View style={styles.bottomNav} >
      <TouchableOpacity style={styles.navItem} onPress={handleLogin}> 
        <Ionicons name="home-outline" size={24} color="#000" /> 
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("UserProfileScreen")}>
        <Ionicons name="person-outline" size={24} color="#000" /> 
        <Text style={styles.navText}>Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} >
        <Ionicons name="notifications-outline" size={24} color="#000" /> 
        <Text style={styles.navText}>Notifications</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  
    bottomNav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: '#ddd',
      paddingTop: 10,
    },
    navItem: {
      alignItems: 'center',
    },
    navText: {
      fontSize: 12,
    },
  });
  
export default BottomTabNavigation;