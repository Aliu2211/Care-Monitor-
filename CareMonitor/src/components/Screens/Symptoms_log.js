import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity,
  StyleSheet,
  Switch
} from 'react-native';

const SymptomTrackerScreen = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const handleSymptomToggle = (symptom) => {
    setSelectedSymptoms(prevSymptoms => {
      if (prevSymptoms.includes(symptom)) {
        return prevSymptoms.filter(s => s !== symptom);
      } else {
        return [...prevSymptoms, symptom];
      }
    });
  };

  const handleAddSymptoms = () => {
    // Implement logic to add selectedSymptoms to your data storage
    console.log("Adding symptoms:", selectedSymptoms);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Symptoms</Text>
      <TextInput 
        style={styles.input}
        placeholder="Add Manually"
      />
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Log Symptoms</Text>
        <Switch />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Tracking</Text>
        <Switch />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Resources</Text>
        <Switch />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Medication Monitor</Text>
        <Switch />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Analytics</Text>
        <Switch />
      </TouchableOpacity>
      <TouchableOpacity style={styles.addButton} onPress={handleAddSymptoms}>
        <Text style={styles.addButtonText}>Add Selected Symptoms</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
  },
  addButton: {
    backgroundColor: '#8e44ad',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SymptomTrackerScreen;