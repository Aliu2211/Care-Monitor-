import React, { useState } from 'react';

import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image,
  Alert,
  StyleSheet 

} from 'react-native';

const Sign_in = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
   
    // This could involve sending a request to your backend API
    // to authenticate the user
    if ( !email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
     return;
    }
    navigation.navigate("User_Stat_Monitoring");
    
};   
const handleSignup = () => {

  navigation.navigate('Sign_Up');

  // Simulate sign-in success
  // Alert.alert('Success', 'You have signed in successfully!');
};
const handleforgotPassword = () => {

  navigation.navigate('ForgotPasswordScreen');

  // Simulate sign-in success
  // Alert.alert('Success', 'You have signed in successfully!');
};
     
  

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/3d-mobile.png')} 
        style={styles.image} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.forgotPassword}
      onPress={handleforgotPassword}
      >
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Log in</Text>
        {/* <Icon name="arrow-right" size={24} color="white" /> */}
      </TouchableOpacity>

      

      <Text style={styles.orText}>Or Login With</Text>
      <View style={styles.socialLoginContainer}>
        <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require("../assets/Google.png")}
                style={styles.socialButtonG}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image 
                  source={require("../assets/Facebook.png")}
                style={styles.socialButtonF}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
            <Image 
              source={require("../assets/LinkedIn.png")}
              style={styles.socialButtonL}/>
            </TouchableOpacity>
          </View>
       

      


      </View>
      <TouchableOpacity >
          <Text style={styles.signupText}>
            Don't have an account ?{' '}
              <Text style={styles.signupLink}  onPress={handleSignup}>Sign up</Text>
          
            {/* <Text style={styles.signupLink}>Sign up</Text> */}
          </Text>
      </TouchableOpacity>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffff'
  },
  image: {
    height: 250,
    width: 150,
    // Add styles for the image here
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginVertical: 10,
    borderRadius: 35,
  },

  forgotPassword: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#007bff',
  },
  button: {
    backgroundColor: '#3C1AB9',
    padding: 15,
    borderRadius: 35,
    width: '100%',
    //flexDirection: 'row',
   // alignItems: 'center',
    

  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
    alignSelf: 'center',

  },
  orText: {
    marginTop: 20,
    marginBottom: 10,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  signupText: {
    marginTop: 20,
  },
  signupLink: {
    color: 'blue',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -9,
  },
  socialButton: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialButtonG: {
    height: 30,
    width: 30,

  },
  socialButtonF: {
    height: 40,
    width: 40,

  },
  socialButtonL: {
    height: 38,
    width: 38,

  },
});

export default Sign_in;