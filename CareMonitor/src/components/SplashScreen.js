import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Assuming you use MaterialCommunityIcons

const CareMonitorScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CareMonitor+</Text>
      <View style={styles.iconContainer}>
        <Icon name="heart-pulse" size={100} color="white" /> 
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
        <Icon name="arrow-right" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#293275', // Replace with your desired color
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 50,
  },
  iconContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#007bff', // Replace with your desired color
    padding: 15,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    marginRight: 10,
  },
});

export default CareMonitorScreen;