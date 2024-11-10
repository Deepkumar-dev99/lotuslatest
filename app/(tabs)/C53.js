import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Header } from './header';
import { Footer } from './footer';

const C53Screen = ({ navigation }) => {
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

        {/* Left-Aligned Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.activeProgress}></View>
          <View style={styles.inactiveProgress}></View>
          <View style={styles.inactiveProgress}></View>
          <View style={styles.inactiveProgress}></View>
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          {/* Section Title and Description */}
          <Text style={styles.sectionTitle}>
            INTRODUCTIONS AND INSPIRATIONS
          </Text>
          <View style={styles.videoContainer}>
            <TouchableOpacity style={styles.playButton}>
              <Text style={styles.playButtonText}>▶</Text>
            </TouchableOpacity>
            <View style={styles.progressInsideVideo}></View>
          </View>
          <Text style={styles.sectionDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </Text>

          {/* Subcategory List */}
          <View style={styles.subcategoryList}>
            {[
              'Characterization and Voice',
              'Scenes and Senses',
              'Form and Structure',
              'Dialogue',
            ].map((subcategory, index) => (
              <View key={index} style={styles.subcategoryItem}>
                <View style={styles.subcategoryIconContainer}>
                  <View style={styles.circle}>
                    <Text style={styles.circleText}>{index + 1}</Text>
                  </View>
                  {index < 3 && <View style={styles.line} />}
                </View>
                <TouchableOpacity style={styles.subcategoryTextContainer}>
                  <Text style={styles.subcategoryText}>{subcategory}</Text>
                </TouchableOpacity>
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
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#20b19b',
    marginBottom: 10,
  },
  videoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  playButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#20b19b',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  playButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  progressInsideVideo: {
    flex: 1,
    height: 5,
    backgroundColor: '#20b19b',
    borderRadius: 5,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  subcategoryList: {
    marginVertical: 10,
  },
  subcategoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  subcategoryIconContainer: {
    alignItems: 'center',
    marginRight: 10,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#20b19b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  line: {
    width: 2,
    height: 30,
    backgroundColor: '#20b19b',
    marginTop: 5,
  },
  subcategoryTextContainer: {
    flex: 1,
    paddingVertical: 8,
  },
  subcategoryText: {
    fontSize: 14,
    color: '#20b19b',
    fontWeight: '600',
  },
  nextButton: {
    backgroundColor: '#20b19b',
    borderRadius: 5,
    alignItems: 'center',
    padding: 15,
    marginVertical: 20,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default C53Screen;
