import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Install LinearGradient: https://github.com/react-native-linear-gradient/react-native-linear-gradient
import { Header } from './header';
import { Footer } from './footer';

const b2 = () => {
  const [activeTab, setActiveTab] = useState('inProgress');

  const courses = [
    { title: 'Title of Course Name', category: 'Art History', progress: '45%' },
    { title: 'Title of Course Name', category: 'Art History', progress: '45%' },
    { title: 'Title of Course Name', category: 'Art History', progress: '45%' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.heading}>{'Courses'}</Text>
        <View style={styles.tabContainer}>
          <TouchableOpacity onPress={() => setActiveTab('inProgress')}>
            <Text
              style={[
                styles.tabText,
                activeTab === 'inProgress' && styles.activeTab,
              ]}
            >
              {'In Progress'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('bookmarked')}>
            <Text
              style={[
                styles.tabText,
                activeTab === 'bookmarked' && styles.activeTab,
              ]}
            >
              {'Bookmarked Courses'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />

        {activeTab === 'inProgress' ? (
          courses.map((course, index) => (
            <View key={index} style={styles.courseCard}>
              <Image
                source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
                resizeMode="stretch"
                style={styles.courseImage}
              />
              <View style={styles.courseDetails}>
                <Text style={styles.courseTitle}>{course.title}</Text>
                <Text style={styles.courseCategory}>{course.category}</Text>
                <View style={styles.progressContainer}>
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={['#EB7B38', '#E26662', '#E15890']}
                    style={styles.progressBar}
                  >
                    <Text style={styles.progressText}>{course.progress}</Text>
                  </LinearGradient>
                </View>
              </View>
            </View>
          ))
        ) : (
          <View>
            {courses.map((course, index) => (
              <View key={index} style={styles.bookmarkedCourse}>
                <View style={styles.courseBox}></View>
                <Text style={styles.courseTitle}>{course.title}</Text>
                <Text style={styles.courseAuthor}>{'Author Name'}</Text>
                <Text style={styles.courseDescription}>
                  {'Description of the game written here'}
                </Text>
                <View style={styles.courseTags}>
                  <View style={styles.tag}>
                    <Text style={styles.tagText}>{'Age'}</Text>
                  </View>
                  <View style={styles.tag}>
                    <Text style={styles.tagText}>{'Subject'}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

export default b2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  heading: {
    fontSize: 24,
    marginBottom: 25,
    marginLeft: 16,
    color: '#000000',
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 12,
    marginHorizontal: 17,
  },
  tabText: {
    fontSize: 16,
    marginRight: 34,
    color: '#707070',
  },
  activeTab: {
    color: '#DA69AF',
  },
  divider: {
    height: 2,
    backgroundColor: '#E2DEDE',
    marginBottom: 24,
    marginHorizontal: 16,
  },
  courseCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start', // Change to flex-start to align items at the top
    borderColor: '#E2DEDE',
    borderRadius: 12,
    borderWidth: 1,
    padding: 12,
    marginBottom: 16,
    marginHorizontal: 15,
  },
  courseImage: {
    borderRadius: 8,
    width: 106,
    height: 89,
  },
  courseDetails: {
    flex: 1, // Make course details take up remaining space
    marginLeft: 12, // Add margin to the left of course details
  },
  courseTitle: {
    fontSize: 18,
    marginBottom: 8,
    color: '#000000',
  },
  courseCategory: {
    fontSize: 14,
    marginBottom: 15,
    color: '#000000',
  },
  progressContainer: {
    alignItems: 'flex-end', // Align progress bar to the right
    marginTop: 'auto', // Push it to the bottom of the course details
  },
  progressBar: {
    width: 45,
    height: 35, // Increased height for better visibility
    justifyContent: 'center', // Center text vertically
    alignItems: 'center',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  bookmarkedCourse: {
    borderColor: '#E2DEDE',
    borderRadius: 8,
    borderWidth: 1,
    paddingBottom: 16,
    paddingHorizontal: 8,
    marginBottom: 16,
    marginHorizontal: 15,
  },
  courseBox: {
    height: 122,
    backgroundColor: '#BCE0FD',
    borderColor: '#5E27FD',
    borderWidth: 1,
    marginBottom: 21,
  },
  courseAuthor: {
    fontSize: 12,
    marginBottom: 5,
    color: '#181818',
  },
  courseDescription: {
    fontSize: 12,
    marginBottom: 11,
    color: '#707070',
  },
  courseTags: {
    flexDirection: 'row',
  },
  tag: {
    width: 56,
    alignItems: 'center',
    backgroundColor: '#34CC99',
    borderRadius: 20,
    paddingVertical: 8,
    marginRight: 16,
  },
  tagText: {
    fontSize: 10,
    color: '#FFFFFF',
  },
});
