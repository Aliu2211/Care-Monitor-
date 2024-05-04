import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'; // Assuming you use Expo for icons

import BottomTabNavigation from '../BottomTabNav';
// Sample Data (replace with actual data fetching)
const userData = {
  name: 'Freda Adwoa Boamah',
   profileImage: require('../assets/user.png'), // Replace with your image path
};

const UserProfileScreen = ({navigation}) => {

  const handleSettings = () => {
           
          navigation.navigate('AccountSettingsScreen');

 };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={userData.profileImage} style={styles.profileImage} />
        <View>
          <Text style={styles.name}>{userData.name}</Text>
          <TouchableOpacity onPress={handleSettings}>
            <Text style={styles.accountSettings}>Account Settings</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.buttonContainer1}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {/* <Ionicons name="heart-outline" size={24} color="#666" style={{ marginRight: 10 }} />  */}
          <Text style={styles.buttonText}>Log Symptoms</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer2}>
        <View style={{ flexDirection: 'row', }}>
          {/* <Ionicons name="heart-outline" size={24} color="#666" style={{ marginRight: 10 }} />  */}
          <Text style={styles.buttonText}>Tracking </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer3}>
        <View style={{ flexDirection: 'row', }}>
          {/* <Ionicons name="heart-outline" size={24} color="#666" style={{ marginRight: 10 }} />  */}
          <Text style={styles.buttonText}>Resources</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer4}>
        <View style={{ flexDirection: 'row', }}>
          {/* <Ionicons name="heart-outline" size={24} color="#666" style={{ marginRight: 10 }} />  */}
          <Text style={styles.buttonText}>Medication Monitor </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer5}>
        <View style={{ flexDirection: 'row', }}>
          {/* <Ionicons name="heart-outline" size={24} color="#666" style={{ marginRight: 10 }} />  */}
          <Text style={styles.buttonText}>Analytics </Text>
        </View>
      </TouchableOpacity>
      

      {/* Add more buttons here (Tracking, Resources, etc.)  */}
      {/* ... */} 

      {/* Bottom Navigation */}
      <BottomTabNavigation />
    </View>
  );
};


const styles = StyleSheet.create({
  // ... (styles from the previous example) ...
  profileImage: {
    alignSelf: 'center',
    marginTop: 40,
    height: 112,
    width: 107,
  },
  name: {
    alignSelf: 'center',
    paddingBottom: 50,
  },
  accountSettings: {
    fontSize: 10,
    paddingStart: 250,
    paddingBottom: 12,
  },
  buttonContainer1: {
    alignSelf: 'center',
    height: 60,
    width: 329,
    backgroundColor: '#DAF7F9',
    borderRadius: 15,
    marginTop: 10,
    alignItems: 'center',
   
   // marginLeft: 10,
    // Shadow effect
    shadowColor: 'black',
    shadowOffset: {
     width: 0,
     height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android

    


  },
  buttonContainer2: {
    alignSelf: 'center',
    alignItems: 'center',
    height: 60,
    width: 329,
    //marginLeft: 10,
    backgroundColor: '#DDE2FC',
    borderRadius: 15,
    marginTop: 15,
    // Shadow effect
    shadowColor: 'black',
    shadowOffset: {
     width: 0,
     height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android
    


  },
  buttonContainer3: {
    alignSelf: "center",
    alignItems: 'center',
    height: 60,
    width: 329,
    backgroundColor: '#41E998',
    borderRadius: 15,
    //marginLeft: 10,
    marginTop: 15,
    // Shadow effect
    shadowColor: 'black',
    shadowOffset: {
     width: 0,
     height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android
    


  },
  buttonContainer4: {
    alignSelf: "center",
    alignItems: 'center',
    height: 60,
    width: 329,
    //marginLeft: 10,
    backgroundColor: '#DAF7F9',
    borderRadius: 15,
    marginTop: 15,
    // Shadow effect
    shadowColor: 'black',
    shadowOffset: {
     width: 0,
     height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android

  },
  buttonContainer5: {
    alignSelf: "center",
    alignItems: 'center',
    height: 60,
    width: 329,
    marginBottom: 40,
    
    backgroundColor: '#DAF7F9',
    borderRadius: 15,
    marginTop: 15,
    // Shadow effect
    shadowColor: 'black',
    shadowOffset: {
     width: 0,
     height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android

  },
  buttonText: {
   
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'justify'
  },
  
 
});

export default UserProfileScreen;