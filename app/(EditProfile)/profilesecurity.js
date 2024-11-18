import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient'; // Install LinearGradient: https://github.com/react-native-linear-gradient/react-native-linear-gradient
import { useSelector } from 'react-redux'; // Added missing import
import { Header } from '../(tabs)/header';
import { Footer } from '../(tabs)/footer';

const AccountScreen = () => {
  const authUser = useSelector((state) => state.user);

  return (
    <SafeAreaView 
    style={{
      flex: 1,
      backgroundColor: "#FFFFFF",
    }}>
    <Header />
    <ScrollView  
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}>  
    <View style={styles.container}>
      {/* Two Factor Authentication Section */}
      <View style={styles.section}>
        <View style={styles.headerRow}>
          <Text style={styles.sectionTitle}>Two Factor Authentication</Text>
          <Text style={styles.editIcon}>✎</Text>
        </View>
        
        <Text style={styles.infoText}><Text style={styles.label}>Email Address:</Text> johndoe@gmail.com</Text>
        <Text style={styles.infoText}><Text style={styles.label}>Secondary Email:</Text> johndoe@gmail.com</Text>
        <Text style={styles.infoText}><Text style={styles.label}>Phone (Text SMS):</Text> XXX-XXX-XXX</Text>
      </View>

      {/* Billing Information Section */}
      <View style={styles.section}>
        <View style={styles.headerRow}>
          <Text style={styles.sectionTitle}>Billing Information</Text>
          <Text style={styles.editIcon}>✎</Text>
        </View>
        
        <Text style={styles.infoText}><Text style={styles.label}>Payment Method:</Text> johndoe@gmail.com</Text>
        <Text style={styles.infoText}><Text style={styles.label}>Billing Address:</Text> 00-10000 Random, Address X1V 3T4</Text>
      </View>
 
    </View>
    </ScrollView>
    <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  section: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  editIcon: {
    fontSize: 18,
    color: 'gray',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    color: 'gray',
  },
});

export default AccountScreen;
