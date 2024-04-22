import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

  // ... (handleEmailChange - same as before)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password?</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput 
          style={styles.input} 
          onChangeText={handleEmailChange} 
          keyboardType="email-address" 
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
};

// Add your styles here

export default ForgotPasswordScreen;