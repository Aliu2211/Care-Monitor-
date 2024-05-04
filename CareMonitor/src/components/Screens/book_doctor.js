import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  FlatList, 
  TouchableOpacity 
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'; // Assuming you are using Expo
import BottomTabNavigation from '../BottomTabNav';
import Ion from '@expo/vector-icons/Ionicons';
import RatingStars from '../StarRating';
import { useNavigation } from '@react-navigation/native';


const DoctorAppointmentScreen = ({navigation}) => {
  const doctors = [
    { type: 'Denti', name: 'Dr. Thomas Shelby', rating: 5, colorIndex: 0 },
    { type: 'Dentist', name: 'Dr. Thomas Shelby', rating: 4, colorIndex: 1 },
    { type: 'Therapist', name: 'Dr. Thomas Shelby', rating: 5, colorIndex: 2 },
    { type: 'Cardiologist', name: 'Dr. Thomas Shelby', rating: 3, colorIndex: 3 },
  ];
  const appointments = [
    { type: 'Annual Therapist Check-up', mode: 'Online', doctor: 'Dr. Adam Mike', date: '21/05/2024', Ionicons: 'person' }
    
  ];


  const colors = ['#FF5733', '#33FFC1', '#3367FF', '#FF3367']; // Define your colors here
  // const navigation = useNavigation();

  const handleDoctorPress = (doctor) => {
    navigation.navigate('Doctor_profile', { doctor }); // Navigate to DoctorProfileScreen and pass the doctor data
  };

  
  // const renderDoctorItem = ({ item }) => (
    
  //   <View style={[styles.doctorItem, { backgroundColor: colors[item.colorIndex] }]}>
  //     <Text style={styles.doctorType}>{item.type}</Text>
  //     <Text style={styles.doctorName}>{item.name}</Text>
  //     <View style={styles.doctorRating}>
  //       <RatingStars rating={item.rating} />
  //     </View>
  //   </View>
  
  // );

  const renderDoctorItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleDoctorPress(item)}>
      <View style={[styles.doctorItem, { backgroundColor: colors[item.colorIndex] }]}>
        <Text style={styles.doctorType}>{item.type}</Text>
        <Text style={styles.doctorName}>{item.name}</Text>
        <View style={styles.doctorRating}>
          <RatingStars rating={item.rating} />
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderAppointmentItem = ({ item }) => (
    <View style={styles.appointmentItem}>
      <Text>{item.type}</Text>
      <Text>{item.Ionicons}{item.mode}</Text>
      <Text>{item.doctor}</Text>
      <Text>{item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput placeholder="Search" style={styles.searchInput} />
        <Ionicons name="search" size={24} color="gray" />
      </View>

      {/* Doctor List */}
      <FlatList 
        data={doctors}
        renderItem={renderDoctorItem}
        keyExtractor={(item) => item.type + item.name} // Ensure unique keys
      />

      {/* Upcoming Appointment */}
      <View style={styles.appointmentSection}>
        <Text style={styles.appointmentTitle}>Upcoming Appointment</Text>
        <FlatList 
          data={appointments}
          renderItem={renderAppointmentItem}
          keyExtractor={(item) => item.type} 
        />
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book an Appointment</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation (You can use the component from previous examples) */}
      <BottomTabNavigation/>

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    searchBar: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F0F0F0',
      borderRadius: 10,
      padding: 10,
      marginBottom: 20,
      marginTop: 30,
    },
    searchInput: {
      flex: 1,
      marginLeft: 10,
    },
    doctorItem: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
      marginBottom: 15,
      elevation: 5, 
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    doctorType: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    doctorName: {
      fontSize: 16,
      color: '#666',
    },
    doctorRating: {
      fontSize: 14,
      color: 'green',
    },
    appointmentSection: {
      marginTop: 20,
    },
    appointmentTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    appointmentItem: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 10,
      marginBottom: 10,
      elevation: 3,
    },
    bookButton: {
      backgroundColor: '#3C1AB9',
      padding: 15,
      borderRadius: 20,
      alignItems: 'center',
      marginTop: 10,
    },
    bookButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });

export default DoctorAppointmentScreen;
