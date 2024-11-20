import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import { Footer } from '../(tabs)/footer';
import { Header } from '../(tabs)/header';
import { useSelector } from 'react-redux';
import getEnrolledCourses from '../../BackendProxy/courseProxy/getEnrolledCourses';

const { width } = Dimensions.get('window');

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const carouselData = Array(4).fill({
    id: Math.random().toString(),
    image: require('../../assets/images/Mridul.png'),
  });

  const renderCarouselItem = ({ item }) => (
    <Image source={item.image} style={styles.carouselImage} />
  );

  const onScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setActiveIndex(index);
  };

  const renderDotIndicator = () => (
    <View style={styles.dotsContainer}>
      {carouselData.map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            { backgroundColor: index === activeIndex ? '#E75480' : '#D3D3D3' },
          ]}
        />
      ))}
    </View>
  );

  return (
    <View style={styles.carouselContainer}>
      <FlatList
        ref={flatListRef}
        data={carouselData}
        renderItem={renderCarouselItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        keyExtractor={(item) => item.id}
      />
      {renderDotIndicator()}
    </View>
  );
};

const CourseCard = ({ course }) => (
  <TouchableOpacity style={styles.courseCard}>
    <Text style={styles.courseTitle} numberOfLines={2}>
      {course.title}
    </Text>
    <Text style={styles.courseSubtitle} numberOfLines={1}>
      {course.subject}
    </Text>
    <Image
      source={require('../../assets/images/Maths.jpg')}
      style={styles.courseImage}
    />
    <View style={styles.courseInfo}>
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>CONTINUE LESSON</Text>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

const Home = () => {
  const authUser = useSelector((state) => state.user);
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetchEnrolledCourses();
  }, []);

  const fetchEnrolledCourses = async () => {
    try {
      const res = await getEnrolledCourses(authUser._id);
      console.log('Fetched Enrollments: ', res);
      setCourses(res.res);
      setFilteredCourses(res.res);
    } catch (error) {
      console.error('Error fetching courses:', error);
      setErrorMessage('Failed to load courses');
    }
  };

  const handleSearch = (text) => {
    const filtered = courses.filter(
      (course) =>
        course.title.toLowerCase().includes(text.toLowerCase()) ||
        course.subject.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Carousel />
      <ScrollView style={styles.content}>
        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : (
          <>
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeText}>Welcome Back,</Text>
              <Text style={styles.userName}>
                {authUser?.firstName} {authUser?.lastName}
              </Text>
            </View>
            <View style={styles.courseSection}>
              <Text style={styles.sectionTitle}>
                Discover Our Course Offerings
              </Text>

              {filteredCourses.length > 0 ? (
                
                  <View style={styles.coursesGrid}>
                    <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={styles.scrollContainer}
                >
                    {filteredCourses.map((course) => (
                      <View key={course._id} style={styles.courseCardWrapper}>
                        <CourseCard course={course} />
                      </View>
                    ))}
                    </ScrollView>
                  </View>
              ) : (
                <Text style={styles.loadingText}>No courses found</Text>
              )}
            </View>
          </>
        )}
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    padding: 20,
    fontSize: 16,
  },
  carouselContainer: {
    height: 200,
  },
  carouselImage: {
    width,
    height: 200,
    resizeMode: 'cover',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
  scrollContainer: {
    flexDirection: 'row',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  welcomeContainer: {
    padding: 20,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    color: '#666',
  },
  userName: {
    fontSize: 32,
    color: '#E75480',
    fontWeight: 'bold',
  },
  courseSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  coursesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 8,
  },
  courseCardWrapper: {
    marginBottom: 16,
    padding: 10,
  },
  courseCard: {
    backgroundColor: '#fff',
    borderColor: '#34CC99',
    borderWidth: 1,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  courseImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  courseInfo: {
    padding: 10,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  courseSubtitle: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  continueButtonText: {
    color: '#000000',
    fontSize: 10,
    textAlign:'right',
    fontWeight: 'bold',
  },
  loadingText: {
    textAlign: 'center',
    padding: 20,
    color: '#666',
  },
});

export default Home;
