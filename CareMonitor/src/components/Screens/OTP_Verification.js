



import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

const VerificationScreen = ({navigation}) => {


  const handleVer = () => {
   
    // This could involve sending a request to your backend API
    // to authenticate the user
    navigation.navigate("User_Stat_Monitoring");
    
};   
  const [code, setCode] = useState('');
  const [timer, setTimer] = useState(30);

  const handleResendCode = () => {
    
    setTimer(30);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>

       <Image
        source={require('../assets/otpv.png')}
        style={styles.image} 
      />
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.description}>
      Enter the verification code we just send to your Email address.
      </Text>

      <View style={styles.codeInputContainer}>
        {[...Array(5)].map((_, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => setCode(code + text)}
          />
        ))}
      </View>
    <View >
        <Text style={styles.resendText}>Didn't receive any code?</Text>
        <TouchableOpacity onPress={handleResendCode}>
      
          <Text style={styles.resendLink}>
         
            Resend 
            <Text style = {styles.resendTextin}>{timer > 0 && ` in ${timer}s`}</Text>
    
          </Text>
        </TouchableOpacity>
      



    </View>
      

      <TouchableOpacity style={styles.verifyButton}>
        <Text style={styles.verifyButtonText}
        onPress={handleVer}
        
        >VERIFY</Text>
      </TouchableOpacity>

      <View style={styles.resendContainer}>
        {/* <Text style={styles.resendText}>Didn't receive any code?</Text> */}
        
        
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 10,
    backgroundColor: '#fff'
  },
  image:{
    height: 280,
    width: 280,
    alignSelf: 'center',


  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center'
    
  },
  description: {
    fontSize: 14,
    marginBottom: 20,
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  codeInput: {
    width: 50,
    height: 50,
    backgroundColor: "#ffff",
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    textAlign: 'center',
  },
  verifyButton: {
    backgroundColor: '#3C1AB9',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  verifyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  resendText: {
    // marginBottom: 10,
    alignSelf: 'flex-start',
    // marginBottom: 10,

    // paddingBottom: 10,
  },
  resendLink: {
    color: '#007bff',
    alignSelf: 'flex-end',
    marginBottom: 10,
    
  },
  resendTextin: {
    justifyContent: "center",

  },
});

export default VerificationScreen;