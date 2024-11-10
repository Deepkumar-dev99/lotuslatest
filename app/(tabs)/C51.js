import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { Header } from './header';
import { Footer } from './footer';

const C51Screen = ({ navigation }) => {
  const [openSections, setOpenSections] = useState({});
  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header />

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Categories */}
        <View style={styles.categoriesContainer}>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Read</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Watch</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Listen</Text>
          </TouchableOpacity>
        </View>

        {/* Centered Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.activeProgress}></View>
          <View style={styles.inactiveProgress}></View>
          <View style={styles.inactiveProgress}></View>
          <View style={styles.inactiveProgress}></View>
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          {/* Heading Title with expandable description */}
          <TouchableOpacity onPress={() => toggleSection('heading')}>
            <Text style={styles.sectionTitle}>HEADING TITLE</Text>
          </TouchableOpacity>
          {openSections['heading'] && (
            <Text style={styles.sectionDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </Text>
          )}

          {/* Subcategory List */}
          <View style={styles.subcategoryList}>
            {[
              'Subcategory 1',
              'Subcategory 2',
              'Subcategory 3',
              'Subcategory 4',
              'Subcategory 5',
            ].map((subcategory, index) => (
              <View key={index} style={styles.subcategoryItem}>
                <View style={styles.subcategoryIconContainer}>
                  <View style={styles.circle}>
                    <Text style={styles.circleText}>{index + 1}</Text>
                  </View>
                  {index < 4 && <View style={styles.line} />}
                </View>
                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                    onPress={() => toggleSection(index)}
                    style={styles.subcategoryTextContainer}
                  >
                    <Text style={styles.subcategoryText}>{subcategory}</Text>
                  </TouchableOpacity>
                  {openSections[index] && (
                    <Text style={styles.subcategoryDescription}>
                      This is additional content for {subcategory}.
                    </Text>
                  )}
                </View>
              </View>
            ))}
          </View>

          {/* Next Button */}
          <TouchableOpacity style={styles.nextButton}>
            <Text style={styles.nextButtonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  categoriesContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingLeft: 16, // Align categories to the left
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 10,
    borderColor: '#20b19b',
    borderWidth: 1,
    borderRadius: 20,
  },
  categoryText: {
    color: '#20b19b',
    fontWeight: '600',
  },
  progressContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingLeft: 16, // Align progress bar to the left
  },
  activeProgress: {
    width: 40,
    height: 5,
    backgroundColor: '#20b19b',
    marginHorizontal: 2,
    borderRadius: 5,
  },
  inactiveProgress: {
    width: 40,
    height: 5,
    backgroundColor: '#ddd',
    marginHorizontal: 2,
    borderRadius: 5,
  },
  contentContainer: {
    paddingBottom: 80,
  },
  mainContent: {
    padding: 16,
  },
  headingContainer: {
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5FD2AF',
  },
  sectionDescription: {
    fontSize: 14,
    color: '#333',
    marginVertical: 8,
    paddingLeft: 32,
  },
  subcategoryList: {
    marginVertical: 16,
  },
  subcategoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  subcategoryIconContainer: {
    alignItems: 'center',
    marginRight: 8,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#5FD2AF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  line: {
    width: 1,
    height: 20,
    backgroundColor: '#5FD2AF',
  },
  subcategoryTextContainer: {
    flex: 1,
  },
  subcategoryText: {
    fontSize: 16,
    color: '#5FD2AF',
  },
  subcategoryDescription: {
    fontSize: 14,
    color: '#333',
    marginTop: 4,
    paddingLeft: 32, // Indent for alignment with subcategory text
  },
  nextButton: {
    backgroundColor: '#5FD2AF',
    padding: 16,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default C51Screen;
