import React, { useState,useEffect } from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
} from 'react-native';
import { Header } from '../(tabs)/header';
import { Footer } from '../(tabs)/footer';
import CourseCard from '../Course/CourseCard'; // Import the new CourseCard component
import { useGlobalContext } from '../../context/GlobalProvider';
import { useSelector } from 'react-redux';
import getCoursesByProp from '../../BackendProxy/courseProxy/getCoursesByProp'
import getEnrolledCourses from '../../BackendProxy/courseProxy/getEnrolledCourses'
import styles from './profileHomeStyle';


const ProfileHome = () => {
  const authUser = useSelector((state) => state.user);
  const [courses, setCourses] = useState();
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    fetchEnrolledCourses();
  }, []);
  const fetchEnrolledCourses = async () => {
    try {
      const res = await getEnrolledCourses(authUser._id);
      console.log('Fetched Enrollments: ', res);
      setCourses(res.res);
      setLoaded(true);
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to load courses');
    }
  };
  // const getAllAcceptedCourses = async () => {
  //   try {
  //     let res;
  //     if (
  //       authUser.accountType === 'instructor' ||
  //       authUser.accountType === 'admin'
  //     ) {
  //       console.log('this is instructor or admin');
  //       res = await getCoursesByProp(
  //         'creator.email',
  //         authUser.email,
  //         authUser.institution.code
  //       );
  //       console.log(res);
  //     } else {
  //       // res = await getCoursesByProp('null', null, authUser.institution.code);
  //       console.log(authUser._id);
        
  //       res = await getEnrolledCourses("authUser._id");
  //     }
  //     setCourses(res.res);

  //     //setLoadedCourses(true);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView}>
        <View style={styles.row2}>
          <View style={styles.column3}>
            <Text style={styles.userName}>
              {authUser?.firstName} {authUser?.lastName}
            </Text>
            <Text style={styles.text3}>
              {authUser?.stateProvince},{authUser?.country}
            </Text>
          </View>

          <Image
            source={require('../../assets/images/Mridul.png')}
            resizeMode={'cover'}
            style={styles.profileImage}
          />

          <View style={styles.badge}>
            <Image
              source={require('../../assets/images/MainLogo.png')}
              style={styles.starIcon}
            />
            <Text style={styles.badgeText}>Algebra II</Text>
          </View>
        </View>
        <View style={styles.coursesSection}>
          <Text style={styles.coursesTitle}>Courses</Text>
          {courses && courses.length > 0 ? (
            courses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                author={course.creator.username}
                subject={course.categories[0]} // Assuming you want to display the first tag
                ageRange={course.age} // Replace this with actual value if available
              />
            ))
          ) : (
            <Text style={styles.noCoursesText}>No courses found</Text>
          )}
        </View>
        <View style={styles.row4}>
          {courses &&
            courses.map((course, index) => (
              <View style={[styles.commonColumn]}>
                <Image
                  source={require('../../assets/images/Maths.jpg')} // Assuming 'imageUrl' is a property in your course object
                  style={styles.commonBox} // Define a new style for the image
                />
                <Text style={styles.text4}>{course.title}</Text>
              </View>
            ))}
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};
export default ProfileHome;

