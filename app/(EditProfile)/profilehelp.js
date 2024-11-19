import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importing icons (for search and dropdown arrows)
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient'; // Install LinearGradient: https://github.com/react-native-linear-gradient/react-native-linear-gradient
import { useSelector } from 'react-redux'; // Added missing import
import { Header } from '../(tabs)/header';
import { Footer } from '../(tabs)/footer';
const HelpCenterScreen = () => {
  const authUser = useSelector((state) => state.user);

  return (
    <SafeAreaView 
    style={{
      flex: 1,
      backgroundColor: "#FFFFFF",
    }}>
    <Header />
    <ScrollView style={styles.container}>
    
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>HELP CENTER</Text>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            editable={false}
          />
        </View>
     
      </View>

      {/* FAQ Section */}
      <View style={styles.faqSection}>
        <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>

        {Array.from({ length: 5 }).map((_, index) => (
          <TouchableOpacity key={index} style={styles.faqItem}>
            <Text style={styles.faqQuestion}>
              Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <Ionicons name="chevron-down" size={20} color="gray" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Contact Information */}
      <View style={styles.contactSection}>
        <Text style={styles.contactTitle}>Can’t Find An Answer?</Text>
        <Text style={styles.contactSubTitle}>Contact Us</Text>
        <Text style={styles.contactInfo}>📧 email@projecthumancity.com</Text>
        <Text style={styles.contactInfo}>📞 ###-###-####</Text>

        <Text style={styles.contactSubTitle}>Operations</Text>
        <Text style={styles.contactInfo}>📧 email@projecthumancity.com</Text>
        <Text style={styles.contactInfo}>📞 ###-###-####</Text>
      </View>
    </ScrollView>
    <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#8FD3F4',
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '90%',
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
    color: 'gray',
  },
  faqSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  faqItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  faqQuestion: {
    fontSize: 16,
    color: 'gray',
  },
  contactSection: {
    padding: 20,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactSubTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  contactInfo: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
  },
});

export default HelpCenterScreen;
