import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './profileLibraryStyles';
import getAllEnrollmentsUser from '../../BackendProxy/courseProxy/getAllEnrollmentsUser';
import { Header } from '../(tabs)/header';
import { Footer } from '../(tabs)/footer';

const ProfileLibrary = () => {
  const authUser = useSelector((state) => state.user); // Get the user from Redux store

  const [courses, setCourses] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  useEffect(() => {
    fetchEnrolledCourses();
  }, []);
  const fetchEnrolledCourses = async () => {
    try {
      const res = await getAllEnrollmentsUser(authUser._id);
      console.log('Fetched Enrollments: ', res);

      console.log(res);
      const mappedCourses = res.data.map((enrollment) => ({
        ...enrollment.course,
        progress: enrollment.progress, // Add the progress from enrollment
      }));

      setCourses(mappedCourses);
      setLoaded(true);
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to load courses');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.pageTitle}>{'Library'}</Text>

        <View style={styles.categoriesContainer}>
          {['Math', 'Science', 'Coding', 'Art', 'Language'].map(
            (category, index) => (
              <View
                key={index}
                style={[
                  styles.categoryBox,
                  category === 'Math'
                    ? styles.selectedCategory
                    : styles.unselectedCategory,
                ]}
              >
                <Text
                  style={[
                    styles.categoryText,
                    category === 'Math'
                      ? styles.selectedCategoryText
                      : styles.unselectedCategoryText,
                  ]}
                >
                  {category}
                </Text>
              </View>
            )
          )}
        </View>

        {courses.map((course) => (
          <View key={course._id} style={styles.courseCard}>
            <Image
              source={
                course.imageUrl
                  ? { uri: course.imageUrl }
                  : {
                      uri: 'https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/07/Subject-Complement.png',
                    }
              }
              resizeMode={'stretch'}
              style={styles.courseImage}
            />
            <View style={styles.courseDetails}>
              <Text style={styles.courseTitle}>{course.title}</Text>
              <Text style={styles.courseCategory}>{course.category}</Text>
              <View style={styles.progressBadge}>
                <Text style={styles.progressText}>{course.progress}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};
export default ProfileLibrary;
