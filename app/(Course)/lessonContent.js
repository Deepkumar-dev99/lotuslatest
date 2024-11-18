import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,  
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Header } from '../(tabs)/header';
import { Footer } from '../(tabs)/footer';
import { LinearGradient } from 'expo-linear-gradient';
import { faBold } from '@fortawesome/free-solid-svg-icons';
import { Ionicons } from '@expo/vector-icons';
import { Link } from "expo-router";
import { useSelector } from 'react-redux';
import { useSearchParams } from 'expo-router';
import CourseCard from '../Course/CourseCard';
import getCoursesByProp from '../../BackendProxy/courseProxy/getCoursesByProp';
import getAllEnrollmentsUser from '../../BackendProxy/courseProxy/getAllEnrollmentsUser';
import getCourseData from '../../BackendProxy/courseProxy/getAllEnrollmentsUser';
import styles from './lessonContentStyle';

const C3 = () => {
  const params = useSearchParams(); // Access query parameters
  const id = params.id;
  console.log(id);
  
  const authUser = useSelector((state) => state.user); // Get the user from Redux store
  console.log(authUser);

  const [courses, setCourses] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  useEffect(() => {
    fetchEnrolledCourses();
  }, []);

  const fetchEnrolledCourses = async () => {
    try {
      const res = await getCourseData(id);
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
    <SafeAreaView style={styles.container}>
      <Header />
      {courses &&
        courses.map((course, index) => (
          <ScrollView style={styles.scrollView}>
            <View style={styles.header}>
              <Image
                source={require('../../assets/images/Maths.jpg')}
                style={styles.headerImage}
                resizeMode="cover"
              />
              <Image
                source={require('../../assets/images/Mridul.png')}
                style={styles.profileImage}
              />
              <View style={styles.courseDetails}>
                <Text style={styles.courseTitle}>{course.title}</Text>
                <Text style={styles.courseDescription}>{course.description}</Text>
                <Text style={styles.courseDescription}>{course.lessons.title}</Text>
              </View>
            </View>
            {/* Course Description */}
            <View style={styles.descriptionContainer}>
              <Text style={styles.courseLongDescription}>
                {course.courseLongDescription}
              </Text>
            </View>
            {/* Course Modules */}
            {courses.lessons && courses.lessons.length > 0 ? (
              courses.lessons.map((lession, lessonindex) => (
              <TouchableOpacity style={styles.moduleContainer}>
                <View key={lessonIndex} style={styles.module}>
                  <Image source={require('../../assets/images/course1.png')} style={styles.courseImage} />
                  <View style={styles.column}>
                    <Link href="/C4" style={styles.box3}>
                      <Text style={styles.moduleTitle}>{lession.title}</Text>
                    </Link>
                    <Text style={styles.moduleTime}>1 Hour, 10 min</Text>
                  </View>
                  <Ionicons  size={25} color="#F2F2F2" style={styles.lock} />
                </View>
              </TouchableOpacity>
            )) ): (
              <Text>No lessons available</Text>
            )}
            <View style={[styles.moduleContainer, styles.locked]}>
              <View style={styles.module}>
                <Image source={require('../../assets/images/course1.png')} style={styles.courseImage} />
                <View style={styles.column}>
                  <Text style={styles.moduleTitle}>02. Lorem Ipsum</Text>
                  <Text style={styles.moduleTime}>1 Hour, 10 min</Text>
                </View>
                <Ionicons name="lock-closed" size={25} color="#F2F2F2" style={styles.lock} />
              </View>
            </View>
            <View style={[styles.moduleContainer, styles.locked]}>
              <View style={styles.module}>
                <Image source={require('../../assets/images/course1.png')} style={styles.courseImage} />
                <View style={styles.column}>
                  <Text style={styles.moduleTitle}>03. Lorem Ipsum</Text>
                  <Text style={styles.moduleTime}>1 Hour, 10 min</Text>
                </View>
                <Ionicons name="lock-closed" size={25} color="#F2F2F2" style={styles.lock} />
              </View>
            </View>
            <View style={[styles.moduleContainer, styles.locked]}>
              <View style={styles.module}>
                <Image source={require('../../assets/images/course1.png')} style={styles.courseImage} />
                <View style={styles.column}>
                  <Text style={styles.moduleTitle}>04. Lorem Ipsum</Text>
                  <Text style={styles.moduleTime}>1 Hour, 10 min</Text>
                </View>
                <Ionicons name="lock-closed" size={25} color="#F2F2F2" style={styles.lock} />
              </View>
            </View>
          </ScrollView>
      ))}
      <Footer />
    </SafeAreaView>
  );
};
export default C3;