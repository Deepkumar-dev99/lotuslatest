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
import { useRouter } from 'expo-router';
import styles from './allCoursesStyle';
import CourseCard from '../Course/CourseCard';
import getCoursesByProp from '../../BackendProxy/courseProxy/getCoursesByProp';
import getAllEnrollmentsUser from '../../BackendProxy/courseProxy/getAllEnrollmentsUser';
  
const allCourses = () => {
  const router = useRouter(); // useRouter for navigation in Expo Router

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
    const navigateToScreen = (screenName) => {
      router.push(screenName); // Use router.push to navigate in Expo Router
    };
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView}>
        <View style={styles.searchcontainer}>
        <Ionicons name="search" size={25} color="#68D391" style={styles.icon} />
          <TextInput
            style={styles.searchinput}
          />
        </View>
          
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                author={course.creator.username}
                subject={course.categories[0]} // Assuming you want to display the first tag
                ageRange={course.age} // Replace this with actual value if available
              />
            ))}
            
            </ScrollView>
          </View>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
              {courses.map((course, index) => (
                <CourseCard
                  key={index}
                  title={course.title}
                  author={course.creator.username}
                  subject={course.categories[0]} // Assuming you want to display the first tag
                  ageRange={course.age} // Replace this with actual value if available
                />
              ))}
              
            </ScrollView>
          </View>
         <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
              {courses.map((course, index) => (
                <CourseCard
                  key={index}
                  title={course.title}
                  author={course.creator.username}
                  subject={course.categories[0]} // Assuming you want to display the first tag
                  ageRange={course.age} // Replace this with actual value if available
                />
              ))}
            </ScrollView>
          </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};
export default allCourses;
