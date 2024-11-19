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
import { useNavigation, useRouter, useLocalSearchParams } from 'expo-router'
import CourseCard from '../Course/CourseCard';
import getCoursesByProp from '../../BackendProxy/courseProxy/getCoursesByProp';
import getAllEnrollmentsUser from '../../BackendProxy/courseProxy/getAllEnrollmentsUser';
import getCourseData from '../../BackendProxy/courseProxy/getCourseData';
import styles from './lessonContentStyle';

const C3 = () => {
  const navigation = useNavigation();
  const router = useRouter();
  // const params = useLocalSearchParams();
  const { id } = useLocalSearchParams();
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
      setCourses(res.data);
      setLoaded(true);
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to load courses');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
     
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
                <Text style={styles.courseTitle}>{courses.title}</Text>
                <Text style={styles.courseDescription}>{courses.description}</Text>
              </View>
            </View>
            {/* Course Description */}
            <View style={styles.descriptionContainer}>
              <Text style={styles.courseLongDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </Text>
            </View>
            {/* Course Modules */}
            {courses.lessons && courses.lessons.length > 0 ? (
              courses.lessons.map((lession, lessonindex) => (
              <TouchableOpacity style={styles.moduleContainer}>
                <View key={lessonindex} style={styles.module}>
                  <Image source={require('../../assets/images/course1.png')} style={styles.courseImage} />
                  <View style={styles.column}>
                    <Link href="/courseGrade" style={styles.box3}>
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
      <Footer />
    </SafeAreaView>
  );
};
export default C3;