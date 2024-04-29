import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';





const Sign_Up = ({navigation}) => {
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSignup = () => {
    // Validating  inputs
    if (!fullName || !email || !password ) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    
     navigation.navigate('User_Stat_Monitoring');
  };

  const handleSignin = () => {
     navigation.navigate('Sign_in');

  };

  

  return (
    <View style={styles.container}>
      <View style= {styles.header}>    
           <Image
            source={require('../assets/signup.png')}
            style={styles.image}
          /> 
          {/* <Text style={styles.title}>Get Started</Text>
          <Text style={styles.subtitle}>by creating a free account.</Text> */}
      </View>
      
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
        />
       
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
         <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />


       <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={() => setAgreeToTerms(!agreeToTerms)}>
            <View style={[styles.checkbox, { backgroundColor: agreeToTerms ? '#007bff' : '#fff' }]} />
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>By checking the box you agree to our 
             <Text>Terms</Text>and 
             <Text>Conditions</Text>.
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Next </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already a member?</Text>
        <TouchableOpacity onPress={handleSignin}> 
          <Text style={styles.footerLink}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: "center",
      

  },
  image: {
    width: 320,
    height: 195,
  

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingTop: 30,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  form: {
    width: '85%',
    
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    backgroundColor: "#ffff",
    marginBottom: 15,
    borderRadius: 25,
    fontSize: 17,
    fontWeight: "600",

  },
  button: {
    backgroundColor: '#3C1AB9',
    padding: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  footerText: {
    color: '#666',
  },
  footerLink: {
    color: '#3C1AB9',
    marginLeft: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 10,
    color: '#666',
    flex: 1,
  },
});

export default Sign_Up;