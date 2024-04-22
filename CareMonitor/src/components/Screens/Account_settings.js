import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const AccountSettingsScreen = () => {
  const settingsOptions = [
    { title: 'Notifications', icon: 'notifications-outline' },
    { title: 'Personal Information', icon: 'person-outline' },
    { title: 'Language', icon: 'globe-outline' },
    { title: 'Dark Mode', icon: 'moon-outline' },
    { title: 'FAQ', icon: 'help-circle-outline' },
    { title: 'Help center', icon: 'heart-outline' },
    { title: 'Feedback & Services', icon: 'chatbox-ellipses-outline' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back-outline" size={24} color="black" /> 
        </TouchableOpacity>
        <Text style={styles.title}>Account settings</Text>
      </View>

      {/* General Settings Section */}
      <Text style={styles.sectionTitle}>General</Text>
      {settingsOptions.map((item, index) => (
        <TouchableOpacity key={index} style={styles.settingItem}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name={item.icon} size={20} color="gray" style={{ marginRight: 10 }} />
            <Text style={styles.settingText}>{item.title}</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={20} color="gray" />
        </TouchableOpacity>
      ))}

      {/* Help & Support Section */}
      <Text style={styles.sectionTitle}>Help & Support</Text>
      {/* Add more settings here following the same structure as above */}

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      },
      backButton: {
        marginRight: 20,
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
      },
      settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
      },
      settingText: {
        fontSize: 16,
      },
  // ... (styles from the previous example) ...
});

export default AccountSettingsScreen;