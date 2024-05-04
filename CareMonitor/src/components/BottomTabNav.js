// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Ionicons from '@expo/vector-icons/Ionicons'; 


// const BottomTabNavigation = ({navigation}) => {


//   return (
//     <View style={styles.bottomNav} >
//       <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('UserProfileScreen')}> 
//         <Ionicons name="home-outline" size={24} color="#000" /> 
//         <Text style={styles.navText}>Home</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('UserProfileScreen')}>
//         <Ionicons name="person-outline" size={24} color="#000" /> 
//         <Text style={styles.navText}>Account</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('UserProfileScreen')}>
//         <Ionicons name="notifications-outline" size={24} color="#000" /> 
//         <Text style={styles.navText}>Notifications</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({

  
//     bottomNav: {
//       flexDirection: 'row',
//       justifyContent: 'space-around',
//       alignItems: 'center',
//       borderTopWidth: 1,
//       borderTopColor: '#ddd',
//       paddingTop: 10,
//     },
//     navItem: {
//       alignItems: 'center',
//     },
//     navText: {
//       fontSize: 12,
//     },
//   });
  
// export default BottomTabNavigation;



import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const BottomTabNavigation = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen('User_Stat_Monitoring')}>
        <Ionicons name="home-outline" size={24} color="#000" />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen('UserProfileScreen')}>
        <Ionicons name="person-outline" size={24} color="#000" />
        <Text style={styles.navText}>Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen('DoctorAppointmentScreen')}>
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
