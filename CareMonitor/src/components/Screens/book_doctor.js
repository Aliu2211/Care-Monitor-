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


const DoctorAppointmentScreen = () => {
  const doctors = [
    { type: 'Dentist', name: 'Dr. Thomas Shelby', rating: 5, icon: 'tooth' },
    { type: 'Dentist', name: 'Dr. Thomas Shelby', rating: 4, icon: 'tooth' },
    { type: 'Therapist', name: 'Dr. Thomas Shelby', rating: 5, icon: 'person' },
    { type: 'Cardiologist', name: 'Dr. Thomas Shelby', rating: 3, icon: 'heart' },
  ];

  const appointments = [
    { type: 'Therapist Check-up', mode: 'Online', doctor: 'Dr. Adam Mike', date: '21/05/2024' }
  ];

  const renderDoctorItem = ({ item }) => (
    <View style={styles.doctorItem}>
      <Ionicons name={item.icon} size={24} color="blue" />
      <Text style={styles.doctorType}>{item.type}</Text>
      <Text style={styles.doctorName}>{item.name}</Text>
      <Text style={styles.doctorRating}>Rating: {item.rating}</Text>
    </View>
  );

  const renderAppointmentItem = ({ item }) => (
    <View style={styles.appointmentItem}>
      <Text>{item.type}</Text>
      <Text>{item.mode}</Text>
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
      backgroundColor: 'blue',
      padding: 15,
      borderRadius: 10,
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
