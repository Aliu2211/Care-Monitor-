// // import React, { useState } from 'react';
// // import { 
// //   View, 
// //   Text, 
// //   TextInput, 
// //   TouchableOpacity, 
// //   StyleSheet,
// //   Image
// // } from 'react-native';

// // const OtpVerification = () => {
// //   const [otp, setOtp] = useState('');

// //   const handleVerify = () => {
// //     // TODO: Implement your OTP verification logic here
// //     // Send the entered OTP to your backend for verification
// //   };

// //   const handleResend = () => {
// //     // TODO: Implement your resend OTP logic here
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Image 
// //         source={require('./path/to/your/image.png')} // Replace with your image path
// //         style={styles.image}
// //       />
// //       <Text style={styles.title}>OTP Verification</Text>
// //       <Text style={styles.instruction}>
// //         Enter the verification code


// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

// const OtpVerificationScreen = () => {
//   const [otp, setOtp] = useState('');

//   const handleVerify = () => {
//     // TODO: Implement your OTP verification logic here
//     // Send the OTP to your backend for verification
//   };

//   const handleResend = () => {
//     // TODO: Implement your resend OTP logic here
//     // Send a request to your backend to resend the OTP
//   };

//   return (
//     <View style={styles.container}>
//       <Image 
//         source={require('./path/to/your/image.png')} // Replace with your image path
//         style={styles.image} 
//       />
//       <Text style={styles.title}>OTP Verification</Text>
//       <Text style={styles.subtitle}>
//         Enter the verification code we just send to your Email address.
//       </Text>
//       <View style={styles.otpContainer}>
//         {[...Array(6)].map((_, i) => (
//           <TextInput
//             key={i}
//             style={styles.otpInput}
//             onChangeText={(text) => setOtp(text)}
//             keyboardType="numeric"
//             maxLength={1}
//           />
//         ))}
//       </View>
//       <TouchableOpacity style={styles.button} onPress={handleVerify}>
//         <Text style={styles.buttonText}>Verify</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleResend}>
//         <Text style={styles.resendText}>Didn't receive code ?</Text>
//       </TouchableOpacity>
//       <Text style={styles.timer}>Resend 0:30</Text> 
//       {/* Implement timer functionality as needed */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   image: {
//     // Add styles for your image here
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 16,
//     marginBottom: 20,
//   },
//   otpContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   otpInput: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     fontSize: 18,
//     width: 40,
//     textAlign: 'center',
//   },
//   button: {
//     backgroundColor: '#841584', // Example color, replace with your color
//     padding: 15,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     textAlign: 'center',
//   },
//   resendText: {
//     marginTop: 10,
//     color: 'blue', // Example color, replace with your color
//   },
//   timer: {
//     marginTop: 10,
//   },
// });

// export default OtpVerificationScreen;

// 


import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const VerificationScreen = () => {
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
        Please enter the 6-digit code sent to your email {value={email}}
        for verification.
      </Text>

      <View style={styles.codeInputContainer}>
        {[...Array(6)].map((_, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => setCode(code + text)}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.verifyButton}>
        <Text style={styles.verifyButtonText}>VERIFY</Text>
      </TouchableOpacity>

      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>Didn't receive any code?</Text>
        <TouchableOpacity onPress={handleResendCode}>
          <Text style={styles.resendLink}>
            Resend Again
          </Text>
        </TouchableOpacity>
        
      </View>
      <Text style = {styles.resendTextin}>Request new code {timer > 0 && ` in ${timer}s`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: "Montserrat",
  },
  description: {
    fontSize: 14,
    fontFamily: "Montserrat",
    marginBottom: 20,
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  codeInput: {
    width: 40,
    height: 40,
    backgroundColor: "#E8E7E7",
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    textAlign: 'center',
  },
  verifyButton: {
    backgroundColor: '#E8E7E7',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  verifyButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  resendText: {
    marginRight: 5,
  },
  resendLink: {
    color: '#007bff',
  },
  resendTextin: {
    justifyContent: "center",

  },
});

export default VerificationScreen;