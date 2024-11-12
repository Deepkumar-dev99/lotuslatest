import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Install LinearGradient: https://github.com/react-native-linear-gradient/react-native-linear-gradient
import { Header } from '../(tabs)/header';
import { Footer } from '../(tabs)/footer';
import CourseCard from '../Course/CourseCard';
import styles from './profileCourseStyles';

const ProfileCourse = () => {
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

export default ProfileCourse;

