import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'; 
import UserProfileScreen from '../components/Screens/UserProfileScreen'; 

const BottomTabNavigation = ({navigation}) => {
  return (
    <View style={styles.bottomNav} >
      <TouchableOpacity style={styles.navItem} onPress={navigation.navigate({UserProfileScreen})}> 
        <Ionicons name="home-outline" size={24} color="#000" /> 
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
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