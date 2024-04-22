import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BottomTabNavigation from '../BottomTabNav';


const PulseMonitoringScreen = () => {
  return (
    <View style={styles.container}>
      {/* Pulse Monitoring Section */}
      <Text style= {styles.cardTitle}>Pulse Monitoring</Text>
      <View style={[styles.card, styles.pulseCard]}>
        <Text style={styles.value}>96 bph</Text>
        <Text style={styles.label}>Your current pulse</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Show Graph</Text>
        </TouchableOpacity>
      </View>

      {/* Weight Section */}
      <Text style= {styles.cardTitle}>Weight</Text>
      <View style={[styles.card, styles.weightCard]}>
        <Text style={styles.value}>50 Kg</Text>
        <Text style={styles.label}>You're the best</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Show Graph</Text>
        </TouchableOpacity>
      </View>

      {/* Temperature Section */}
      <Text style= {styles.cardTitle}>Temperature</Text>
      <View style={[styles.card, styles.tempCard]}>
        <Text style={styles.value}>37.9°</Text>
        <Text style={styles.label}>Your current temperature</Text>
      </View>

      {/* Bottom Navigation */}
      {/* <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Notifications</Text>
        </TouchableOpacity>
      </View> */}
      <BottomTabNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 28,
  },
  cardTitle: {
  
    marginTop: 20,
    fontWeight: '700',
    fontSize: 20,
    color: '#666',



  },
  card: {
    borderRadius: 25,
    padding: 20,
    marginBottom: 10,
    elevation: 5, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  pulseCard: {
    backgroundColor: '#F2E7D5', // Light Yellow
  },
  weightCard: {
    backgroundColor: '#C8A2C8', // Light Purple
  },
  tempCard: {
    backgroundColor: '#E0E0E0', // Light Gray
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    color: '#666',
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 17,
    marginTop: 25,
    height: 30,
    width: 200,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: "bold",
    alignSelf: 'flex-start',
  },
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

export default PulseMonitoringScreen;