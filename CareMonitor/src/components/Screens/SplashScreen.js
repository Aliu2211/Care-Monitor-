import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import Sign_in from './Sign_in';
import TransparentCircle from '../circles';





const SplashScreen = ({navigation}) => {


   const circles = Array.from({ length: 10 }).map((_, index) => {
    const size = Math.floor(Math.random() * 100) + 50; // Random size between 50 and 150
    const left = Math.floor(Math.random() * 300); // Random left position
    const top = Math.floor(Math.random() * 500); // Random top position
    const borderWidth = size / 2; // Border width is 50% of the circle's size


    // return (
    //   <TransparentCircle
    //     key={index}
    //     size={size}
    //     borderWidth={borderWidth}
    //     style={{ left: left, top: top }}
    //   />
    // );
  });


  return (
    <View style={styles.container}>
        {/* {circles} */}
      <Text style={styles.title}>CareMonitor+</Text>
      <View style={styles.iconContainer}>
      <Image source={require('../assets/sp.png')} style={styles.image} /> 

        {/*<Icon name="heart-pulse" size={100} color="red" /> */}
      </View>
      <TouchableOpacity style={styles.button} 
      onPress={() => navigation.navigate('Sign_in')}
      >
        <Text style={styles.buttonText} >Get Started</Text>
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
    //backgroundColor: 'white',
    padding: 20,
   // borderRadius: 10,
  },
  image: {  
     height: 250,
     width: 300,

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

export default SplashScreen;